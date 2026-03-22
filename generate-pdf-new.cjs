const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({
  size: 'A4',
  margin: 0,
  bufferPages: true,
  compress: true
});

const filename = path.join(__dirname, 'public', 'Cennik_Designer_Dev.pdf');
doc.pipe(fs.createWriteStream(filename));

const fontRegularPath = 'C:/Windows/Fonts/arial.ttf';
const fontBoldPath = 'C:/Windows/Fonts/arialbd.ttf';

doc.registerFont('BrandSans', fontRegularPath);
doc.registerFont('BrandSansBold', fontBoldPath);

const pageWidth = doc.page.width;
const pageHeight = doc.page.height;

const bg = '#0a0a0a';
const panel = '#111111';
const panelSoft = '#151515';
const white = '#f8fafc';
const muted = '#cbd5e1';
const subtle = '#94a3b8';
const line = '#27272a';
const cyan = '#00F0FF';
const purple = '#8b5cf6';
const gold = '#f3e7c0';

function fillRoundedRect(x, y, width, height, radius, color, opacity = 1) {
  doc.save();
  doc.fillOpacity(opacity).roundedRect(x, y, width, height, radius).fill(color);
  doc.restore();
}

function strokeRoundedRect(x, y, width, height, radius, color, opacity = 1, lineWidth = 1) {
  doc.save();
  doc.strokeOpacity(opacity).lineWidth(lineWidth).roundedRect(x, y, width, height, radius).stroke(color);
  doc.restore();
}

function glowCircle(x, y, radius, color, opacity = 0.12) {
  doc.save();
  doc.fillOpacity(opacity).circle(x, y, radius).fill(color);
  doc.restore();
}

function sectionLabel(text, x, y, color) {
  doc.font('BrandSansBold').fontSize(9).fillColor(color).text(text.toUpperCase(), x, y, {
    characterSpacing: 1
  });
}

function bodyText(text, x, y, width, size = 9, color = muted) {
  doc.font('BrandSans').fontSize(size).fillColor(color).text(text, x, y, {
    width,
    lineGap: 2
  });
}

function drawBulletList(items, x, startY, color) {
  let cursorY = startY;

  items.forEach((item) => {
    doc.save();
    doc.fillColor(color).circle(x + 4, cursorY + 5, 2.2).fill();
    doc.restore();
    bodyText(item, x + 14, cursorY, 210, 8.5, white);
    cursorY += 16;
  });
}

function drawCard(card, x, y, width, height) {
  fillRoundedRect(x, y, width, height, 18, panel, 0.98);
  fillRoundedRect(x + 1, y + 1, width - 2, height - 2, 17, panelSoft, 0.45);
  strokeRoundedRect(x, y, width, height, 18, card.accent, 0.55, 1.1);
  strokeRoundedRect(x + 8, y + 8, width - 16, height - 16, 12, line, 0.7, 0.6);

  doc.save();
  doc.fillOpacity(0.16).roundedRect(x, y, width, 36, 18).fill(card.accent);
  doc.restore();

  sectionLabel(card.title, x + 18, y + 16, card.accent);
  doc.font('BrandSans').fontSize(8.5).fillColor(subtle).text(card.subtitle, x + 18, y + 34);

  doc.font('BrandSansBold').fontSize(20).fillColor(white).text(card.price, x + 18, y + 54, {
    width: width - 36
  });

  bodyText(card.description, x + 18, y + (card.descriptionY || 80), width - 36, 8.7, muted);
  drawBulletList(card.features, x + 18, y + (card.listY || 108), card.accent);
}

doc.rect(0, 0, pageWidth, pageHeight).fill(bg);

glowCircle(90, 92, 110, cyan, 0.08);
glowCircle(pageWidth - 80, 120, 120, purple, 0.08);
glowCircle(pageWidth / 2, pageHeight - 110, 140, cyan, 0.04);

fillRoundedRect(28, 28, pageWidth - 56, pageHeight - 56, 28, '#0d0d0d', 0.92);
strokeRoundedRect(28, 28, pageWidth - 56, pageHeight - 56, 28, line, 1, 1);

fillRoundedRect(46, 44, pageWidth - 92, 96, 22, panel, 0.9);
strokeRoundedRect(46, 44, pageWidth - 92, 96, 22, cyan, 0.28, 1);

doc.font('BrandSansBold').fontSize(25).fillColor(white).text('DESIGNER', 66, 66, { lineBreak: false });
doc.font('BrandSansBold').fontSize(25).fillColor(cyan).text('-', 198, 66, { lineBreak: false });
doc.font('BrandSansBold').fontSize(25).fillColor(white).text('DEV', 216, 66);
sectionLabel('Oferta i Cennik 2026', 66, 102, cyan);
bodyText('Nowoczesne rozwiązania cyfrowe dla marek, startupów i produktów premium.', 300, 68, 180, 8.5, muted);
bodyText('Design, development i wdrożenie w jednym procesie.', 300, 94, 180, 8.2, subtle);

const cards = [
  {
    title: 'ESSENTIAL',
    subtitle: 'Szybki Start',
    price: 'od 1 200 PLN',
    description: 'Proste wizytówki i landing pages przygotowane szybko, estetycznie i bez zbędnych etapów.',
    features: ['Design w Figmie', 'Wdrożenie Next.js', 'Podstawowe SEO', 'Realizacja 1-3 dni'],
    accent: gold
  },
  {
    title: 'UNIVERSE MVP',
    subtitle: 'Najczęściej wybierany',
    price: 'od 3 500 PLN',
    description: 'Kompletny design, wdrożenie i dopracowane animacje dla nowoczesnej strony firmowej.',
    features: ['Full UI/UX Design', 'Animacje High-End 3D', 'SEO Premium', 'Mobile First'],
    accent: cyan
  },
  {
    title: 'ULTIMATE',
    subtitle: 'Rozbudowane Systemy',
    price: 'Wycena indywidualna',
    description: 'Sklepy, SaaS i bardziej zaawansowane produkty webowe z myślą o skalowaniu.',
    features: ['Systemy CMS', 'Integracje API', 'Pełna skalowalność', 'Support techniczny'],
    accent: purple,
    descriptionY: 78,
    listY: 102
  }
];

drawCard(cards[0], 46, 162, 240, 196);
drawCard(cards[1], 308, 162, 240, 196);
drawCard(cards[2], 46, 378, 502, 172);

fillRoundedRect(46, 566, 502, 76, 18, panel, 0.96);
strokeRoundedRect(46, 566, 502, 76, 18, cyan, 0.32, 1);
sectionLabel('Elastyczna współpraca', 66, 584, cyan);
bodyText('Potrzebujesz mniejszej poprawki lub projektu niestandardowego? Napisz do mnie. Pomagam również przy mniejszych wdrożeniach, optymalizacjach i szybkich poprawkach.', 66, 604, 448, 8.7, muted);

fillRoundedRect(46, 656, 502, 108, 18, panel, 0.94);
strokeRoundedRect(46, 656, 502, 108, 18, purple, 0.22, 1);
sectionLabel('Proces współpracy', 66, 674, white);

const phases = [
  { number: '01', title: 'Briefing', desc: 'Poznajemy cele i zakres projektu.' },
  { number: '02', title: 'Design', desc: 'Tworzę kierunek wizualny i UX.' },
  { number: '03', title: 'Development', desc: 'Wdrażam projekt w wysokiej jakości.' },
  { number: '04', title: 'Launch', desc: 'Publikacja, testy i wsparcie.' }
];

let phaseX = 66;
phases.forEach((phase) => {
  doc.save();
  doc.fillOpacity(0.18).roundedRect(phaseX, 700, 105, 38, 12).fill(cyan);
  doc.restore();
  strokeRoundedRect(phaseX, 700, 105, 38, 12, line, 0.9, 0.7);
  doc.font('BrandSansBold').fontSize(10).fillColor(cyan).text(phase.number, phaseX + 12, 711, { lineBreak: false });
  doc.font('BrandSansBold').fontSize(9).fillColor(white).text(phase.title, phaseX + 38, 711);
  bodyText(phase.desc, phaseX, 743, 105, 7.2, subtle);
  phaseX += 118;
});

doc.save();
doc.strokeOpacity(0.8).lineWidth(0.8).moveTo(66, 786).lineTo(528, 786).stroke(line);
doc.restore();

doc.font('BrandSansBold').fontSize(10).fillColor(white).text('Kontakt', 66, 798);
doc.font('BrandSansBold').fontSize(10).fillColor(cyan).text('danielsony28@gmail.com', 126, 798, { lineBreak: false });
doc.font('BrandSans').fontSize(8.5).fillColor(subtle).text('designer-dev.vercel.app', 66, 816, { lineBreak: false });
// doc.font('BrandSans').fontSize(8.5).fillColor(subtle).text('Oferta przygotowana w estetyce premium, zgodnej z identyfikacją strony.', 232, 816);

doc.end();

console.log('✅ Profesjonalny PDF wygenerowany!');
