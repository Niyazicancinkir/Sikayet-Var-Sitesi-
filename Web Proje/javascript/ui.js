class UI {
  static addSikayetToUI(newSikayet) {
    const filmList = document.getElementById("sikayetler");
    const tarih = new Date();
    filmList.innerHTML += `
    <tr>
    <td>${newSikayet.id}</td>
    <td><img src="${newSikayet.url}" class="img-fluid img-thumbnail"></td>
    <td>${tarih.toLocaleString()}</td>
    <td>${newSikayet.firma}</td>
    <td>${"NiyaziCanÇınkır"}</td>
    <td>${newSikayet.sikayet}</td>
    <td>${"Şikayet Devam Ediyor"}</td> 
    <td></td>
                 <td><a href="MüsteriSikayetEkle.html" id = "delete-film" class = "btn text-danger  fluit-right">Şikayet Sil</a></td>
                
             </tr>
       `;
  }
  static clearInputs(element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
  }
  static displayMessages(message, type) {
    const cardBody = document.querySelector(".card-body");
    // Alert divini oluşturma

    const div = document.createElement("div");

    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function () {
      div.remove();
    }, 1000);
  }
  static loadAllFilms(sikayetler) {
    let sikayetSahibi = "NiyaziCanÇınkır";
    let durumTrue = "Şikayet Devam Ediyor";
    let durumFalse = "Şikayet Cevaplandı";
    let answerTrue = "Cevabı Göster";
    let answerFalse = "Cevapla";
    const tarih = new Date();
    const filmList = document.getElementById("sikayetler");

    sikayetler.forEach(function (sikayet) {
      filmList.innerHTML += `<tr>
      <td>${sikayet.id}</td>
      <td><img src="${sikayet.url}" class=" img-thumbnail"></td> 
      <td>${tarih.toLocaleString()}</td>
      <td>${sikayet.firma}</td>
      <td>${sikayetSahibi}</td>
      <td>${sikayet.sikayet}</td>
      <td>${sikayet.status ? durumTrue : durumFalse}</td>
     
      <td>  <a style="display: ${!sikayet.status ? "block" : "none"};
      " data-sikayetid=${sikayet.id}
       id="sikayet-duzenle" class = "btn text-success float-right"> ${
         !sikayet.status ? answerTrue : answerFalse
       }
      </a> </td>
      <td><a  href="MüsteriSikayetEkle.html"  id = "delete-film" class = "btn text-danger   ">Şikayet Sil</a></td>
                
         </tr>`;
    });
  }
  static deleteSikayetFromUI(element) {
    element.parentElement.parentElement.remove();
  }
  static clearAllsikayetsFromUI() {
    const filmList = document.getElementById("sikayetler");

    // filmList.innerHTML = "";

    while (filmList.firstElementChild !== null) {
      // Child Olduğu Sürece
      filmList.firstElementChild.remove();
    }
  }
}
