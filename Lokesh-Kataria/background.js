let timeStamp = "";
let videoLink = "";

// receiving timestamp and video url from content_script and sending that data to popup.js to display on extension popup
chrome.runtime.onMessage.addListener((data, sender, sendResponse)=>{
  if(data.type === "bookmarkAdded"){
    timeStamp = data.time;
    videoLink = data.url;
  }else if(data.type === "time-data"){
    sendResponse({time: timeStamp, video: videoLink});
  }
});

