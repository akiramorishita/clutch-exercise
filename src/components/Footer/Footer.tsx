import './Footer.css';

type Props = React.HTMLAttributes<HTMLElement>;

function Footer({ children, ...rest }: Props) {
  return (
    <footer className="clutch-footer" {...rest}>
      <div className="clutch-footer__content">{children}</div>
    </footer>
  );
}

export default Footer;
