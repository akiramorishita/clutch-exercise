type Props = {
  option: Record<string, string>;
  isSelected: boolean;
  onChange?: (value: string) => void;
};
const SelectOption = ({ option, isSelected, onChange }: Props) => (
  <li
    key={option.value}
    role="option"
    aria-selected={isSelected}
    className={`clutch-select__option clutch-select__option--standard`}
    onClick={() => onChange?.(option.value)}
  >
    {option.label}
  </li>
);

export default SelectOption;
