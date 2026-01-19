/*
    This isn't a class meant to be used,
    just as a reference to what a pages
    class should look like.
*/

class pagesBase {
    constructor() {

        /**
         * Calling other classes, initiating variables...
        **/

        this.staticElmnts();
        this.dynamicElmnts();
        this.addEvents();

    }

    staticElmnts() {
        /**
         * Static generated elements, like modals and other components.
         */
    }

    dynamicElmnts() {
        /**
         * Dynamically generated elements, generally that require a request
         * to be made.
         */
    }

    addEvents() {
        /**
         * Adding events to the created elements.
         */
    }
}

const pages_base = new pagesBase();