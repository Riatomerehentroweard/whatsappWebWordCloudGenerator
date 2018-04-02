chrome.runtime.sendMessage({ todo: "showPageAction" });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.todo === 'fetchChatlog') {
        if (!document.querySelector('#main> header + div')) {
            alert('Please open a chat to generate a wordcloud');
        } else {
            sendResponse(getChatLog());
        }
    }
});

function getChatLog() {
    const chatContainer = document.querySelector('#main> header + div');
    const allMessagesIncludingEmojis = chatContainer.querySelectorAll(".selectable-text.invisible-space.copyable-text");
    const allChatMessages = Array.from(allMessagesIncludingEmojis)
        .filter((el) => el.tagName === 'SPAN');
    const allEmojis = Array.from(allMessagesIncludingEmojis)
        .filter((el) => el.tagName === 'IMG');
    const allChatMessagesConcatenated = allChatMessages.reduce(concatenateMessages, '');
    const allEmojisConcatenated = allEmojis.reduce(concatenateEmojis, '');
    return {
        chatMessages: allChatMessagesConcatenated,
        emojis: allEmojisConcatenated
    };
}

function concatenateEmojis(acc, currVal) {
    return concat(acc, currVal, 'alt');
}

function concatenateMessages(acc, currVal) {
    return concat(acc, currVal, 'innerText');
}

function concat(acc, currVal, valueToRead) {
    return acc + ' ' + currVal[valueToRead];
}
