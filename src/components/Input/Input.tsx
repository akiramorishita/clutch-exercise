import classNames from 'classnames';
import './Input.css';
const Input = ({
  placeholder = 'Placeholder',
  id,
  value,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="clutch-input__container">
      <input id={id} type="text" placeholder="" className="clutch-input__input" {...props} />
      <label
        htmlFor={id}
        className={classNames('clutch-input__label', {
          'clutch-input__label--minimized': value
        })}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
