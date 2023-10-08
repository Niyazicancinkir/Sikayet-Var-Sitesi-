const form = document.getElementById("sikayet-form");
const frmadiElement = document.querySelector("#firmaAdi");
const sikayetElement = document.querySelector("#sikayet");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-sikayet");
const answer = document.getElementById("sikayet-duzenle");

// Tüm eventleri yükleme

eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", function () {
    let sikayetler = Storage.getFilmsFromStorage();
    UIfrm.loadAllFilms(sikayetler);
    const row = this.getElementById("sikayetler");
    row.addEventListener("click", navigateToAnswer);
  });
}

function navigateToAnswer(e) {
  if (e.target.id === "sikayet-duzenle") {
    window.location.href = `FirmaSikayetCevap-Kapatma.html?id=${e.target.dataset.sikayetid}`;
  }
}
