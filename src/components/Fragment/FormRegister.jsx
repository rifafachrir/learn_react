import InputForm from "../elements/input/Index";
import Button from "../elements/button/Button";

const FormRegister = () => {
  return (
    <div>
      <form action="">
        <div className="mb-4">
          <InputForm
            htmlFor="name"
            label="name"
            inputName="name"
            type="text"
            placeholder="Nama"
          />
        </div>
        <div className="mb-4">
          <InputForm
            htmlFor="rombel"
            label="rombel"
            inputName="rombel"
            type="text"
            placeholder="PPLG XII-1"
          />
        </div>
        <div className="mb-4">
          <InputForm
            htmlFor="rayon"
            label="rayon"
            inputName="rayon"
            type="text"
            placeholder="Cicurug 1"
          />
        </div>
        <div className="mb-4">
          <InputForm
            htmlFor="email"
            label="email"
            type="email"
            inputName="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="mb-4">
          <InputForm
            htmlFor="password"
            label="password"
            type="password"
            inputName="password"
            placeholder="*****"
          />
        </div>
        <div className="mb-4">
          <InputForm
            htmlFor="confirm password"
            label="confirm password"
            type="password"
            inputName="confirm password"
            placeholder="*****"
          />
        </div>
        <Button variant="bg-blue-600 w-full">Register</Button>
      </form>
    </div>
  );
};

export default FormRegister;
