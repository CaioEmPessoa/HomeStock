
class PopUpMenu {

    /**
     *
     * @param {[options]} options - A list of the options to display
     * @param {string} position (left, right, top, bottom) - Where the popup will be displayed in relation to the target
     */
    constructor (options, position) {
        this.options = options;
        this.position = position ?? "left";

        this.popUpMenu = this.createPopUpMenu();

        this.bindEvents();
    }

    createPopUpMenu() {

        const popUpMenu = document.createElement("popUpMenu");
        popUpMenu.classList.add("popUpMenu");
        popUpMenu.style.animation = `slide-${this.position} 300ms ease-in-out`;

        this.options.forEach(optn => {
            const optionEl = document.createElement("button");
            optionEl.classList.add("popUpMenuButton");
            optionEl.dataset.name = optn;
            optionEl.innerText = optn;

            popUpMenu.append(optionEl);
        });

        return popUpMenu;
    }

    bindEvents() {

        // Close when clicking on the same element that opened it
        if(this.target) {
            this.target.addEventListener('click', (e) => {
                this.close();
            });
        }

    }

    show(target) {
        if(this.target == target){
            this.close();
            return;
        }

        this.target = target;
        target.append(this.popUpMenu);

        // position - defaults to left
        switch(this.position)
        {
            case "left":
                this.popUpMenu.style.left = `${target.offsetLeft-(this.popUpMenu.offsetWidth)}px`;
                this.popUpMenu.style.top  = `${target.offsetTop}px`;
                break;
            case "right":
                this.popUpMenu.style.left = `${target.offsetLeft+(target.offsetWidth)}px`;
                this.popUpMenu.style.top  = `${target.offsetTop}px`;
                break;
            case "top":
                this.popUpMenu.style.top  = `${target.offsetTop-(this.popUpMenu.offsetHeight)}px`;
                break;
            case "bottom":
                break;
        }

        // appending and showing
        this.popUpMenu.classList.remove('popupmenu-hidden');
        this.popUpMenu.classList.add('popupmenu-shown');
    }

    close () {
        this.popUpMenu.classList.remove('popupmenu-shown');
        this.popUpMenu.classList.add('popupmenu-hidden');
        this.target = undefined;
    }

}

export default PopUpMenu;