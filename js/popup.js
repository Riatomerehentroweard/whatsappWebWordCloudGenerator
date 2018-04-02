document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#wordCloudGenerator').addEventListener('click', clickHandler);
});

function clickHandler(element) {
    const generator = document.querySelector('#wordCloudGenerator');

    const tabQuery = {
        active: true,
        currentWindow: true,
    };

    const responseCallBack = (response) => {

        const words = getWordFrequency(response.chatMessages);

        d3.wordcloud()
            .size([800, 600])
            .fill(d3.scale.ordinal().range(["#884400", "#448800", "#888800", "#444400"]))
            .words(words)
            .start();
    }

    const tabCallBack = (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            todo: 'fetchChatlog'
        }, responseCallBack);
    };

    chrome.tabs.query(tabQuery, tabCallBack);

}