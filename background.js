chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: 'script.js'
  });
  chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
    chrome.tabs.executeScript(null, { file: "script.js" });
  });
});