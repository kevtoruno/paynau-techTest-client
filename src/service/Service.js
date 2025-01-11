import axios from "axios";

const URL =
  "https://9jpxq58d04.execute-api.us-east-2.amazonaws.com/paynautechtest/person";

const getPersonas = () => {
  return axios.get(`${URL}/get`);
};

const createPersona = (persona) => {
  return axios.post(`${URL}/create`, persona, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const updatePersona = (persona) => {
  return axios.put(`${URL}/edit`, persona, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const deletePersona = (id) => {
  return axios.post(
    `${URL}/delete`,
    { Id: id },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export { getPersonas, createPersona, updatePersona, deletePersona };
