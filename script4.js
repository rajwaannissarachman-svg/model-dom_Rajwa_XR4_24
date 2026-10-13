// ===== querySelector: memilih SATU elemen =====
const judul = document.querySelector("#judul");
judul.style.color = "darkblue";
 
const kartuPertama = document.querySelector(".kartu");
console.log(kartuPertama);
 
const hargaPertama = document.querySelector(".kartu .harga");
hargaPertama.style.fontWeight = "bold";
 
const menuPertama = document.querySelector(".menu li:first-child");
menuPertama.style.color = "red";

// Mengubah warna menu ke-2 (Produk) menjadi oranye
const menuKedua = document.querySelector(".menu li:nth-child(2)");
menuKedua.style.color = "orange";

// Mengubah semua teks h3 menjadi huruf kapital
const semuaJudul = document.querySelectorAll(".kartu h3");

semuaJudul.forEach((judul) => {
  judul.textContent = judul.textContent.toUpperCase();
});
// ===== querySelectorAll: memilih BANYAK elemen =====
const semuaKartu = document.querySelectorAll(".kartu");
console.log(semuaKartu.length);
 
semuaKartu.forEach(function (kartu) {
  kartu.style.border = "2px solid teal";
  kartu.style.padding = "10px";
  kartu.style.margin = "10px 0";
});
 
const semuaHarga = document.querySelectorAll(".harga");
semuaHarga.forEach((harga) => {
  harga.style.color = "green";
});
 
const semuaMenu = document.querySelectorAll(".menu li");
console.log(semuaMenu.length);
