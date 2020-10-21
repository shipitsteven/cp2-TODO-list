/*
 * Name: Steven Wang
 * Date: October 21, 2020
 * Section: CSE 154 AF
 *
 * This is the JS to facilitate the behavior of my TO-DO list app.
 */

"use strict";

(function() {

  window.addEventListener('load', init);

  /**
   * Adding listener when the page loads
   */
  function init() {
    id("input").addEventListener("keypress", addToDo);
    id("add-sign").addEventListener("click", addToDo);
  }

  /**
   * Add new item to the list, checks for empty string
   * @param {MyEvent} event Keyboard event or mouse event
   * @listens MyEvent
   */
  function addToDo(event) {
    if (event.key === "Enter" ||
      (event.type === "click" && event.target.id === "add-sign")) {
      let newItem = id("input").value;
      if (newItem !== "") {
        let list = id("list");
        let li = gen("li");
        li.innerText = newItem;
        resetTextBox();
        li.append(genTrashIcon());
        li.addEventListener("click", function() {
          this.classList.toggle("strikeThrough");
        });
        list.appendChild(li);
      } else {
        input.placeholder = "Item cannot be empty."
      }
    }
  }

  /**
   * Resets the text input area to default state
   */
  function resetTextBox() {
    input.value = "";
    input.placeholder = "Add Another TO-DO";
  }

  /**
   * adds X to the list that acts as delete button
   * It used to be an icon, but i tag is banned, so function name is preserved
   * @return {object} HTML span element
   */
  function genTrashIcon() {
    let span = gen("span");
    span.innerText = "X";
    span.addEventListener("click", function () {
      this.parentElement.remove();
    });
    return span;
  }

  /**
   * Returns a new element with the given id
   * @param {string} idName HTML id for the desired DOM element.
   * @return {object} DOM element with the corresponding HTML ID.
   */
  function id(idName) {
    return document.getElementById(idName);
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