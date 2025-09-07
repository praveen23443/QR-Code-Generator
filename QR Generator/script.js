let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generator() {
  if (qrText.value.trim() === "") {
    imgBox.classList.remove("show-img");
    qrImage.src = "";
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 400);
    return;
  }
  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    encodeURIComponent(qrText.value);
  imgBox.classList.add("show-img");
}
