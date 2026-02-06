
class Modal {

    /**
     *
     * @param {[formQuestion]} questions - A list of form questions
     * @param {string} title - The modal's title
     * @param {string} submitText - Text that should appear as the "submit" button
     * @param {string} cancelText - Text that should appear as the "cancel" button
     */
    constructor (questions, title, submitText, cancelText) {
        this.questions = questions;
        this.title = title;
        this.submitText = submitText ?? "Submit";
        this.cancelText = cancelText ?? "Cancel";
        this.modal = this.createModal();

        this.modalForm = this.modal.querySelector("form");
        this.bindEvents();
    }

    createModal() {
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-box-overlay modal-box-hidden';

        const modalBox = document.createElement('div');
        modalBox.className = 'modal-box';

        // Header
        const modalHeader = document.createElement('div');
        modalHeader.className = 'modal-header';

        const modalTitle = document.createElement('h3');
        modalTitle.className = 'modal-title';
        modalTitle.textContent = this.title;

        const modalCloseBtn = document.createElement('button');
        modalCloseBtn.className = 'modal-close';
        modalCloseBtn.textContent = 'X';

        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(modalCloseBtn);

        // Form
        const modalForm = document.createElement('form');
        modalForm.className = 'modal-form';

        this.questions.forEach(question => {
            // TODO: This maybe not performatic.
            // Am doing this just to reuse the New Question arrays
            const cp_elmnt = question.cloneNode(true);
            modalForm.append(cp_elmnt);
        });

        // Buttons
        const modalButtons = document.createElement('div');
        modalButtons.className = 'modal-buttons';

        this.cancelBtn = document.createElement('button');
        this.cancelBtn.className = 'modal-cancel';
        this.cancelBtn.textContent = this.cancelText;

        this.confirmBtn = document.createElement('input');
        this.confirmBtn.className = 'modal-confirm';
        this.confirmBtn.type = 'submit';
        this.confirmBtn.value = this.submitText;

        modalButtons.appendChild(this.cancelBtn);
        modalButtons.appendChild(this.confirmBtn);

        // Assemble
        modalBox.appendChild(modalHeader);
        modalBox.appendChild(modalForm);
        modalForm.appendChild(modalButtons);

        modalOverlay.appendChild(modalBox);

        document.body.appendChild(modalOverlay);

        return modalOverlay;
    }

    bindEvents() {

        const closeBtn = this.modal.querySelector('.modal-close');
        const cancelBtn = this.modal.querySelector('.modal-cancel');

        closeBtn.addEventListener('click', () => this.close());
        cancelBtn.addEventListener('click', () => this.close(true));

        // Close when clicking outside modal
        this.modal.addEventListener('mousedown', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });

        this.modal.addEventListener('submit', (e) => {
            e.preventDefault();
        })

    }

    show() {
        this.modal.classList.remove('modal-box-hidden')
    }

    reset() {
        this.modalForm.reset()
    }

    setValues(obj) {
        const formData = new FormData(this.modalForm);
        const formObject = Object.fromEntries(formData.entries());

        Object.keys(formObject).forEach((formElmnt) => {
            let el = this.modalForm.querySelector(`[name="${formElmnt}"]`);
            el.value = obj[formElmnt];
        })

    }

    close (reset) {
        if(reset === true) this.reset();
        this.modal.classList.add('modal-box-hidden');
    }

    confirm () {
        const formData = new FormData(this.modalForm);

        const formObject = Object.fromEntries(formData.entries());

        this.reset();
        this.close();

        return formObject;
    }
}

export default Modal;