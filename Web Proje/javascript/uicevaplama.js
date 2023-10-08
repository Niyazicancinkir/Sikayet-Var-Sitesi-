class UICevaplama {
  static addSikayetToUI(sikayet) {
    const form = document.getElementById("sikayet");
    const answer = document.getElementById("answer");
    if (!sikayet.status) {
      answer.innerHTML = sikayet.answer;
      answer.readOnly = true;
      document.getElementById("send-button").style.display = "none";
    }
    form.innerHTML = sikayet.sikayet;
  }
}
