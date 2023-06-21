import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => axios.get(baseUrl).then(res => res.data);

const createPerson = newPerson =>
  axios.post(baseUrl, newPerson).then(res => res.data);

const deletePerson = id =>
  axios.delete(`${baseUrl}/${id}`).then(res => res.data);

const personServices = {
  getAll,
  createPerson,
  deletePerson,
};

export default personServices;
