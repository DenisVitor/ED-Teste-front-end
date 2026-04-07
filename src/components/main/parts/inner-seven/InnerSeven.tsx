import { useState } from "react";
import "./inner-seven.css";
import scriptImg from '../../../../assets/script.png';

export default function InnerSeven() {
  const [answer, setAnswer] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const buttonsDisabled = showPopup || !answer.trim();

  return (
    <div className="main-inner-seven">
      <div className="main-inner-seven-title">
        <img src={scriptImg} alt="" />
        <div>
          <h1>Atividade Discursiva</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
      <textarea
        placeholder="Digite sua resposta aqui..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <div className="main-inner-seven-buttons">
        <button
          onClick={() => {
            if (buttonsDisabled) return;
            setShowPopup(true);
            setAnswer("");
          }}
          disabled={buttonsDisabled}
          className={buttonsDisabled ? "disabled" : ""}
        >
          Responder
        </button>
        <button
          onClick={() => {
            if (buttonsDisabled) return;
            setAnswer("");
          }}
          disabled={buttonsDisabled}
          className={buttonsDisabled ? "disabled" : ""}
        >
          Alterar
        </button>
      </div>

      <div
        style={showPopup ? { display: "flex" } : { display: "none" }}
        className="main-inner-seven-popup"
      >
        <div>
          <div className="main-inner-seven-popup-title">
            <h2>É isso aí!</h2>
            <p onClick={() => setShowPopup(false)}>X</p>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            commodi odio maiores accusamus aspernatur consequatur ipsam
            dignissimos magnam hic, velit est perferendis explicabo aperiam
            ratione veritatis labore.
          </p>
        </div>
      </div>
    </div>
  );
}
