// Quando instalar ou atualizar:
chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { urlContains: 'dashboard.arest.io' },
                }) ],
            actions: [ new chrome.declarativeContent.ShowPageAction() ]
        }]);
    });
});