// inject code on change
var prevURL = ""
var updated = false

chrome.tabs.onUpdated.addListener((id, change, tab) => {
    
    if(tab.url.match("youtube.com/shorts/") && prevURL != tab.url){
        prevURL = tab.url
        var spl = tab.url.split("/")
        updated = true
        chrome.tabs.update({url: "https://www.youtube.com/watch?v="+spl[4]});
    }

});



