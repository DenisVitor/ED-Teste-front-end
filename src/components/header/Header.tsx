import './Header.css';
import '../../styles/animations.css';
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll';
import barImg from '../../assets/bar.png';
import panelImg from '../../assets/panel.png';

function Header() {
  const ref = useAnimateOnScroll({ once: true });
  return (
    <>
      <header ref={ref as any} className="header">
        <img src={barImg} alt="" className='image-bar' />
        <div className="header-inner-one">
          <h1 className="fade-up">
            Lorem ipsum dolor, sit <span>amet</span>
          </h1>
          <p className="fade-in">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <button>
            Lorem Ipsum
            <svg
              width="13"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"

            >
              <path
                d="M10.1458 7.5H0V5.83333H10.1458L5.47917 1.16667L6.66667 0L13.3333 6.66667L6.66667 13.3333L5.47917 12.1667L10.1458 7.5Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="header-inner-two">
          <img src={panelImg} alt="panel" className="zoom-in" />
        </div>
      </header>
    </>
  );
}

export default Header;