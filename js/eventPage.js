chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.todo === "showPageAction") {
        highlightExtension();
    }
})

function highlightExtension() {
    const tabQuery = {
        active: true,
        currentWindow: true,
    };
    const tabCallBack = (tabs) => {
        chrome.pageAction.show(tabs[0].id);
    };
    chrome.tabs.query(tabQuery, tabCallBack);
}
