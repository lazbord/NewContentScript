function init() {
    const userInput = userNameInput.value;
    chrome.runtime.sendMessage({ userInput: userInput });
}
