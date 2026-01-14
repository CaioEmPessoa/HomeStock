
import Modal from "./modal.js";
import FormQuestions from "./formQuestion.js";

const novoProdutoModalForm = [
    new FormQuestions("Teste").text(),
    new FormQuestions("Qual seu favorito?").select([
        "bolo",
        "pizza",
        "agua"
    ], "teste")
]

const novoProdutoModal = new Modal(novoProdutoModalForm);

let newProductButton = document.querySelector(".new-product-button")

newProductButton.addEventListener( "click", () => {
        novoProdutoModal.show();
    }
)

