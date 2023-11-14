import { tab } from "../getTabs.js";

let heading = document.querySelector(".title");
let tabUrl = "";
tab()
  .then((res) => {
    tabUrl = res.url;
    if(tabUrl.includes("www.youtube.com/")){
      heading.innerText = "YouTube TimeStamps"
    }else{
      console.log(tabUrl);
      heading.innerText = "This is not a Youtube Page";
    }
  })
  .catch((err) => {
    console.log(err);
  });

let splitTime = (time)=>{
  let timeArray = time.split(":");
  let timeInSeconds = timeArray.length > 2
      ? parseInt(timeArray[0]) * 60 * 60 +
        parseInt(timeArray[1]) * 60 +
        parseInt(timeArray[2])
      : parseInt(timeArray[0]) * 60 + parseInt(timeArray[1]);
      return timeInSeconds;
}



document.addEventListener("DOMContentLoaded", () => {
  let bookmarks = document.querySelector(".bookmarks");

  // Function to add a timestamp to the extension popup
  let addBookmarkElement = (time, url) => {
    let timeInSeconds = splitTime(time);

    let bookmarkElement = document.createElement("div");
    bookmarkElement.className = "bookmark-item";
    bookmarkElement.innerHTML = `<span contentEditable>Bookmark at </span><span class="time">${time}</span>
      <div>
          <button><a href="${url}&t=${timeInSeconds}">
              Play
          </a></button>
          <button>Delete</button>
      </div>`;

    bookmarks.appendChild(bookmarkElement);
  };

  // Retrieve data from storage
  chrome.storage.local.get({ bookmarks: {} }, function (result) {
    console.log("Stored data in storage:", result);

    // Extract the array of timestamps for the current videoId
    const videoId = tabUrl.split("?")[1].substring(2);
    const timeStampArray = result.bookmarks[videoId] || [];

    console.log("Retrieved timestamps for videoId:", videoId, timeStampArray);

    timeStampArray.sort((a, b)=>{
      return splitTime(a)-splitTime(b);
    });

    // Clear existing bookmarks
    bookmarks.innerHTML = "";
    
    // Display the data in the extension popup
    timeStampArray.forEach((timestamp) => {
      addBookmarkElement(timestamp, tabUrl);
    });
  });
});
