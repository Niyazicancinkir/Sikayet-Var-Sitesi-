class UIfrm {
  static addSikayetToUIfrm(newSikayet) {
    /*
         <!-- <tr>
         <td><img src="" class="img-fluid img-thumbnail"></td>
         <td></td>
         <td></td>
         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
       </tr> -->*/

    const sikayetList = document.getElementById("sikayetler");

    sikayetList.innerHTML += `
       
             <tr>
                 <td><img src="${newSikayet.url}" class="img-fluid img-thumbnail"></td>
                 <td>${newSikayet.director}</td>
                 <td>${newSikayet.title}</td>
                 
                 <td><a href="#" id = "delete-film" class = "btn btn-info">Şikayet Düzenle</a></td>
             </tr>
       `;
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
    const tarih = new Date();
    let sikayetSahibi = "NiyaziCanÇınkır";
    let durumTrue = "Şikayet Devam Ediyor";
    let durumFalse = "Şikayet Cevaplandı";
    let answerTrue = "Cevabı Göster";
    let answerFalse = "Cevapla";
    const sikayetList = document.getElementById("sikayetler");

    sikayetler.forEach(function (sikayet) {
      sikayetList.innerHTML += `<tr>
          <td>${sikayet.id}</td>
          <td><img src="${sikayet.url}" class=" img-thumbnail"></td> 
          <td>${tarih.toLocaleString()}</td>
          <td>${sikayet.firma}</td>    
          <td>${sikayetSahibi}</td>
          <td>${sikayet.sikayet}</td>
          <td>${sikayet.status ? durumTrue : durumFalse}</td>
          <td>  <a data-sikayetid=${
            sikayet.id
          } id="sikayet-duzenle" class = "btn text-success float-right"> ${
        !sikayet.status ? answerTrue : answerFalse
      }</a> </td>
         </tr>`;
    });
  }
  static deleteSikayetFromUI(element) {
    element.parentElement.parentElement.remove();
  }
  static clearAllsikayetsFromUI() {
    const sikayetList = document.getElementById("sikayetler");
    while (sikayetList.firstElementChild !== null) {
      // Child Olduğu Sürece
      sikayetList.firstElementChild.remove();
    }
  }
}
