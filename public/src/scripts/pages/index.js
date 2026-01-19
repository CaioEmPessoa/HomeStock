

import Modal from "../utils/modal.js";
import FormQuestions from "../utils/formQuestion.js";

import productsRequest from "../requests/productsRequest.js";

const products_request = new productsRequest();

const novoProdutoModalForm = [
    new FormQuestions("Qual seu nome?").text("nome"),
    new FormQuestions("E sobrenome?").text("sobrenome"),
    new FormQuestions("Qual seu favorito?").select([
        "bolo",
        "pizza",
        "agua"
    ], "comida")
]

const novoProdutoModal = new Modal(novoProdutoModalForm);

let newProductButton = document.querySelector(".new-product-button")

newProductButton.addEventListener( "click", () => {
        novoProdutoModal.show();
        products_request.getAll().then((a) => {
            console.log(a)

        });
    }
)

novoProdutoModal.modalForm.addEventListener("submit", () => {
    let response = novoProdutoModal.confirm();

    console.log(response)
});