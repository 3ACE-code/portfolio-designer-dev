const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({
  size: 'A4',
  margin: 40,
  bufferPages: true
});

const filename = path.join(__dirname, 'public', 'Cennik_Designer_Dev.pdf');
doc.pipe(fs.createWriteStream(filename));

// Colory
const darkBg = '#0a0a0a';
const cyan = '#00F0FF';
const purple = '#8b5cf6';
const white = '#ffffff';
const lightGray = '#d1d5db';
const darkGray = '#6b7280';

// Helper - Line
function drawLine(doc, y, width = 515) {
  doc.moveTo(40, y).lineTo(40 + width, y).stroke('#333333');
}

// Header
doc.fontSize(16).fillColor(darkGray).text('DESIGNER - DEV', 40, 40);
doc.fontSize(14).fillColor(cyan).text('OFERTA I CENNIK 2026', 41 + 100, 40, { lineBreak: false });

doc.fontSize(10).fillColor(darkGray).text('Nowoczesne rozwiązania cyfrowe | Design & Development', 40, 70);
drawLine(doc, 95);

doc.moveDown(1);

// Pricing Cards
const cards = [
  {
    title: 'ESSENTIAL',
    subtitle: 'Szybki Start',
    price: 'od 1 200 PLN',
    description: 'Idealne dla prostych wizytówek i Landing Page.',
    features: [
      '✓ Design w Figmie',
      '✓ Wdrożenie Next.js',
      '✓ Podstawowe SEO',
      '✓ Wdrożenie 1-3 dni'
    ]
  },
  {
    title: 'UNIVERSE MVP',
    subtitle: 'Najczęściej wybierany ⭐',
    price: 'od 3 500 PLN',
    description: 'Kompletna strona firmowa z animacjami 3D.',
    features: [
      '✓ Full UI/UX Design w Figmie',
      '✓ Animacje High-End (3D/Framer Motion)',
      '✓ SEO Premium + strukturalne dane',
      '✓ Mobile First + Responsywność'
    ]
  },
  {
    title: 'ULTIMATE',
    subtitle: 'Rozbudowane Systemy',
    price: 'Wycena indywidualna',
    description: 'Sklepy, SaaS i zaawansowane aplikacje webowe.',
    features: [
      '✓ Systemy CMS i zarządzania treścią',
      '✓ Integracje API i zewnętrznych serwisów',
      '✓ Pełna skalowalność i wydajność',
      '✓ Support techniczny powykonawczy'
    ]
  }
];

let currentY = 120;

cards.forEach((card, idx) => {
  // Card Title
  doc.fontSize(13).fillColor(white).text(card.title, 40, currentY, { width: 435, underline: false });
  doc.fontSize(9).fillColor(cyan).text(card.subtitle, 40, currentY + 16);

  // Price
  doc.fontSize(14).fillColor(cyan).font('Helvetica-Bold').text(card.price, 40, currentY + 35);
  doc.fontSize(9).fillColor(darkGray).font('Helvetica').text(card.description, 40, currentY + 55);

  currentY += 85;

  // Features
  card.features.forEach(feature => {
    doc.fontSize(9).fillColor(lightGray).text(feature, 50, currentY);
    currentY += 15;
  });

  currentY += 15;
  drawLine(doc, currentY);
  currentY += 20;
});

// Custom Projects
doc.fontSize(11).fillColor(cyan).text('Potrzebujesz mniejszej poprawki lub projektu niestandardowego?', 40, currentY);
doc.fontSize(10).fillColor(lightGray).text('Napisz do mnie – chętnie pomogę przy mniejszych zleceniach', 40, currentY + 18);

// Process Timeline
currentY += 70;
drawLine(doc, currentY);
currentY += 20;

doc.fontSize(12).fillColor(white).text('Proces Współpracy', 40, currentY);
currentY += 25;

const phases = [
  { step: '01', title: 'Briefing', desc: 'Poznajemy Twoje cele i wizję' },
  { step: '02', title: 'Projekt', desc: 'Tworzymy design w Figmie' },
  { step: '03', title: 'Wdrożenie', desc: 'Kodujemy z najwyższą jakością' },
  { step: '04', title: 'Publikacja', desc: 'Deployment i wsparcie' }
];

phases.forEach((phase) => {
  doc.fontSize(11).fillColor(cyan).text(phase.step, 40, currentY);
  doc.fontSize(10).fillColor(white).text(phase.title, 60, currentY);
  doc.fontSize(9).fillColor(darkGray).text(phase.desc, 60, currentY + 15);
  currentY += 40;
});

// Footer
currentY += 20;
drawLine(doc, currentY);
currentY += 15;

doc.fontSize(11).fillColor(white).text('📧 Skontaktuj się ze mną', 40, currentY);
doc.fontSize(12).fillColor(cyan).font('Helvetica-Bold').text('danielsony28@gmail.com', 40, currentY + 18);
doc.fontSize(10).fillColor(darkGray).font('Helvetica').text('Portfolio: designer-dev.vercel.app', 40, currentY + 35);
doc.fontSize(8).fillColor(darkGray).text('© 2024 DESIGNER-DEV. Wszystkie prawa zastrzeżone.', 40, currentY + 50);

doc.end();

console.log('✅ PDF wygenerowany: ' + filename);
