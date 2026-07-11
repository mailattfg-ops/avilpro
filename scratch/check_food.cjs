const https = require('https');

const paths = [
  '2024/12',
  '2026/01',
  '2026/02',
  '2025/12',
];

const names = [
  'avil', 'milka', 'mojitto', 'mojito', 'f', 'frui', 'fruit', 'fruits', 'fruitsalad', 'fruit-salad',
  'burger', 'burger-1', 'burger-2', 'burger-3', 'burger-4',
  'sn', 'sandwich', 'sandwich-1', 'sandwich-2',
  'shake', 'shake-1', 'shake-2', 'milkshake', 'milk-shake',
  'falooda', 'falooda-1', 'falooda-2',
  'avil-milk', 'avilmilk',
  'special', 'classic', 'nutty', 'premium',
  'mouzy', 'banner', 'logo', 'about', 'story',
  'Menu7', 'Menu-7', 'Menu8', 'Menu-8', 'Menu9', 'Menu-9', 'Menu10', 'Menu-10'
];

const extensions = ['.jpg', '.jpeg', '.png', '.webp'];

const urls = [];
for (const path of paths) {
  for (const name of names) {
    for (const ext of extensions) {
      urls.push(`https://www.avilpro.in/wp-content/uploads/${path}/${name}${ext}`);
    }
  }
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

async function checkWithLimit(urls, limit) {
  const results = [];
  let index = 0;

  async function worker() {
    while (index < urls.length) {
      const currentIdx = index++;
      const url = urls[currentIdx];
      const res = await checkUrl(url);
      if (res.status === 200) {
        console.log(`Found: ${res.url}`);
        results.push(res.url);
      }
    }
  }

  const workers = Array.from({ length: limit }, () => worker());
  await Promise.all(workers);
  return results;
}

async function run() {
  console.log(`Checking ${urls.length} food image URLs...`);
  const found = await checkWithLimit(urls, 30);
  console.log('\n--- SCAN COMPLETE ---');
  console.log(`Total found: ${found.length}`);
  console.log(found.join('\n'));
}

run();
