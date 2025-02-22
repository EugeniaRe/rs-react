import s from './Footer.module.css';
function Footer() {
  const year = new Date().getFullYear();
  return <div className={s.footer}>{year}</div>;
}

export default Footer;
