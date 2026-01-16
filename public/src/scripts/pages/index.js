
console.log("askjhdaskj");


import Modal from "../utils/modal.js";
import FormQuestions from "../utils/formQuestion.js";

import ProductsRequest from "../requests/productsRequest.js";

const products_request = new ProductsRequest();

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
        let a = products_request.getAll();
        console.log(a)
    }
)

novoProdutoModal.modalForm.addEventListener("submit", () => {
    let response = novoProdutoModal.confirm();

    console.log(response)
});