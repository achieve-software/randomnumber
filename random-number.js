// 0- 100 arasında n adet rastgele sayı üreten kodu for döngüsü ile yazınız...(n sayısını kullanıcıdan alınız..)

let number = +prompt("kaç adet rastgele sayi üretilsin");
for (let i = 1; i <= number; i++) {
  let randomsayi = Math.floor(Math.random() * 100);
  console.log("üretilen " + i + ". sayi " + randomsayi);
}
