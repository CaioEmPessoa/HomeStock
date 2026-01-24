
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
        const productsCompactList = document.querySelector(".products-compact-list");
        productsCompactList.innerHTML = "";

        this.products_request.getAll().then((productsData) => {
            productsData.body.forEach(product => {
                console.log(product);

            let item = `
                    <div class="product-compact-list-item">

                        <div class="compact-item-info">
                            <img class="compact-item-icon" src="https://placehold.co/125x125" alt="#">
                            <p class="compact-item-name">${product.product_name}</p>
                        </div>

                        <div class="compact-item-stock">
                            <button class="compact-item-stock-remove">
                                <svg class="compact-item-stock-remove-icon" viewBox="0 -12 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                                            <g sketch:type="MSLayerGroup" transform="translate(-414.000000, -1049.000000)" fill="#000000">
                                                <path d="M442,1049 L418,1049 C415.791,1049 414,1050.79 414,1053 C414,1055.21 415.791,1057 418,1057 L442,1057 C444.209,1057 446,1055.21 446,1053 C446,1050.79 444.209,1049 442,1049" id="minus" sketch:type="MSShapeGroup">

                                    </path>
                                            </g>
                                        </g>
                                    </svg>
                            </button>
                            <input class="compact-item-stock-edit"></input>
                            <button class="compact-item-stock-increase">
                                <svg class="compact-item-stock-increase-icon" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                                        <g sketch:type="MSLayerGroup" transform="translate(-362.000000, -1037.000000)" >/
                                            <path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049" sketch:type="MSShapeGroup">                                                </path>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>

                        <div class="compact-item-data">
                            <div class="compact-item-data-item">
                                <div class="compact-item-data-title">Cod de Barras:</div>
                                <div class="compact-item-data-data">${product.product_barcode}</div>
                            </div>
                        </div>

                        <div class="compact-item-actions">
                            <button class="compact-item-actions-more">
                                <svg viewBox="0 0 16 16" class="compact-item-actions-more">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
            `

            productsCompactList.innerHTML += item
            });
        })


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