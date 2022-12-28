export const intialState = {
  email: "binddigvijay123@gmail.com",
  password: "binddigvijy123",
};

export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";

export const changeEmail = (email) => {
  return {
    type: CHANGE_EMAIL,
    payload: email,
  };
};

export const changePassword = (password) => {
  return {
    type: CHANGE_PASSWORD,
    payload: password,
  };
};
