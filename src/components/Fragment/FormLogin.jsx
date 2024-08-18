import InputForm from "../elements/input/Index"
import Button from "../elements/button/Button"


const FormLogin = () => {
  return (
    <div>
          <form action="">
          <div className="mb-4">
            <InputForm htmlFor="email"  label="email" type="email" inputName="email" placeholder="example@gmail.com" />
          </div>
          <div className="mb-4">
            <InputForm htmlFor="password" label="password" type="password" inputName="password" placeholder="*****" />
          </div>
          <Button variant="bg-blue-600 w-full" >Login</Button>
        </form>
    </div>
  )
}

export default FormLogin