

import Modal from "../utils/modal.js";
import FormQuestions from "../utils/formQuestion.js";

import productsRequest from "../requests/productsRequest.js";

class index {
    constructor() {
        this.products_request = new productsRequest();

        this.staticElmnts();
        this.dynamicElmnts();
        this.addEvents();

    }

    staticElmnts() {
        const novoProdutoModalForm = [
            new FormQuestions("Qual seu nome?").text("nome"),
            new FormQuestions("E sobrenome?").text("sobrenome"),
            new FormQuestions("Qual seu favorito?").select([
                "bolo",
                "pizza",
                "agua"
            ], "comida")
        ]

        this.novoProdutoModal = new Modal(novoProdutoModalForm);
    }

    dynamicElmnts() {

    }

    addEvents() {
        let newProductButton = document.querySelector(".new-product-button")

        newProductButton.addEventListener( "click", () => {
                this.novoProdutoModal.show();
            }
        )

        this.novoProdutoModal.modalForm.addEventListener("submit", () => {
            let response = this.novoProdutoModal.confirm();

            console.log(response)
        });
    }
}

const index_ = new index();