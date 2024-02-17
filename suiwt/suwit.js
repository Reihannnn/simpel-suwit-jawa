const button = document.getElementById("button");

button.addEventListener("click", function () {
  const textInput = document.getElementById("text").value;
  let comp = Math.random();
  let hasil = "";
  if (comp <= 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp <= 0.67) {
    comp = "semut";
  } else {
    comp = "orang";
  }

  if (textInput == comp) {
    hasil = "seri dong yang bener aje😒";
  } else if (textInput == "orang") {
    hasil = comp == "gajah" ? "kalah🥲" : "menang👍";
  } else if (textInput == "semut") {
    hasil = comp == "orang" ? "kalah🥲" : "menang👍";
  } else if (textInput == "gajah") {
    hasil = comp == "orang" ? "menang👍" : "kalah🥲";
  } else {
    hasil = "pilihan tidak valid";
  }

  document.getElementById(
    "demo"
  ).innerText = `anda memilih ${textInput} dan musuh memilih ${comp} maka hasilnya = ${hasil}`;
  hasil.toUpperCase;
});
