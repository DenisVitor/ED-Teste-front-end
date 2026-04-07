import "./Main.css";
import '../../styles/animations.css';
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll';
import InnerOne from "./parts/inner-one/InnerOne";
import InnerTwo from "./parts/inner-two/InnerTwo";
import InnerThree from "./parts/inner-three/InnerThree";
import InnerFour from "./parts/inner-four/InnerFour";
import InnerFive from "./parts/inner-five/InnerFive";
import InnerSix from "./parts/inner-six/InnerSix";
import InnerSeven from "./parts/inner-seven/InnerSeven";
import InnerEight from "./parts/inner-eight/InnerEight";
import InnerNine from "./parts/inner-nine/InnerNine";
 

function Main() {
  const ref = useAnimateOnScroll({ once: true });

  return (
    <main ref={ref as never} className="main">
      <InnerOne />
      <InnerTwo />
      <InnerThree />
      <InnerFour />
      <InnerFive />
      <InnerSix />
      <InnerSeven />
      <InnerEight />
      <InnerNine />
    </main>
  );
}

export default Main;
