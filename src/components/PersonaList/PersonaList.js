import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import PersonaItem from "../PersonaItem/PersonaItem";
import { PersonaContext } from "../PersonaContext/PersonaContext";

function PersonaList() {
  const { items, fetchPersonas } = React.useContext(PersonaContext);

  useEffect(() => {
    fetchPersonas();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Telefono</th>
          <th>País</th>
          <th>Ciudad</th>
          <th>Direccion</th>
          <th>Fecha Nacimiento</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <PersonaItem key={item.Id} item={item} />
        ))}
      </tbody>
    </Table>
  );
}

export default PersonaList;
