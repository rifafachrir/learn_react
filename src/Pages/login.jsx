import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragment/FormLogin";


const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type="login" >
      <FormLogin></FormLogin>
    </AuthLayouts>
  );
};

export default LoginPage;
