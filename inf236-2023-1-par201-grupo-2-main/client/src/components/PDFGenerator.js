import React from 'react';
import { PDFDownloadLink, PDFViewer, Document, Page, Text } from '@react-pdf/renderer';

export const generatePDF = (record) => {
  const MyDocument = () => (
    <Document>
      <Page>
        <Text>Contenido del PDF</Text>
        <Text>{record.name}</Text>
        <Text>{record.position}</Text>
        {/* Agrega aquí los campos adicionales que deseas mostrar en el PDF */}
      </Page>
    </Document>
  );

  return (
    <div>
      <h3>Generar PDF</h3>
      <PDFDownloadLink document={<MyDocument />} fileName="documento.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Generando PDF...' : 'Descargar PDF')}
      </PDFDownloadLink>
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    </div>
  );
};

const PDFGenerator = () => {
  return (
    <div>
      <h3>Generar PDF</h3>
      <PDFDownloadLink document={<MyDocument />} fileName="documento.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Generando PDF...' : 'Descargar PDF')}
      </PDFDownloadLink>
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    </div>
  );
};

export default PDFGenerator;
