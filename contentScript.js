// Attach an event listener to the input element
userNameInput.addEventListener("input", handleInputChange);

let user_input = "default";

const inputElements = document.getElementsByTagName("input");

for (let i = 0; i < inputElements.length; i++) {
    if (inputElements[i].id.toLowerCase().includes("user")) {
        console.log(`Input element with ID "${inputElements[i].id}" contains 'user'.`);
        user_input = inputElements[i].id;
    }
}

function handleInputChange() {
    // Retrieve the value of the input field
    const userInput = user_input.value;
    chrome.runtime.sendMessage({ userInput: userInput });
    console.log("Content script send" + userInput);
}

