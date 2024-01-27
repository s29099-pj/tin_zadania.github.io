//11
let auto = {
    rok: 2018,
    przebieg: 85000,
    cena_wyjsciowa: 30000,
    cena_koncowa: 0,
  
    powiekszCeneWyjsciowa: function() {
      this.cena_wyjsciowa += 1000;
    },
  
    obnizCeneZaWiek: function() {
      const obecnyRok = new Date().getFullYear();
      const wiekAuta = obecnyRok - this.rok;
      const obnizka = wiekAuta * 1000;
  
      this.cena_koncowa -= obnizka;
    },
  
    obnizCeneZaPrzebieg: function() {
      const obnizka = Math.floor(this.przebieg / 100000) * 10000;
  
      this.cena_koncowa -= obnizka;
    },
  
    dodajPrzebiegIRok: function(przebieg, rok) {
      this.przebieg += przebieg;
      this.rok = rok;
  
      this.obnizCeneZaWiek();
      this.obnizCeneZaPrzebieg();
    },
  
  };


  let samochody = [];

  function dodajAuto(doDodania) {
    if (doDodania.cena_koncowa > 10000) {
      samochody.push(doDodania);
      console.log("Dodano!");
    } else {
      console.log("cena mniejsza niż 10000");
    }
  }

  function zwiekszRokWszystkich() {
    samochody.forEach(auto => {
      auto.rok++;
    });
    console.log("Zwiększono rok wszystkich aut");
  }




  //12

class Ocena {
  constructor(przedmiot, wartosc) {
    this.przedmiot = przedmiot;
    this.wartosc = wartosc;
  }
}

class Student {
  constructor(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.oceny = [];
    this.sredniaOcen = 0;
  }

  obliczSrednia() {
    if (this.oceny.length === 0) {
      this.sredniaOcen = 0;
      return;
    }

    let suma = 0;
    for (let ocena of this.oceny) {
      suma += ocena.wartosc;
    }

    this.sredniaOcen = suma / this.oceny.length;
  }

  set dodajOcene(ocena) {
    if (ocena instanceof Ocena) {
      this.oceny.push(ocena);
      this.obliczSrednia();
    } else {
      console.error("Podana wartość nie jest obiektem klasy Ocena.");
    }
  }

  get ocenyStudenta() {
    return this.oceny.map(
      (ocena) => `Przedmiot: ${ocena.przedmiot} - ocena ${ocena.wartosc}`
    );
  }

  hello() {
    return `Witaj ${this.imie} ${this.nazwisko}, Twoja średnia ocen to: ${this.sredniaOcen.toFixed(
      2
    )}`;
  }
}
  