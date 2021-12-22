import axios from "axios";

// axios.defaults.baseURL = "https://61bb76f2e943920017784ed3.mockapi.io";
// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const getContactsAPI = async () => {
  try {
    const response = await axios.get("/contacts");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postContactAPI = async (contact) => {
  console.log(contact);
  try {
    const response = await axios.post("/contacts", contact);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContactAPI = async (contactId) => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
