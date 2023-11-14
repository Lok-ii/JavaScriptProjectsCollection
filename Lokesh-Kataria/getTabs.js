export let tab = function getCurrentTab() {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs && tabs[0];
      if (currentTab) {
        resolve(currentTab);
      } else {
        reject(new Error("Unable to get current tab information"));
      }
    });
  });
};
