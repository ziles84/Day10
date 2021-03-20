function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      relase_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP"
      },
      gold: true
    },

    002: {
      artist: "Metallica",
      title: "Nothing else matters",
      relase_year: 1999,
      formats: {
        1: "CD",
        2: "Disk",
        3: "Ploca"
      },
      gold: true
    }
  }

  return myMusic;
};


myFunction()[2];

module.exports = myFunction;
