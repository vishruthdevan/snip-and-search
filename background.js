chrome.action.onClicked.addListener(function (tab) {
    console.log("works")
    chrome.tabCapture.getMediaStreamId((streamId) => {
        if (streamId && streamId.length) {
            setTimeout(() => {
                // chrome.tabs.sendMessage(tab.id, {name: "stream", streamId}, (response) => console.log(response))
            }, 200)
        }
    })
})
