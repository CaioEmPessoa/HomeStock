class Notification {
    constructor(message, error, time) {
        this.message = message;
        this.error = error;
        this.time = time ?? error ? 4000 : 2500;
        // time = 2500 if time was not sent. If is an error, time is longer.

        this._createNotf();
    }

    _createNotf() {

        this.notfElmnt = document.createElement("div");
        this.notfElmnt.classList.add("notification");

        if (this.error === true) this.notfElmnt.classList.add("error");

        this.notfMsgElmnt = document.createElement("p");
        this.notfMsgElmnt.innerText = this.message;

        this.notfElmnt.append(this.notfMsgElmnt);

        document.querySelector("div.notification-area").append(this.notfElmnt);
    }


    show() {
        this.notfElmnt.classList.remove("hide");
        this.notfElmnt.classList.add("show");
    }

    pop() {
        this.notfElmnt.classList.remove("show");
        this.notfElmnt.classList.add("hide");

        setTimeout(() => {
            this.notfElmnt.remove();
        }, 750)
    }

    showPop() {
        this.show()
        setTimeout(() => {
            this.pop();
        }, this.time)
    }
}

export default Notification;