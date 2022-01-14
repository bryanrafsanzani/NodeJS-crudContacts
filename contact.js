const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  })
}

const dirPath = './data';
if(!fs.existsSync(dirPath)){
  fs.mkdirSync(dirPath);
  console.log('folder not found, create another one')
}

const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
  fs.writeFileSync(dataPath, '[]', 'utf-8');
  console.log('contacts.json not found, create another one')
}

const simpan = (nama, email, noHp) => {
  const contact = {nama, email, noHp};
  const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts =JSON.parse(fileBuffer);
  contacts.push(contact);
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
  console.log('Data was added!');
  rl.close();
}

const hapus = (key) => {
  const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts =JSON.parse(fileBuffer);
  var tempContacts = [];
  try {
    for(var i=0; i<contacts.length; i++){
      i != key ? tempContacts.push(contacts[i]) : undefined;
    }
    console.log(contacts);
    fs.writeFileSync('data/contacts.json', JSON.stringify(tempContacts));
    console.log(`contact with name ${contacts[key]['nama']} was deleted`);
    lihat();
  } catch (e) {
    console.log('Contact not found');
  }
  rl.close();
}

const ubah = (key, nama, email, noHp) => {
  const contact = {nama, email, noHp};
  const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts =JSON.parse(fileBuffer);
  var tempContacts = [];
  try {
    if(key.parseInt() < 0 || key.parseInt() > (contacts.length-1)){
      console.log('Contact not found, failed to updated');
    }else{
      for(var i=0; i<contacts.length; i++){
        i == key ?  tempContacts.push(contact): tempContacts.push(contacts[i]);
      }
      fs.writeFileSync('data/contacts.json', JSON.stringify(tempContacts));
      console.log('Data was Updated! \n ---------');
    }
  } catch (e) {
    console.log('Contact not found');
  }
  rl.close();
}

const lihat = () => {
  const fileBuffer = fs.readFileSync('data/contacts.json');
  const contacts = JSON.parse(fileBuffer);
  var lists = `Total ${contacts.length} Contact \n`;
  for(var i=0; i<contacts.length; i++){
    lists += (i+1) + ") " + contacts[i].nama + "\n";
  }
  console.log(lists);
}


module.exports = {question, simpan, hapus, lihat, ubah, rl};