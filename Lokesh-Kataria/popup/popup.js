let bookmarks = document.querySelector(".bookmarks");


// adding timestamp to the extension popup

let addBookmarkElement = (time, url)=>{
  let timeArray = time.split(":");
  let timeInSeconds;
  if(timeArray.length > 2){
    timeInSeconds = parseInt(timeArray[0])*60*60 + parseInt(timeArray[1] * 60) + parseInt(timeArray[2]);
  }else{
    timeInSeconds = parseInt(timeArray[0])*60 + parseInt(timeArray[1]);
  }
  let bookmarkElement = document.createElement("div");
  bookmarkElement.className = 'bookmark-item';
  bookmarkElement.innerHTML = `<span>Bookmark at <span class="time">${time}</span></span>
  <div>
      <button><a href="${url}&t=${timeInSeconds}s">
          Play
      </a></button>
      <button>Delete</button>
  </div>`

  bookmarks.appendChild(bookmarkElement);
}

// receiving timestamp and video-url from background.js
chrome.runtime.onMessage.addListener((data)=>{
  if(data.type === "bookmarkAdded"){
    chrome.runtime.sendMessage({type: "time-data"}, (response) =>{
      console.log(response.time, response.video);
      addBookmarkElement(response.time, response.video);
    });
  }
})