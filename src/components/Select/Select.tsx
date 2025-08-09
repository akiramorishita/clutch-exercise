import { useEffect, useRef, useState } from 'react';
import './Select.css';
import SelectList from './SelectList';
import classNames from 'classnames';
import ChevronRight from '../../assets/ChevronRight.svg'; // Assuming you have a chevron icon

type Option = { value: string; label: string };

type Props = {
  id: string;
  label: string;
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const Select = ({
  id,
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option'
}: Props) => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const selectedOptionLabel = options.find((option) => option.value === value)?.label;

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!selectRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (open && e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
      return;
    }
  };

  const select = (value: string) => {
    onChange(value);
    setOpen(false);
  };

  return (
    <div className="clutch-select__select" ref={selectRef}>
      <button
        id={id}
        type="button"
        className="clutch-select__control"
        onClick={() => setOpen(!open)}
        onKeyDown={onKeyDown}
      >
        <span
          className={classNames('clutch-select__value', {
            'clutch-select__value--hidden': !selectedOptionLabel
          })}
        >
          {selectedOptionLabel || placeholder}
        </span>

        <img
          className={classNames('clutch-select__chevron', { 'clutch-select__chevron--open': open })}
          src={ChevronRight}
          alt=""
        />
      </button>

      <label
        id={`${id}-label`}
        htmlFor={id}
        className={classNames('clutch-select__label', {
          'clutch-select__label--minimized': open || value
        })}
      >
        {label}
      </label>

      <SelectList
        open={open}
        options={options}
        value={value}
        placeholder={placeholder}
        onChange={select}
      />
    </div>
  );
};

export default Select;
