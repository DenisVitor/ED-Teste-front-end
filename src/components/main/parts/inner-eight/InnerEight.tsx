import { useState } from "react";
import "./inner-eight.css";
import questionImg from '../../../../assets/question.png';

export default function InnerEight() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [eightButtonsDisabled, setEightButtonsDisabled] = useState(true);
  const [showPopupAlert, setShowPopupAlert] = useState(false);

  return (
    <div className="main-inner-eight">
      <div className="main-inner-eight-title">
        <img src={questionImg} alt="" />
        <div>
          <h2>Atividade Objetiva</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
        </div>
      </div>
      <ul>
        {[0, 1, 2, 3].map((i) => (
          <li
            key={i}
            className={selectedOption === i ? "selected" : ""}
            onClick={() => {
              setSelectedOption(i);
              setEightButtonsDisabled(false);
            }}
          >
            <div className="checkbox-custom">
              {selectedOption === i ? (
                <svg
                  width="11"
                  height="9"
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.8 8.01667L0 4.21667L0.95 3.26667L3.8 6.11667L9.91667 0L10.8667 0.95L3.8 8.01667Z"
                    fill="#0C0A08"
                  />
                </svg>
              ) : null}
            </div>
            <span>
              {["A)", "B)", "C)", "D)"][i]} Lorem Ipsum is simply dummy text of
              the printing and typesetting industry.
            </span>
          </li>
        ))}
      </ul>

      <div className="main-inner-eight-buttons">
        <button
          onClick={() => {
            const disabled =
              showPopupAlert || selectedOption === null || eightButtonsDisabled;
            if (disabled) return;
            setSelectedOption(4);
            setShowPopupAlert(true);
            setEightButtonsDisabled(true);
          }}
          disabled={
            showPopupAlert || selectedOption === null || eightButtonsDisabled
          }
          className={
            showPopupAlert || selectedOption === null || eightButtonsDisabled
              ? "disabled"
              : ""
          }
        >
          Responder
        </button>

        <button
          onClick={() => {
            const disabled =
              showPopupAlert || selectedOption === null || eightButtonsDisabled;
            if (disabled) return;
            setSelectedOption(null);
            setEightButtonsDisabled(true);
          }}
          disabled={
            showPopupAlert || selectedOption === null || eightButtonsDisabled
          }
          className={
            showPopupAlert || selectedOption === null || eightButtonsDisabled
              ? "disabled"
              : ""
          }
        >
          Alterar
        </button>
      </div>

      <div
        style={showPopupAlert ? { display: "flex" } : { display: "none" }}
        className="main-inner-eight-popup"
      >
        <div>
          <div className="main-inner-eight-popup-title">
            <h2>Tente novamente!</h2>
            <p
              onClick={() => {
                setShowPopupAlert(false);
                if (selectedOption === null) setEightButtonsDisabled(true);
              }}
            >
              x
            </p>
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
