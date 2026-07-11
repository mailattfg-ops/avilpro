const https = require('https');

const urls = [];
for (let i = 1; i <= 20; i++) {
  urls.push(`https://www.avilpro.in/wp-content/uploads/2026/01/Menu${i}.jpeg`);
  urls.push(`https://www.avilpro.in/wp-content/uploads/2026/01/Menu-${i}.jpeg`);
  urls.push(`https://www.avilpro.in/wp-content/uploads/2026/01/Menu${i}.jpg`);
  urls.push(`https://www.avilpro.in/wp-content/uploads/2026/01/Menu-${i}.jpg`);
  urls.push(`https://www.avilpro.in/wp-content/uploads/2024/12/Menu${i}.jpeg`);
  urls.push(`https://www.avilpro.in/wp-content/uploads/2024/12/Menu-${i}.jpeg`);
  urls.push(`https://www.avilpro.in/wp-content/uploads/2024/12/Menu${i}.jpg`);
  urls.push(`https://www.avilpro.in/wp-content/uploads/2024/12/Menu-${i}.jpg`);
}

// Also check general AVILPRO images
for (let i = 1; i <= 20; i++) {
  urls.push(`https://www.avilpro.in/wp-content/uploads/2024/12/AVILPRO${i}.jpg`);
  urls.push(`https://www.avilpro.in/wp-content/uploads/2024/12/AVILPRO${i}.jpeg`);
  urls.push(`https://www.avilpro.in/wp-content/uploads/2026/01/AVILPRO${i}.jpg`);
  urls.push(`https://www.avilpro.in/wp-content/uploads/2026/01/AVILPRO${i}.jpeg`);
}

function checkUrl(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD', timeout: 5000 }, (res) => {
      resolve({ url, status: res.statusCode });
    });
    req.on('error', () => {
      resolve({ url, status: 500 });
    });
    req.on('timeout', () => {
      req.destroy();
      resolve({ url, status: 408 });
    });
    req.end();
  });
}

async function run() {
  console.log(`Checking ${urls.length} URLs concurrently...`);
  const promises = urls.map(url => checkUrl(url).then(res => {
    if (res.status === 200) {
      console.log(`Found: ${res.url}`);
    }
    return res;
  }));
  await Promise.all(promises);
  console.log('Done.');
}

run();
