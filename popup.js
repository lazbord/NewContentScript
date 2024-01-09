function showUsername() {
    chrome.runtime.sendMessage('get-user-data', (response) => {
        console.log('Received response', response);
    });
}

document.getElementById("UsernameBtn").addEventListener("click", showUsername);