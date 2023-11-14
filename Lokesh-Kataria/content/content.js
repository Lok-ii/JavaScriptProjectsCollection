let elementParent = document.querySelector(".ytp-time-display");
elementParent.style.display = "flex";
elementParent.style.alignItems = "center";
let timeStamp = document.querySelector(".ytp-time-current");
let referenceElement = document.querySelector(
  ".ytp-clip-watch-full-video-button-separator"
);

let bookmarkIcon = document.createElement("img");
bookmarkIcon.src =
  "https://cdn.pixabay.com/photo/2012/04/02/16/07/plus-24844_1280.png";
bookmarkIcon.id = "bookmarkIcon";
bookmarkIcon.style.cssText =
  "width: 1.5rem; height: 1.5rem; cursor: pointer; padding: 0 2rem";
elementParent.insertBefore(bookmarkIcon, referenceElement);

bookmarkIcon.addEventListener("click", () => {
  let videoId = window.location.href.split("?")[1].substring(2);

  // Retrieve existing timestamps from storage
  chrome.storage.local.get({ bookmarks: {} }, function (result) {
    let timeStampArray = result.bookmarks[videoId] || [];

    // Add the current timestamp to the array
    if(timeStampArray.indexOf(timeStamp.innerText) === -1){
      timeStampArray.push(timeStamp.innerText);
    }

    // Save the updated array back to storage
    chrome.storage.local.set(
      { bookmarks: { ...result.bookmarks, [videoId]: timeStampArray } },
      () => {
        console.log("Data added to storage:", {
          bookmarks: { ...result.bookmarks, [videoId]: timeStampArray },
        });
      }
    );

    console.log("Timestamp added:", timeStamp.innerText);
    console.log("Video URL:", window.location.href);
    console.log("Video ID:", videoId);

    // Send a message to the background script
    // chrome.runtime.sendMessage({
    //   type: "bookmarkAdded",
    //   time: timeStamp.innerText,
    //   url: window.location.href,
    //   video: videoId,
    // });
  });
});

chrome.runtime.onMessage.addListener((data, sender, response)=>{
  if(data.type === 'PLAY'){
    // Extract the timestamp URL from the message
    const timestampUrl = data.url;

    chrome.tabs.executeScript({
      code: `
        const player = document.querySelector('.html5-main-video');
        if (player) {
          player.currentTime = ${data.timeStampValue};
        }
      `
    });
    
  }

});