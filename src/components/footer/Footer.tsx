import "./Footer.css";
import '../../styles/animations.css';
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll';
import bannerImg from '../../assets/banner.png';

function Footer() {
  const ref = useAnimateOnScroll({ once: true });
  return (
    <footer ref={ref as never} className="footer">
      <img src={bannerImg} alt="" className="fade-up" />
      <p className="fade-in">© 2026 DOT Digital Group. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
