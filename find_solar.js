const queries = [
  'site:unsplash.com/photos solar panels roof',
  'site:unsplash.com/photos solar installation rooftop',
  'site:unsplash.com/photos technician installing solar panel',
  'site:unsplash.com/photos cleaning solar panel',
  'site:unsplash.com/photos commercial building solar panels'
];

async function run() {
  const found = new Set();
  for (const q of queries) {
    try {
      const url = 'https://html.duckduckgo.com/html/?q=' + encodeURIComponent(q);
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      const html = await res.text();
      const regex = /unsplash\.com\/photos\/([a-zA-Z0-9-_]+)/g;
      let m;
      while ((m = regex.exec(html)) !== null) {
        if (!m[1].includes('download') && m[1].length > 3) {
          found.add(m[1]);
        }
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  console.log(`Found ${found.size} slugs:`, Array.from(found));

  // Now resolve photo-[0-9]+ for each
  const photoMap = [];
  for (const slug of Array.from(found).slice(0, 30)) {
    try {
      const res = await fetch('https://unsplash.com/photos/' + slug, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
      });
      const text = await res.text();
      const match = text.match(/https:\/\/images\.unsplash\.com\/(photo-[0-9]{10,}-[0-9a-f]+)/);
      const titleMatch = text.match(/<title>([^<]+)<\/title>/);
      if (match) {
        const photoId = match[1];
        const title = titleMatch ? titleMatch[1] : '';
        // verify 200
        const check = await fetch(`https://images.unsplash.com/${photoId}?q=80&w=800&auto=format&fit=crop`, { method: 'HEAD' });
        if (check.ok) {
          photoMap.push({ slug, photoId, title });
          console.log(`[OK] ${photoId} -> ${title.slice(0, 60)}`);
        }
      }
    } catch (err) {
      // skip
    }
  }

  console.log('TOTAL VERIFIED:', photoMap.length);
}

run();
