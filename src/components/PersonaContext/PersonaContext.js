import React, { useState } from "react";
import {
  createPersona,
  deletePersona,
  getPersonas,
  updatePersona,
} from "../../service/Service";

const PersonaContext = React.createContext();

function PersonaProvider({ children }) {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  const fetchPersonas = async () => {
    try {
      const response = await getPersonas();
      setItems(response.data);
    } catch (error) {
      console.error("Error obteniendo datos:", error);
    }
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setOpenForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Desea eliminar este registro?")) {
      try {
        await deletePersona(id);
        await fetchPersonas();
      } catch (error) {
        console.error("Error eliminando persona:", error);
      }
    }
  };

  const handleAdd = () => {
    setSelectedItem(null);
    setOpenForm(true);
  };

  const handleSubmitForm = async (item) => {
    try {
      if (item.Id) {
        await updatePersona(item);
      } else {
        await createPersona(item);
      }
      await fetchPersonas();
      setOpenForm(false);
    } catch (error) {
      console.error("Error al guardar persona:", error);
    }
  };

  return (
    <PersonaContext.Provider
      value={{
        items,
        selectedItem,
        openForm,
        setOpenForm,
        fetchPersonas,
        handleEdit,
        handleDelete,
        handleAdd,
        handleSubmitForm,
      }}
    >
      {children}
    </PersonaContext.Provider>
  );
}

export { PersonaContext, PersonaProvider };
