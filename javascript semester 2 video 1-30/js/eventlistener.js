function coba() {
    a = document.querySelector(".isi");
    a,innerhtml = "belajar eventlistener";
    console.log("coba eventlistener")
}

//judul.addEventListener("click",coba)

judul.onmouseover = function () {
    console.log("coba function anonymous");
}