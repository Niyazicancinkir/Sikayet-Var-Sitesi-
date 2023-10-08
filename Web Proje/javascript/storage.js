class Storage {
  static addSikayetToStorage(newFilm) {
    let sikayetler = this.getFilmsFromStorage();

    sikayetler.push(newFilm);
    localStorage.setItem("sikayetler", JSON.stringify(sikayetler));
  }

  static getFilmFormStorage(sikayetID) {
    const sikayetler = this.getFilmsFromStorage();
    const foundSikayet = sikayetler.filter(
      (sikayet) => sikayet.id === sikayetID
    );
    if (!!foundSikayet.length) {
      return foundSikayet[0];
    }
    return null;
  }

  static updateSikayet(message, sikayetID) {
    const sikayetler = this.getFilmsFromStorage();
    const newSikayetler = sikayetler.map((sikayet) => {
      if (sikayet.id === sikayetID) {
        return { ...sikayet, answer: message, status: false };
      }
      return { ...sikayet };
    });
    localStorage.setItem("sikayetler", JSON.stringify(newSikayetler));
    window.location.href = `FirmaSikayetList-ara-gor.html`;
  }
  static getFilmsFromStorage() {
    let sikayetler;

    if (localStorage.getItem("sikayetler") === null) {
      sikayetler = [];
    } else {
      sikayetler = JSON.parse(localStorage.getItem("sikayetler"));
    }

    return sikayetler;
  }

  static deleteSikayetFromStorage(sikayetID) {
    let sikayetler = this.getFilmsFromStorage();
    const newSikayetler = sikayetler.filter(
      (sikayet) => sikayet.id != sikayetID
      // filter array içerisinde istenilen duruma göre filtreler; biz burada buraya gelen sikayetID
      // ile sikayet içerisindeki id si eşit olmayanları yeni bir array yaptık ve onları storage'a koyduk
      // dolayısıyla yeni arraylerimizden istemediklerimiz çıktı
    );
    localStorage.setItem("sikayetler", JSON.stringify(newSikayetler));
  }

  static clearAllsikayetsFromStorage() {
    localStorage.removeItem("sikayetler");
  }
}
