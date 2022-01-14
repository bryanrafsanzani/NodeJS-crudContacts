const {question, simpan, hapus, lihat, ubah, rl} = require('./contact');


const main = async () => {
    const value = await question("1).Tambah Data \n2).Hapus Data \n3).Ubah Data \n4). Lihat Semua Data \n Masukan Pilihan (1-4):");
    switch(value){
      case '1' :
        var name = await question("Input Name : ");
        var email = await question("Input Email : ");
        var noHp = await question("Input Phone Number : ");
        simpan(name, email, noHp);
      break;
      case '2' :
        lihat();
        var data = await question("Choose Number people want to deleted : ");
        hapus(data-1);
      break;
      case '3' :
        lihat();
        var keyMain = await question("Choose Number people want to updated : ");
        var name = await question("Input Name : ");
        var email = await question("Input Email : ");
        var noHp = await question("Input Phone Number : ");
        ubah((keyMain-1), name, email, noHp);
      break;
      case '4' :
        lihat();
        rl.close();
      break;
      default:
        console.log("\nInput is invalid");
        break;
    }
    console.log("=========================")
    main();
}
main();
