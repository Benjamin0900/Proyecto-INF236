import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   name: "",
   position: "",
   age: "",
   alergias: "",
   sexo: "",
   direccion: "",
   contacto: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      name: form.name,
      position: form.position,
      age: form.age,
      alergias: form.alergias,
      sexo: form.sexo,
      direccion: form.direccion,
      contacto: form.contacto,
    };
  
    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  
    navigate("/");
  }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Modificar Datos del Paciente</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Nombre: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Rut: </label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="alergias">Alergias: </label>
         <input
           type="text"
           className="form-control"
           id="alergias"
           value={form.alergias}
           onChange={(e) => updateForm({ alergias: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="sexo">Sexo: </label>
         <input
           type="text"
           className="form-control"
           id="sexo"
           value={form.sexo}
           onChange={(e) => updateForm({ sexo: e.target.value })}
         />
       </div>  
       <div className="form-group">
         <label htmlFor="direccion">Dirección: </label>
         <input
           type="text"
           className="form-control"
           id="direccion"
           value={form.direccion}
           onChange={(e) => updateForm({ direccion: e.target.value })}
         />  
       </div>
       <div className="form-group">
         <label htmlFor="contacto">Contacto: </label>
         <input
           type="text"
           className="form-control"
           id="contacto"
           value={form.contacto}
           onChange={(e) => updateForm({ contacto: e.target.value })}
         />  
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="C1"
             checked={form.level === "C1"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">C1</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionJunior"
             value="C2"
             checked={form.level === "C2"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionJunior" className="form-check-label">C2</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionSenior"
             value="C3"
             checked={form.level === "C3"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionSenior" className="form-check-label">C3</label>
       </div>
       <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="position4"
             value="C4"
             checked={form.level === "C4"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="position4" className="form-check-label">C4</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="position5"
             value="C5"
             checked={form.level === "C5"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="position5" className="form-check-label">C5</label>
         </div>
         <div className="form-group">
         <label htmlFor="age">Fecha Nacimiento</label>
         <input
           type="text"
           className="form-control"
           id="age"
           value={form.age}
           onChange={(e) => updateForm({ age: e.target.value })}
         />
       </div>
       </div>
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Actualizar Paciente"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}