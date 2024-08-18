import AuthLayouts from "../components/Layouts/AuthLayouts"
import FormRegister from "../components/Fragment/FormRegister";


const RegisterPage = () => {
  return (
    <AuthLayouts  title ="register" type="register">
      <FormRegister/>
    </AuthLayouts>
  )
}

export default RegisterPage;