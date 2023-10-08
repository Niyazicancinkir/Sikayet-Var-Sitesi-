const form = document.getElementById("sikayet-form");
const frmadiElement = document.querySelector("#firmaAdi");
const sikayetElement = document.querySelector("#sikayet");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-sikayet");

// Tüm eventleri yükleme

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addsikayet);
  document.addEventListener("DOMContentLoaded", function () {
    let sikayetler = Storage.getFilmsFromStorage();
    UI.loadAllFilms(sikayetler);
    const row = this.getElementById("sikayetler");
    row.addEventListener("click", navigateToAnswer);
  });
  cardbody.addEventListener("click", deletesikayet);
  clear.addEventListener("click", deleteallsikayet);
}
function addsikayet(e) {
  const firma = frmadiElement.value;
  const sikayet = sikayetElement.value;
  const url = urlElement.value;
  const id = Math.floor(1000 + Math.random() * 9000).toString(); // 4 basamaklı random sayı
  const status = true;
  const answer = "";

  if (firma === "" || sikayet === "" || url === "") {
    // Hata
    UI.displayMessages("Tüm alanları doldurun...", "danger");
  } else {
    // Yeni Film
    const newSikayet = new Sikayet(firma, sikayet, url, id, status, answer);
    UI.addSikayetToUI(newSikayet); // Arayüze Sikayet ekleme
    Storage.addSikayetToStorage(newSikayet); // Storage'a Sikayet Ekleme
    UI.displayMessages("Şikayet başarıyla eklendi...", "success");
  }
  UI.clearInputs(frmadiElement, urlElement, sikayetElement);
  e.preventDefault();
}

function deletesikayet(e) {
  if (e.target.id === "delete-film") {
    UI.deleteSikayetFromUI(e.target);
    const sikayetID =
      e.target.parentElement.parentElement.childNodes[1].innerHTML; // listelenen şikayetin tabloda gözüken id'si
    Storage.deleteSikayetFromStorage(sikayetID);

    UI.displayMessages("Silme işlemi başarılı...", "success");
  }
}
function deleteallsikayet() {
  if (confirm("Emin misiniz ?")) {
    UI.clearAllsikayetsFromUI();
    Storage.clearAllsikayetsFromStorage();
  }
}

function navigateToAnswer(e) {
  if (e.target.id === "sikayet-duzenle") {
    window.location.href = `FirmaSikayetCevap-Kapatma.html?id=${e.target.dataset.sikayetid}`;
  }
}
