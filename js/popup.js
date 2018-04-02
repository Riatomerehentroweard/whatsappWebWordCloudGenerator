document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#wordCloudGenerator').addEventListener('click', clickHandler);
});

function clickHandler(element) {
    const generator = document.querySelector('#wordCloudGenerator');

    // chrome.tabs.getCurrent
    
    // var port = chrome.runtime.tabs.connect(chrome.tabs.getCurrent(), { name: "knockknock" });
    // port.postMessage({ joke: "Knock knock" });
    // port.onMessage.addListener(function (msg) {
    //     if (msg.question == "Who's there?")
    //         port.postMessage({ answer: "Madame" });
    //     else if (msg.question == "Madame who?")
    //         port.postMessage({ answer: "Madame... Bovary" });
    // });

    const tabQuery = {
        active: true,
        currentWindow: true,
    };

    const responseCallBack = (response) => {
        console.log(response);
    }

    const tabCallBack = (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            todo: 'fetchChatlog'
        }, responseCallBack);
    };

    chrome.tabs.query(tabQuery, tabCallBack);

    // generator.insertAdjacentElement("beforeBegin", createWarningMessage());
}

// function createWarningMessage() {
//     const warning = document.createElement('div');

//     warning.innerText = 'Please open a chat in whatsapp web or else we don\'t have a source';
//     warning.classList.add('alert');
//     warning.classList.add('alert-warning');

//     return warning;
// }
