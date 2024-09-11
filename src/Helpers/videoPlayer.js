export const videoPlayer = (target) => {
  const video = target?.current;
  let videoSrc = video.src;
  let symbol = videoSrc.indexOf("?") !== -1 ? "&" : "?";
  let foundAutoOne = videoSrc.match(/autoplay=1/g);
  let foundAutoZero = videoSrc.match(/autoplay=0/g);
  video.src = foundAutoOne
    ? videoSrc.replace("autoplay=1", "autoplay=0")
    : foundAutoZero
    ? videoSrc.replace("autoplay=0", "autoplay=1")
    : videoSrc + symbol + "autoplay=1";
};
