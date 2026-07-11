const https = require('https');
const fs = require('fs');
const path = require('path');

const files = [
  { url: 'https://www.avilpro.in/wp-content/uploads/2024/12/shake.jpg', name: 'premium_shake.jpg' },
  { url: 'https://www.avilpro.in/wp-content/uploads/2024/12/falooda.jpg', name: 'falooda.jpg' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const file of files) {
    const dest = path.join(__dirname, '..', 'static', file.name);
    console.log(`Downloading ${file.url} to ${dest}...`);
    await download(file.url, dest);
    console.log('Downloaded.');
  }
}

run();
