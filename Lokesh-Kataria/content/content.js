// Listen for messages from the content script and send them to background page

// chrome.runtime.onMessage(data =>{
//   if(data.message === "video_playing"){
//     console.log(window.location);
//   }
// })

// contentScript.js
// window.onload = function() {
//   let videoPlayer = document.querySelector('.html5-video-player');
//   if (videoPlayer) {
//     let timestampButton = document.createElement('img');
//     timestampButton.src = chrome.runtime.getURL('plus_sign.png');
//     timestampButton.id = 'timestampButton';
//     timestampButton.style.cssText = 'position: absolute; right: 10px; top: 10px; cursor: pointer;';
//     videoPlayer.appendChild(timestampButton);

//     timestampButton.addEventListener('click', function() {
//       let videoUrl = window.location.href;
//       let videoTime = document.querySelector('.ytp-time-current').innerText;
//       console.log('Video URL:', videoUrl);
//       console.log('Current Time:', videoTime);
//     });
//   }
// }

let elementParent = document.querySelector(".ytp-time-display");
elementParent.style.display = 'flex';
elementParent.style.alignItems = "center";
let timeStamp = document.querySelector(".ytp-time-current");
let referenceElement = document.querySelector(".ytp-clip-watch-full-video-button-separator");

let bookmarkIcon = document.createElement("img");
bookmarkIcon.src = "https://cdn.pixabay.com/photo/2012/04/02/16/07/plus-24844_1280.png";
bookmarkIcon.id = "bookmarkIcon";
bookmarkIcon.style.cssText = 'width: 1.5rem; height: 1.5rem; cursor: pointer; padding: 0 2rem'
elementParent.insertBefore(bookmarkIcon, referenceElement);

bookmarkIcon.addEventListener("click", ()=>{
  console.log(timeStamp.innerText);
  console.log(window.location.href);
  chrome.runtime.sendMessage({type: 'bookmarkAdded', time: timeStamp.innerText, url: window.location.href});
});