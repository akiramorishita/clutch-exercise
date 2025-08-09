import 'react';
import './Button.css';

import classNames from 'classnames';
import { ButtonSize } from './ButtonSize';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
};

const Button = ({
  text,
  onClick,
  size = ButtonSize.LARGE,
  fullWidth = false,
  loading = false,
  className = '',
  ...rest
}: Props) => {
  return (
    <button
      className={classNames(
        'clutch-button',
        {
          'clutch-button--small': size == ButtonSize.SMALL,
          'clutch-button--large': size == ButtonSize.LARGE,
          'clutch-button--fullwidth': fullWidth
        },
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {loading ? (
        <span className="clutch-button__spinner" role="status" aria-label="loading" />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
