const customInputBoxEl = document.querySelectorAll(".custom-input-box");
const customInputEl = document.querySelectorAll(".custom-input");
const customPlaceholderEl = document.querySelectorAll(".custom-placeholder");
const customInputTextareaEl = document.querySelectorAll(".custom-input-textarea");
eventlisterners();
function eventlisterners() {
    customInputEl.forEach(input => {
        input.addEventListener("focusin", inputFocusIn);
        input.addEventListener("focusout", inputFocusOut);
    });
    customInputTextareaEl.forEach(textarea => {
        textarea.addEventListener("focusin", textareaFocusIn);
        textarea.addEventListener("focusout", textareaFocusOut);
    })
}

function inputFocusIn() {
    const customLabelEl = this.nextElementSibling;
    if(customLabelEl.classList.contains("custom-placeholder"))
        customLabelEl.classList.add("active");

    // if (customLabelEl.className === "custom-placeholder") {
    // }
}
function inputFocusOut() {
    const inputEl = this;
    const customLabelEl = this.nextElementSibling;
    if (customLabelEl.classList.contains("custom-placeholder")) {
        if (inputEl.value == "" || inputEl.value == null)
            customLabelEl.classList.remove("active");
    }
}