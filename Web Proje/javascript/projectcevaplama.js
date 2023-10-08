eventListeners();
let sikayetID;
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
let sendButton = document.getElementById("send-button");

function eventListeners() {
  document.addEventListener("DOMContentLoaded", function () {
    sikayetID = getParameterByName("id");

    const sikayet = Storage.getFilmFormStorage(sikayetID);
    UICevaplama.addSikayetToUI(sikayet);
    sendButton.addEventListener("click", sendButtonFunction);
  });
}

function sendButtonFunction(e) {
  const answer = document.getElementById("answer");
  const message = answer.value;
  Storage.updateSikayet(message, sikayetID);
}
