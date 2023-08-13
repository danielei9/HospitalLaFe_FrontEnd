import * as Yup from "yup";

// import * as StaticText from "../../../utils/static-text";

export function initialValues() {
  return {
    email: "",
    password: "",
  };
}

export function validationSchema() {
  // const staticText = StaticText.auth;
  return Yup.object({
    email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
    password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
  });
}