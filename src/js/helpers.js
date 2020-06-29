 (() => {
  const TRACK_ARTIST_DELIMITER = ' - ';
  function cleanText(s) {
    return s.replace(/("|')/g, '').trim();
  }
  function getFormattedSCTrackAndArtist(t) {
    const splitByDelimiter = t.title.split(TRACK_ARTIST_DELIMITER);
    let trackName = cleanText(splitByDelimiter.slice(1).join(TRACK_ARTIST_DELIMITER));
    let artistName = cleanText(splitByDelimiter[0]);
    if (!trackName) {
      trackName = artistName;
      artistName = t.user.username;
    }
    return [trackName, artistName];
  }
  function loadCSS(e,t,n,o){"use strict";function r(){for(var t,o=0;o<l.length;o++)l[o].href&&l[o].href.indexOf(e)>-1&&(t=!0);t?i.media=n||"all":setTimeout(r)}var i=window.document.createElement("link"),d=t||window.document.getElementsByTagName("script")[0],l=window.document.styleSheets;return i.rel="stylesheet",i.href=e,i.media="only x",i.onload=o||function(){},d.parentNode.insertBefore(i,d),r(),i}
  window.splitcloud = window.splitcloud || {} 
  window.splitcloud.helpers = {
    getFormattedSCTrackAndArtist,
    loadCSS
  }
 })();