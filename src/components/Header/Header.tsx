import 'react';
import './Header.css';
import LoremCreditUnion from '../../assets/LoremCreditUnion.svg';

const Header = () => {
  return (
    <header className="clutch-header">
      <img alt="Lorem Credit Union Logo" className="clutch-header__image" src={LoremCreditUnion} />
    </header>
  );
};

export default Header;
