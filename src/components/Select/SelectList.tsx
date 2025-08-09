import classNames from 'classnames';
import './Select.css';
import SelectOption from './SelectOption';
type SelectListProps = {
  open: boolean;
  options: Record<string, string>[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

const SelectList = ({ open, options, value, placeholder, onChange }: SelectListProps) => {
  return (
    <ul
      role="listbox"
      className={classNames('clutch-select__list', { 'clutch-select__list--open': open })}
    >
      <li
        role="option"
        className="clutch-select__option clutch-select__option--placeholder"
        aria-disabled
      >
        {placeholder}
      </li>
      {options.map((option) => (
        <SelectOption
          key={option.value}
          option={option}
          isSelected={option.value === value}
          onChange={onChange}
        />
      ))}
    </ul>
  );
};

export default SelectList;
