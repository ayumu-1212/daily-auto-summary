chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let title = document.getElementsByTagName('h1')[0].textContent
  sendResponse(title);
});