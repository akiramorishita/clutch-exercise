import './Footer.css';

type Props = React.HTMLAttributes<HTMLElement>;

const Footer = ({ children, ...rest }: Props) => {
  return (
    <footer className="clutch-footer" {...rest}>
      <div className="clutch-footer__content">{children}</div>
    </footer>
  );
};

export default Footer;
