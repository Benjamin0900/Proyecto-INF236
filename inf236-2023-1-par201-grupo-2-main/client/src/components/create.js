import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   position: "",
   age: "",
   alergias: "",
   sexo: "",
   direccion: "",
   contacto: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", position: "", age: "", alergias: "", sexo: "", direccion: "", contacto: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Datos del Paciente</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Nombre</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Rut</label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="alergias">Alergias</label>
         <input
           type="text"
           className="form-control"
           id="alergias"
           value={form.alergias}
           onChange={(e) => updateForm({ alergias: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="sexo">Sexo</label>
         <input
           type="text"
           className="form-control"
           id="sexo"
           value={form.sexo}
           onChange={(e) => updateForm({ sexo: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="direccion">Dirección</label>
         <input
           type="text"
           className="form-control"
           id="direccion"
           value={form.direccion}
           onChange={(e) => updateForm({ direccion: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="contacto">Contacto</label>
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
       <div className="form-group">
         <input
           type="submit"
           value="Crear Paciente"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}