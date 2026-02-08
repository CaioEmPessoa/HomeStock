class Notification {
    /**
     *
     * @param {string} message - The message to display on the notification.
     * @param {boolean} error - Changes the style of the notification, also the ammount it stays on screen.
     * @param {number} time - Defaults to 2500, when error=true goes o 4000. Sending a number overwrites the value.
     */
    constructor(message, error, time) {
        this.message = message;
        this.error = error;
        this.time = time ?? error ? 4000 : 2500;
        this.exists;

        this._createNotf();
    }

    _appendNotf() {
        document.querySelector("div.notification-area").append(this.notfElmnt);
        this.exists = true;
    }

    _createNotf() {
        this.notfElmnt = document.createElement("div");
        this.notfElmnt.classList.add("notification");

        if (this.error === true) this.notfElmnt.classList.add("error");

        this.notfMsgElmnt = document.createElement("p");
        this.notfMsgElmnt.innerText = this.message;

        this.notfElmnt.append(this.notfMsgElmnt);
    }


    /**
     * Shows the notification on screen.
     */
    show() {
        if (!this.exists) this._appendNotf();

        this.notfElmnt.classList.remove("hide");
        this.notfElmnt.classList.add("show");
    }

    /**
     * Hides and deletes the notification on this class.
     */
    pop() {
        this.notfElmnt.classList.remove("show");
        this.notfElmnt.classList.add("hide");

        setTimeout(() => {
            this.notfElmnt.remove();
            this.exists = false;
        }, 750)
    }

    /**
     * Showns, then hides and delete the notification on this class.
     */
    showPop() {
        this.show()
        setTimeout(() => {
            this.pop();
        }, this.time)
    }
}

export default Notification;