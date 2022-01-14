const contacts = require('./contact');

const main = async () => {
  const nama = await contact.tulisPertanyaan("Input Nama : ");
  const noHp = await contact.tulisPertanyaan("Input No Hp : ");
  const email = await contact.tulisPertanyaan("Input EMail : ");
  contacts.simpanContact(nama, noHp, email);
}

main();