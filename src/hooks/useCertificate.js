import { PDFDocument, StandardFonts } from 'pdf-lib';

import { certificateTemplate } from '../assets/index.js';

import saveAs from './useFileSaver.js';

// Draw the text on the page - Certificate Modification
function modifyCertificate(pdfPage, text, xVal, yVal, fontSize, fontName) {
  pdfPage.drawText(text, {
    x: xVal,
    y: yVal,
    size: fontSize,
    font: fontName
  });
}

// Generate Certificate
async function generateCertificate(name, description, date) {
  // Get the available PDFDocument and convert it into arrayBuffer
  const existingPdfBytes = await fetch(certificateTemplate).then((res) => res.arrayBuffer());

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  const TimesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const TimesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  // Get the first page of the document
  const pdfPage = pdfDoc.getPages()[0];

  // Modification Section
  modifyCertificate(pdfPage, name, 76, 260, 35, TimesRomanBold);
  modifyCertificate(pdfPage, description, 78, 228, 14, TimesRoman);
  modifyCertificate(pdfPage, date, 567, 110, 15, TimesRoman);

  // Uint8Array formation from modified pdf
  const pdfBytes = await pdfDoc.save();
  saveAs(
    new File([pdfBytes], 'Cuizzy_Certificate.pdf', {
      type: 'application/pdf;charset=utf-8'
    })
  );
}

export default function useCertificate(name, topic, percentage, date) {
  const description = `For securing ${percentage}% marks in ${topic.split('-').join(' ')} Quiz.`;
  generateCertificate(name, description, date);
}
