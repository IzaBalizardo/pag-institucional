import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  email: Yup.string().required("Campo obrigatório").email("Email inválido"),
  cpf: Yup.string().required("Campo obrigatório"),
  data: Yup.string().required("Campo obrigatório"),
  tel: Yup.string().required("Campo obrigatório"),
  insta: Yup.string().required("Campo obrigatório"),
});
