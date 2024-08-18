

function Button(props) {
    // buat default value
      // eslint-disable-next-line react/prop-types
      const{children = "...", variant = "black"} = props;
    
    return(
     
    <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type="submit">
        {children}
    </button>)
    }


export default Button;