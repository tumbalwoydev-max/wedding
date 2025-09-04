import {home} from "./js/home.js";
import {bride} from "./js/bride.js";
import {time} from "./js/time.js";
import {galeri} from "./js/galeri.js";
import {wishas} from "./js/wishas.js";
import {navbar} from "./js/navbar.js";
import {welcome} from "./js/welcome.js";

// load content
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    welcome();
    navbar();
    home();
    bride()
    time();
    galeri();
    wishas();
});

// Ambil parameter "to" dari URL
const urlParams = new URLSearchParams(window.location.search);
const guest = urlParams.get("to");

// Target elemen <p id="guest-name">
const guestNameElement = document.getElementById("guest-name");

// Kalau ada parameter "to", tulis "Kepada [Nama]"
if (guest && guestNameElement) {
  guestNameElement.textContent = `Kepada ${guest}`;
} else if (guestNameElement) {
  guestNameElement.textContent = "Kepada Bapak/Ibu/Saudara/i";
}
