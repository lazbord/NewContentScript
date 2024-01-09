chrome.tabs.getCurrent(function(tab) {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['contentScript.js']
    });
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.userInput) {
        const userInput = message.userInput;
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            // 2. A page requested user data, respond with a copy of `user`
            if (message === 'get-user-data') {
                sendResponse(userInput);
                console.log("background send :" + userInput);
            }
        });
    }
});