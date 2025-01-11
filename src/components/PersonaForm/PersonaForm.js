import { PersonaContext } from "../PersonaContext/PersonaContext";
import "./PersonaForm.css";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

function PersonaForm() {
  const { selectedItem, setOpenForm, handleSubmitForm } =
    React.useContext(PersonaContext);

  const [formData, setFormData] = useState({
    Nombres: "",
    Apellidos: "",
    FechaNacimiento: "",
    Telefono: "",
    CiudadOrigen: "",
    PaisOrigen: "",
    Direccion: "",
    EstadoCivil: "",
  });

  useEffect(() => {
    if (selectedItem) setFormData(selectedItem);
  }, [selectedItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitForm(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Label>Nombres</Form.Label>
        <Form.Control
          type="text"
          name="Nombres"
          onChange={handleChange}
          value={formData.Nombres}
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control
          type="text"
          name="Apellidos"
          onChange={handleChange}
          value={formData.Apellidos}
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Telefono</Form.Label>
        <Form.Control
          type="text"
          name="Telefono"
          onChange={handleChange}
          value={formData.Telefono}
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Pais Origen</Form.Label>
        <Form.Control
          type="text"
          name="PaisOrigen"
          onChange={handleChange}
          value={formData.PaisOrigen}
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Ciudad Origen</Form.Label>
        <Form.Control
          type="text"
          name="CiudadOrigen"
          onChange={handleChange}
          value={formData.CiudadOrigen}
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Fecha Nacimiento</Form.Label>
        <Form.Control
          type="date"
          name="FechaNacimiento"
          onChange={handleChange}
          value={formData.FechaNacimiento}
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Direccion</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          name="Direccion"
          onChange={handleChange}
          value={formData.Direccion}
          required
        ></Form.Control>
      </Form.Group>

      <div className="PersonaForm-buttonContainer">
        <button
          type="button"
          onClick={() => setOpenForm((m) => !m)}
          className="PersonaForm-button PersonaForm-button--cancel"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="PersonaForm-button PersonaForm-button--add"
        >
          Añadir
        </button>
      </div>
    </Form>
  );
}

export default PersonaForm;
