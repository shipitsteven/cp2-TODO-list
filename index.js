"use strict";

(function() {

    window.addEventListener('load', init);

    function init() {
        const input = id("input");
        input.addEventListener("keypress", addToDo);
        id("addSign").addEventListener("click", addToDo);
    }

    function addToDo(event){
        if(event.key === "Enter" ||
            (event.type === "click" && event.target.id === "addSign")){
            const newItem = input.value;
            resetTextBox();
            let list = id("list");
            let li = gen("li");
            li.innerText = newItem;
            li.append(genTrashIcon());
            list.appendChild(li);
            li.addEventListener("click", function() {
                this.classList.toggle("strikeThrough");
            })
        }
    }

    function resetTextBox() {
        input.value="";
        input.placeholder = "Add Another TO-DO";
    }

    function genTrashIcon() {
        const span = gen("span");
        const icon = gen("i")
        icon.classList.add("fas", "fa-trash-alt")
        icon.id = "trash";
        span.append(icon);
        span.addEventListener("click", function() {
            this.parentElement.remove();
        })
        return span;
    }


    function id(idName) {
        return document.getElementById(idName);
    }
    function qs(selector) {
        return document.querySelector(selector);
    }
    function qsa(selector) {
        return document.querySelectorAll(selector);
    }

    /**
     * Returns a new element with the given tag name.
     * @param {string} tagName - HTML tag name for new DOM element.
     * @returns {object} New DOM object for given HTML tag.
     */
    function gen(tagName) {
        return document.createElement(tagName);
    }

})();

