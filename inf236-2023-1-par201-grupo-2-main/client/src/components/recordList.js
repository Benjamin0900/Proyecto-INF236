import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";
import { generatePDF } from "./PDFGenerator";

const Record = (props) => {
  const generatePDF = (record) => {
    const MyDocument = () => (
      <Document>
        <Page>
          <Text>Nombre: {record.name}</Text>
          <Text>RUT: {record.position}</Text>
          {/* Agrega más elementos de texto según tus necesidades */}
        </Page>
      </Document>
    );

    const fileName = "documento.pdf";

    return (
      <PDFDownloadLink document={<MyDocument />} fileName={fileName}>
        {({ loading }) => (loading ? "Generando PDF..." : "Descargar PDF")}
      </PDFDownloadLink>
    );
  };

  return (
    <tr>
      <td>{props.record.name}</td>
      <td>{props.record.position}</td>
      <td>{props.record.age}</td>
      <td>{props.record.alergias}</td>
      <td>{props.record.sexo}</td>
      <td>{props.record.direccion}</td>
      <td>{props.record.contacto}</td>

      <td>
        <Link className="btn btn-link" to={`/edit/${props.record._id}`}>
          Editar
        </Link>{" "}
        |
        <button
          className="btn btn-link"
          onClick={() => {
            props.deleteRecord(props.record._id);
          }}
        >
          Eliminar
        </button>
        <button className="btn btn-link" onClick={() => generatePDF(props.record)}>
          Generar PDF
        </button>
      </td>
    </tr>
  );
};

export default function RecordList() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  return (
    <div>
      <h3>Lista de Pacientes</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Rut</th>
            <th>Fecha Nacimiento</th>
            <th>Alergias</th>
            <th>Sexo</th>
            <th>Dirección</th>
            <th>Contacto</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}


