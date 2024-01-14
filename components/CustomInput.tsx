
const CustomInput = (props) => {
  const { type, label, i_id, className, name, value, onChange, onBlur } = props;
  return (
    <div className="border border-gray-600 rounded-lg">
      <input
        type={type}
        className={`form-control ${className} rounded-lg w-full`}
        id={i_id}
        placeholder={label}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default CustomInput;
