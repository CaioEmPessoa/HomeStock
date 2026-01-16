
class Modal {

    /**
     *
     * @param {[formQuestion]} questions - A list of form questions
     */
    constructor (questions) {
        this.questions = questions;
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
        modalTitle.textContent = 'Teste!';

        const modalCloseBtn = document.createElement('button');
        modalCloseBtn.className = 'modal-close';
        modalCloseBtn.textContent = 'X';

        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(modalCloseBtn);

        // Form
        const modalForm = document.createElement('form');
        modalForm.className = 'modal-form';

        this.questions.forEach(question => {
            modalForm.append(question);
        });

        // Buttons
        const modalButtons = document.createElement('div');
        modalButtons.className = 'modal-buttons';

        this.cancelBtn = document.createElement('button');
        this.cancelBtn.className = 'modal-cancel';
        this.cancelBtn.textContent = 'cancelar';

        this.confirmBtn = document.createElement('input');
        this.confirmBtn.className = 'modal-confirm';
        this.confirmBtn.type = 'submit';
        this.confirmBtn.textContent = 'confirmar';

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
        this.modal.addEventListener('click', (e) => {
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