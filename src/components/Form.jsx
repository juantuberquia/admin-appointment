import React, { useState, useEffect } from "react";
import uuid from "uuid/v4";
import Appointment from "./Appointment";

const Form = () => {
  // crear state cita
  const [cita, setCita] = useState({
    pet: "",
    owner: "",
    date: "",
    hour: "",
    symptoms: "",
  });

  // state error para campos vacios
  const [error, setError] = useState(false);

  // state almacenar las citas
  const [citas, setCitas] = useState([]);

  // actualizo el estado de cita
  const setState = (event) => {
    setCita({
      ...cita,
      [event.target.name]: event.target.value,
    });
  };

  // asignar los datos a las variables
  const { pet, owner, date, hour, symptoms } = cita;

  // evento submit del form
  const submitCita = (e) => {
    e.preventDefault();

    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      hour.trim() === "" ||
      symptoms.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    // asignar id a cada cita
    cita.id = uuid();

    // crear cita
    setCitas([...citas, cita]);

    // reiniciar el form
    setCita({
      pet: "",
      owner: "",
      date: "",
      hour: "",
      symptoms: "",
    });
  };

  // eliminar cita
  const deleteAppomt = (id) => {
    let newCitas = citas.filter((i) => i.id !== id);
    setCitas(newCitas);
  };

  // cambio del titulo citas
  const changeTitle =
    citas.length === 0 ? "No hay citas" : "Administra tus citas";

  // almacenar citas en local storage
  useEffect(() => {
    citas.map((i) => {
      localStorage.setItem(i.id, JSON.stringify(citas));
    });
  }, [citas]);

  return (
    <div className="container">
      <h1>Administrador de Citas</h1>
      <div className="row">
        <div className="one-half column">
          <h2>crear una cita</h2>
          {error ? (
            <p className="alerta-error"> llenar todos los campos</p>
          ) : null}
          <form onSubmit={submitCita}>
            <label> Nombre de mascota</label>
            <input
              type="text"
              name="pet"
              className="u-full-width"
              placeholder="Nombre de la mascota"
              onChange={setState}
              value={pet}
            />
            <label> Nombre de Propietario</label>
            <input
              type="text"
              name="owner"
              className="u-full-width"
              placeholder="Nombre de la mascota"
              onChange={setState}
              value={owner}
            />
            <label> Fecha</label>
            <input
              type="date"
              name="date"
              className="u-full-width"
              onChange={setState}
              value={date}
            />
            <label> hora</label>
            <input
              type="time"
              name="hour"
              className="u-full-width"
              onChange={setState}
              value={hour}
            />

            <label> Sintomas </label>
            <textarea
              className="u-full-width"
              name="symptoms"
              placeholder="sintomas"
              onChange={setState}
              value={symptoms}
            ></textarea>
            <button type="submit" className="u-full-width  button-primary">
              AGREGAR CITA
            </button>
          </form>
        </div>
        <div className="one-half column">
          <h2> {changeTitle} </h2>
          {citas.map((i) => (
            <Appointment
              key={i.id}
              appomt={i}
              deleteAppomt={deleteAppomt}
            ></Appointment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
