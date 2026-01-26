
class FormQuestion {

    constructor (title, customClass) {
        this.title = title || "";
        this.customClass = customClass || "";
    }
    
    _genModalFormQuestion() {
        let modalFormQuestion = document.createElement('div');
        // Always adds the class "modal-form-question"
        // If user passed a new custom class, adds it too.
        modalFormQuestion.classList.add(
            ...["modal-form-question", this.customClass].filter(Boolean)
        );

        let modalQuestionTitle = document.createElement('p');
        modalQuestionTitle.classList.add("modal-question-title");
        modalQuestionTitle.innerText = this.title;

        modalFormQuestion.append(modalQuestionTitle);

        return modalFormQuestion;
    }

    generic(inputType="", name="") {

        let modalFormQuestion = this._genModalFormQuestion();

        let modalQuestionInput = document.createElement('input');
        modalQuestionInput.classList.add("modal-question-input")
        modalQuestionInput.type = inputType;
        modalQuestionInput.name = name;

        modalFormQuestion.append(modalQuestionInput);

        return modalFormQuestion;
    }

    text(name="") {
        return this.generic("text", name);
    }
    date(name="") {
        return this.generic("date", name);
    }
    number(name="", min, max) {
        let modalFormQuestion = this.generic("number", name);

        let modalQuestionInput = modalFormQuestion.querySelector(".modal-question-input")
        modalQuestionInput.min = min;
        modalQuestionInput.max = max;
        modalQuestionInput.name = name;

        return modalFormQuestion;
    }

    paragraph() {
        /* TODO */
    }

    select(options = [], name="") {
        let modalFormQuestion = this._genModalFormQuestion();

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

    dropdown(options = [], name="", defaultOption="") {
        let modalFormQuestion = this._genModalFormQuestion();

        let modalQuestionSelectDropdown = document.createElement("select");
        modalQuestionSelectDropdown.classList.add("modal-question-input");
        modalQuestionSelectDropdown.name = name;

        if (defaultOption) options.unshift({name:defaultOption, value:null});
        options.forEach((el) => {
            let modalQuestionSelectDropdownOption = document.createElement('option');
            modalQuestionSelectDropdownOption.value = el.value;
            modalQuestionSelectDropdownOption.innerText = el.name;

            modalQuestionSelectDropdown.append(modalQuestionSelectDropdownOption);
        })

        modalFormQuestion.append(modalQuestionSelectDropdown);

        return modalFormQuestion;
    }

    toggle(label="", name="") {
        let modalFormQuestion = this._genModalFormQuestion();

        // Toggle elmnts
        let modalToggleDiv = document.createElement("div");
        modalToggleDiv.classList.add("modal-form-toggle-div");

        let modalToggle = document.createElement("label");
        modalToggle.classList.add("modal-form-toggle");

        let modalToggleInput = document.createElement("input");
        modalToggleInput.type = "checkbox";
        modalToggleInput.name = name;
        
        let modalToggleSpan = document.createElement("span");
        modalToggleSpan.classList.add("modal-form-toggle-slider");

        let modalToggleLabel = document.createElement("p");
        modalToggleLabel.innerText = label;

        // Appends
        modalToggle.append(modalToggleInput);
        modalToggle.append(modalToggleSpan);

        modalToggleDiv.append(modalToggle);
        modalToggleDiv.append(modalToggleLabel);

        modalFormQuestion.append(modalToggleDiv);

        return modalFormQuestion;
    }

    // Other components
    spacer(showHr=true) {
        let modalFormQuestion = document.createElement('div');
        modalFormQuestion.classList.add("modal-form-question");

        
        let modalQuestionTitle = document.createElement('h3');
        modalQuestionTitle.innerText = this.title;

        if (showHr) {
            let modalQuestionDiv = document.createElement('hr');
            modalFormQuestion.append(modalQuestionDiv);
        }

        modalFormQuestion.append(modalQuestionTitle)

        return modalFormQuestion;
    }

    // Display a list of other components
    // next to each other on the same row.
    double(components=[]) {
        let modalFormQuestion = document.createElement('div');
        modalFormQuestion.classList.add("modal-form-question");

        let modalQuestionTitle = document.createElement('p');
        modalQuestionTitle.classList.add("modal-question-title");
        modalQuestionTitle.innerText = this.title;

        let doubleRow = document.createElement("div");
        doubleRow.classList.add("modal-form-double-row");

        components.forEach(el => {
            doubleRow.append(el);
        });

        modalFormQuestion.append(modalQuestionTitle);
        modalFormQuestion.append(doubleRow);

        return modalFormQuestion;

    }
}

export default FormQuestion;
