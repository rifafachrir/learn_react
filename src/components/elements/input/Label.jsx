const Label = (props) => {
  const { htmlFor, children } = props;

  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-slade-700 text-sm font-bold mb-2"
      >
        {children}
      </label>
    </div>
  );
};

export default Label;
