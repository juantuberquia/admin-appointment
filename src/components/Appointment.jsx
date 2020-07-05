import React from "react";

const Appointment = ({ appomt }) => {
  return (
    <div className="cita">
      <p>
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
    </div>
  );
};

export default Appointment;
