import Label from './Label';
import Input from './Input';


const InputForm = (props) => {
 // eslint-disable-next-line react/prop-types
 const {label, inputName, placeholder, type} = props;   

  return (
    <div className='mb-4'>
        <Label htmlFor={inputName} >{label}</Label>
        <Input name={inputName} Type={type} placeholder={placeholder} />
        
    </div>
  )
}

export default InputForm