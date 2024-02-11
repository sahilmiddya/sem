const display = document.getElementById("display");
const buttons = document.getElementById("buttons");

buttons.addEventListener("click", handleClick);

function handleClick(event) {
    if (event.target.tagName === "BUTTON") {
        const buttonText = event.target.textContent;

        switch (buttonText) {
            case "=":
                calculate();
                break;
            case "CE":
                clearEntry();
                break;
            case "⌫":
                backspace();
                break;
            default:
                display.textContent += buttonText;
                break;
        }
    }
}

function clearEntry() {
    display.textContent = "";
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1);
    // display.textContent = display.textContent.split("").pop().join("");
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = "Error";
    }
}
