const https = require('https');

const years = ['2024', '2025', '2026'];
const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const indices = Array.from({ length: 8 }, (_, i) => i + 1);

const urls = [];
for (const year of years) {
  for (const month of months) {
    // Avoid checking dates in the future if current time is July 2026
    if (year === '2026' && parseInt(month) > 7) continue;

    for (const i of indices) {
      urls.push(`https://www.avilpro.in/wp-content/uploads/${year}/${month}/Menu${i}.jpeg`);
      urls.push(`https://www.avilpro.in/wp-content/uploads/${year}/${month}/Menu-${i}.jpeg`);
      urls.push(`https://www.avilpro.in/wp-content/uploads/${year}/${month}/Menu${i}.jpg`);
      urls.push(`https://www.avilpro.in/wp-content/uploads/${year}/${month}/Menu-${i}.jpg`);
      urls.push(`https://www.avilpro.in/wp-content/uploads/${year}/${month}/AVILPRO${i}.jpg`);
      urls.push(`https://www.avilpro.in/wp-content/uploads/${year}/${month}/AVILPRO${i}.jpeg`);
    }
  }
}

// Remove duplicates
const uniqueUrls = [...new Set(urls)];

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
  console.log(`Checking ${uniqueUrls.length} unique URLs with concurrency limit of 50...`);
  const found = await checkWithLimit(uniqueUrls, 50);
  console.log('\n--- SCAN COMPLETE ---');
  console.log(`Total found: ${found.length}`);
  console.log(found.join('\n'));
}

run();
