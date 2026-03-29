import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const BASE = new URL('..', import.meta.url).pathname;

const assets = [
  // Fonts
  { url: 'https://freight.cargo.site/m/C2742425120827516445025396368111/CitizenGrotesk-Poster.woff', dest: 'public/fonts/CitizenGrotesk-Poster.woff' },
  { url: 'https://freight.cargo.site/m/J2702373317186087591899938464495/AUTHENTICSans-90.woff', dest: 'public/fonts/AUTHENTICSans-90.woff' },

  // Logo
  { url: 'https://freight.cargo.site/t/original/i/P2747157169379161081876610851567/TEMPLE_VOEUX-2023_B.png', dest: 'public/images/temple-logo.png' },

  // Background slideshow images (16)
  { url: 'https://freight.cargo.site/t/original/i/X2737570162487105652896113402607/9612_6A_TOUCHED_FLAT_SHARP-copie.jpg', dest: 'public/images/bg-01.jpg' },
  { url: 'https://freight.cargo.site/t/original/i/R2742606882684300249561620849391/2.jpg', dest: 'public/images/bg-02.jpg' },
  { url: 'https://freight.cargo.site/t/original/i/R2743978420777229021313309385455/NITRAM.png', dest: 'public/images/bg-03.png' },
  { url: 'https://freight.cargo.site/t/original/i/W2747432439072926605289645449967/_DSC0495.jpg', dest: 'public/images/bg-04.jpg' },
  { url: 'https://freight.cargo.site/t/original/i/Z2737570162560892629190951609071/9614_33A_TOUCHED_FLAT_SHARP-copie.jpg', dest: 'public/images/bg-05.jpg' },
  { url: 'https://freight.cargo.site/t/original/i/T2746795102386526229573743452911/Finalistes-Mode---Villa-Noailles---Luc-Bertrand---17.jpg', dest: 'public/images/bg-06.jpg' },
  { url: 'https://freight.cargo.site/t/original/i/X2747432439165160325658193208047/image_1_paysage.jpg', dest: 'public/images/bg-07.jpg' },
  { url: 'https://freight.cargo.site/t/original/i/O2746982827928095111818328974063/04.jpg', dest: 'public/images/bg-08.jpg' },
  { url: 'https://freight.cargo.site/t/original/i/K2747432439146713581584483656431/13DESSERTS-BD.jpg', dest: 'public/images/bg-09.jpg' },
  { url: 'https://freight.cargo.site/t/original/i/H2747432439238947301953031414511/TM-13_BOTANICS_PCDV4.jpg', dest: 'public/images/bg-10.jpg' },
  { url: 'https://freight.cargo.site/t/original/i/N2747432439202053813805612311279/image_3_paysage.jpg', dest: 'public/images/bg-11.jpg' },
  { url: 'https://freight.cargo.site/t/original/i/A2745499132837988190823304438511/sdb_tableau1_DSC_0907-copie.jpg', dest: 'public/images/bg-12.jpg' },
  { url: 'https://freight.cargo.site/t/original/i/C2747432439109820093437064553199/_DSC0538.jpg', dest: 'public/images/bg-13.jpg' },
  { url: 'https://freight.cargo.site/t/original/i/X2747432439257394046026740966127/TM-13_BOTANICS_PCDV5.jpg', dest: 'public/images/bg-14.jpg' },
  { url: 'https://freight.cargo.site/t/original/i/O2747432439091373349363355001583/_DSC0497.jpg', dest: 'public/images/bg-15.jpg' },
  { url: 'https://freight.cargo.site/t/original/i/N2747432439220500557879321862895/TM-13_BOTANICS_PCDV2.jpg', dest: 'public/images/bg-16.jpg' },
];

async function download(url, dest) {
  const fullDest = path.join(BASE, dest);
  if (existsSync(fullDest)) {
    console.log(`  skip (exists): ${dest}`);
    return;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(path.dirname(fullDest), { recursive: true });
  await writeFile(fullDest, buf);
  console.log(`  ✓ ${dest} (${(buf.length / 1024).toFixed(0)} KB)`);
}

// Batch downloads 4 at a time
async function run() {
  const BATCH = 4;
  for (let i = 0; i < assets.length; i += BATCH) {
    const batch = assets.slice(i, i + BATCH);
    await Promise.all(batch.map(a => download(a.url, a.dest).catch(e => console.error(`  ✗ ${a.dest}: ${e.message}`))));
  }
  console.log('\nDone!');
}

run();
