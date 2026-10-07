// ===== Bagian A: getElementsByClassName =====
const buah = document.getElementsByClassName("buah");
console.log(buah);          // lihat koleksinya
console.log(buah.length);   // jumlah elemen
console.log(buah[0]);       // elemen pertama
 
// mengubah elemen tertentu
buah[1].style.color = "red";
 
// mengubah semua elemen dengan perulangan
for (let i = 0; i < buah.length; i++) {
  buah[i].style.fontWeight = "bold";
  buah[i].textContent = (i + 1) + ". " + buah[i].textContent;
}
 
// ===== Bagian B: getElementsByTagName =====
const semuaLi = document.getElementsByTagName("li");
 
console.log(semuaLi.length);
 
// 1. Mengubah warna elemen li terakhir menjadi biru
semuaLi[semuaLi.length - 1].style.color = "blue";

// 2. Mengubah warna semua elemen h2 menjadi teal
const semuaH2 = document.getElementsByTagName("h2");

for (let i = 0; i < semuaH2.length; i++) {
  semuaH2[i].style.color = "teal";
}
