import React from "react";
import PersonaList from "../PersonaList/PersonaList";
import { PersonaContext } from "../PersonaContext/PersonaContext";
import PersonaModalForm from "../PersonaForm/PersonaForm";
import { Modal } from "../Modal/Modal";
import { Button } from "react-bootstrap";

function AppUI() {
  const { openForm, handleAdd } = React.useContext(PersonaContext);
  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center">Personas - CRUD</h1>
        <Button variant="success" className="mb-3" onClick={handleAdd}>
          Agregar Persona
        </Button>
        <PersonaList />
        {openForm && (
          <Modal>
            <PersonaModalForm />
          </Modal>
        )}
      </div>
    </>
  );
}

export default AppUI;
