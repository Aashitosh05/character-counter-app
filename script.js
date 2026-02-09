const textInput = document.getElementById("textInput");
const count = document.getElementById("count");

textInput.addEventListener("input", function () {
    count.innerText = textInput.value.length;
});
