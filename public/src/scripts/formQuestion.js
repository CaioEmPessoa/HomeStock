
class FormQuestion {

    constructor (title) {
        this.title = title;
    }

    text(name="") {

        let modalFormQuestion = document.createElement('div');
        modalFormQuestion.classList.add("modal-form-question");

        let modalQuestionTitle = document.createElement('p');
        modalQuestionTitle.classList.add("modal-question-title");
        modalQuestionTitle.innerText = this.title;

        let modalQuestionInput = document.createElement('input');
        modalQuestionInput.classList.add("modal-question-input")
        modalQuestionInput.type = "text";
        modalQuestionInput.name = name;

        modalFormQuestion.append(modalQuestionTitle);
        modalFormQuestion.append(modalQuestionInput);

        document.querySelector("body").append(modalFormQuestion)

        return modalFormQuestion;
    }

    paragraph() {
        /* TODO */
    }

    select(options = [], name="") {
        let modalFormQuestion = document.createElement('div');
        modalFormQuestion.classList.add("modal-form-question");

        let modalQuestionTitle = document.createElement('p');
        modalQuestionTitle.classList.add("modal-question-title");
        modalQuestionTitle.innerText = this.title;

        modalFormQuestion.append(modalQuestionTitle);

        options.forEach((el) => {

            let modalQuestionSelectOption = document.createElement('div');
            modalQuestionSelectOption.classList.add("modal-question-select-option");

            let modalQuestionInput = document.createElement('input');
            modalQuestionInput.type  = "radio";
            modalQuestionInput.value = el;
            modalQuestionInput.name  = name;
            modalQuestionInput.id  = `${name}-${el}`;

            let modalQuestionInputLabel = document.createElement('label');
            modalQuestionInputLabel.htmlFor = `${name}-${el}`;
            modalQuestionInputLabel.textContent = el;

            modalQuestionSelectOption.append(modalQuestionInput);
            modalQuestionSelectOption.append(modalQuestionInputLabel);

            modalFormQuestion.append(modalQuestionSelectOption);
        })

        return modalFormQuestion;

    }

    date() {
        /* TODO */
    }

    toggle() {
        /* TODO */
    }
}

export default FormQuestion;
