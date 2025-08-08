import './Input.css';
const ClutchInput = ({
  placeholder = 'Placeholder',
  id,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="clutch-input__container">
      <input id={id} type="text" placeholder="" className="clutch-input__input" {...props} />
      <label htmlFor={id} className="clutch-input__label">
        {placeholder}
      </label>
    </div>
  );
};

export default ClutchInput;
