import { Button } from "react-bootstrap";
import { PersonaContext } from "../PersonaContext/PersonaContext";
import React from "react";

function PersonaItem({ item, onEdit, onDelete }) {
  const { handleEdit, handleDelete } = React.useContext(PersonaContext);
  return (
    <tr>
      <td>{item.Nombres}</td>
      <td>{item.Apellidos}</td>
      <td>{item.Telefono}</td>
      <td>{item.PaisOrigen}</td>
      <td>{item.CiudadOrigen}</td>
      <td>{item.Direccion}</td>
      <td>{item.FechaNacimiento}</td>
      <td>
        <Button
          variant="warning"
          className="me-2"
          onClick={() => handleEdit(item)}
        >
          Editar
        </Button>

        <Button variant="danger" onClick={() => handleDelete(item.Id)}>
          Eliminar
        </Button>
      </td>
    </tr>
  );
}

export default PersonaItem;
