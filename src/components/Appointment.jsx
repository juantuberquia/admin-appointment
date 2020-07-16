import React from "react";

const Appointment = ({ appomt, deleteAppomt }) => {
  return (
    <div className="cita">
      <p>
        {/* Mascota <span>{getDataLocal.pet}</span> */}
        Mascota <span>{appomt.pet}</span>
      </p>
      <p>
        Propietario <span>{appomt.owner}</span>
      </p>
      <p>
        Fecha <span>{appomt.date}</span>
      </p>
      <p>
        Hora <span>{appomt.hour}</span>
      </p>
      <p>
        Sintomas <span>{appomt.symptoms}</span>
      </p>
      <button
        className="button eliminar u-full-width"
        onClick={() => deleteAppomt(appomt.id)}
      >
        {" "}
        ELIMINAR CITA &times;
      </button>
    </div>
  );
};

export default Appointment;
