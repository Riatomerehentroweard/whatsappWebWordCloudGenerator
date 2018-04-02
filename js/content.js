console.log('content.js');

chrome.runtime.sendMessage({ todo: "showPageAction" });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.todo === 'changeColor') {
        if (!document.querySelector('#main> header + div')) {
            alert('Please open a chat to generate a wordcloud');
        } else {
            const chatContainer = document.querySelector('#main> header + div');
            const allMessagesIncludingEmojis = chatContainer.querySelectorAll(".selectable-text.invisible-space.copyable-text");
            const allChatMessages = Array.from(allMessagesIncludingEmojis)
                .filter((el) => el.tagName === 'SPAN');
            sendResponse({
                response: allChatMessages
            });
        }
        console.log('gotten the changecolor message');
    }
});