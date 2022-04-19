// 1. Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya
// (kecuali : split, reverse, join, foreach, map)

// // 1. length : Adalah suatu built in function untuk menghitung isi dari sebuah variabel.
// const nama = 'Irfan Julian Ibrahim'
// console.log(nama.length);

// // 2. sort : digunakan untuk mengurutkan elemen dari array.
// const nomorFavorite = [23, 7, 31, 2, 12, 8, 10];
// const result = nomorFavorite.sort((a,b) => a-b);
// console.log(result)

// // 3. toUpperCase : digunakan untuk merubah string huruf menjadi kapital.
// const namaKapital = 'irfan'
// const resultKapital = namaKapital.toUpperCase()
// console.log(resultKapital);

// // 4. toLowerCase : digunakan untuk merubah string menjadi huruf kecil.
// const namaLower = 'iRfaN'
// const resultLower = namaLower.toLocaleLowerCase()
// console.log(resultLower);

// // 5. replace : digunakan untuk merubah huruf string menjadi huruf lain.
// const namaReplace = 'Irfan'
// const resultReplace = namaReplace.replace('a', 'e')
// console.log(resultReplace);

// // 6. concat : digunakan untuk penyambungan sebuah array.
// let namaDepan = ['Irfan']
// let namaLengkap = namaDepan.concat('Julian Ibrahim')
// console.log(namaLengkap);

// // 7. slice dan splice :  slice digunakan untuk memotong array menjadi array baru.
// //    splice bisa digunakan untuk menambah atau memotong array.
// let contohSlice = [1,2,3,4,5,6,7,8,9]
// let hasilSlice = contohSlice.slice(2,5)
// console.log(hasilSlice);

// let contohSplice = [9,8,7,6,5,4,3,2,1]
// // let tambahArray = contohSplice.splice(0,0,'a','b','c')
// let kurangArray = contohSplice.splice(0,2)
// console.log(kurangArray);

// // 8. shift dan unshift : shift digunakan untuk menghapus element array pada awal array.
// //    unshift digunakan untuk menambahkan element array pada awal array.
// let contohUnShift = [4,5,6,7,8,9]
//     contohUnShift.unshift(2,3)
//     contohUnShift.shift()
// console.log(contohUnShift);

// // 9. push dan pop : push digunakan untuk menambahkan element array pada akhir array.
// //    pop digunakan untuk menghapus element terakhir dari sebuah array.
// let contohPush = [1,2,3]
//     contohPush.push(4,5)
//     // contohPush.pop()
// console.log(contohPush);

// // 10. toString dan toLocaleString : digunakan untuk mengkonversi array menjadi string.
// let contohToString = ['a','b','c','d','e']
// console.log(contohToString.toString());
// console.log(contohToString.toLocaleString());

// 2. Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan callback function dengan data sebagai berikut:
const name = [
    "Abigail", "Alexandra", "Alison", "Amanda",
    "Angela", "Bella", "Carol", "Caroline",
    "Carolyn", "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope",
  ];
  
  let cariNama = (inisial, jumlahOutput, callback) => {
    let cari = name.filter((nama => nama.toLowerCase().includes(inisial.toLowerCase())));
    let hasil = cari.slice(0, jumlahOutput)
    callback(hasil);
  } 
    let hasilOuput = (hasil) => {
      console.log(hasil);
    }
  cariNama('eL', 4, hasil)
  
  
  // 3. Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array). 
  // Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5.
  // Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan
  // hasil pencarian dan menampilkannya ke layar/console.
  
  // const seleksiAngka = (nilaiAwal, nilaiAkhir, dataArray) => {
  
  //     let cariAngka = dataArray.filter(angka => angka > nilaiAwal && angka < nilaiAkhir)
  //     cariAngka.sort((a,b) => a-b)
  //     if (nilaiAwal > nilaiAkhir){
  //       console.log('Nilai awal harus lebih kecil dari nilai akhir')
  //     } else if (cariAngka.length === 0){
  //         console.log('Nilai tidak di temukan')
  //     } else if (dataArray.length < 5){
  //         console.log('Array tidak boleh kurang dari 5 element')
  //     } else {
  //       console.log(cariAngka)
  //     } 
  //   } 
  
  // seleksiAngka(s,d,[1,3,4,6,7])
  // seleksiAngka(2,9,[1,3,5,8,10])
  // seleksiAngka(9,2,[1,3,5,8,10])
  // seleksiAngka(2,9,[1,3,10,11])
  // seleksiAngka(0,0,[1,3,5,8,10])