function freeFireship() {
  const videoPlayer = document.querySelector("video-player");

  if (!videoPlayer) {
    console.error("<video-player> element not found.");
    return;
  }

  if (videoPlayer.querySelector("iframe")) {
    // console.log("already free");
    return;
  }

  const globalData = document.querySelector("global-data");

  let videoSrc;

  if (globalData["vimeo"]) {
    videoSrc = "https://player.vimeo.com/video/" + globalData["vimeo"];
  } else if (globalData["youtube"]) {
    videoSrc = "https://youtube.com/embed/" + globalData["youtube"];
  } else {
    console.error("no video data found");
    return;
  }

  videoPlayer.setAttribute("free", "true");

  const iframeHTML = `<iframe src="${videoSrc}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen width="426" height="240" frameborder="0"></iframe>`;

  videoPlayer.innerHTML = iframeHTML;

  const placeholder = document.createElement("div");
  videoPlayer.parentNode.insertBefore(placeholder, videoPlayer);

  const parent = videoPlayer.parentNode;
  parent.removeChild(videoPlayer);
  parent.insertBefore(videoPlayer, placeholder);

  placeholder.remove();

  console.log(iframeHTML);
}

setInterval(() => {
  freeFireship();
}, 500);
