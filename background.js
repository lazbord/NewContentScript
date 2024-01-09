let userInput = "default"; // Declare userInput outside the listeners

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.userInput) {
        userInput = message.userInput; // Update the global userInput
        console.log("background received : " + userInput);
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Respond to 'get-user-data' message with the updated userInput
    if (message === 'get-user-data') {
        sendResponse(userInput);
        console.log("background send :" + userInput);
    }
});
