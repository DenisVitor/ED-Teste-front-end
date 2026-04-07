import { useState } from "react";
import "./inner-nine.css";

export default function InnerNine() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  return (
    <div className="main-inner-nine">
      <div className="main-inner-nine-title">
        <h1>Perguntas Frequentes</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <ul className="main-inner-nine-list">
        {[0, 1, 2, 3].map((i) => (
          <li
            key={i}
            className={
              selectedQuestion === i
                ? "main-inner-nine-item selected-question"
                : "main-inner-nine-item"
            }
            onClick={() =>
              setSelectedQuestion((prev) => (prev === i ? null : i))
            }
          >
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              {selectedQuestion === i ? (
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 -9.77516e-05L12 5.9999L10.6 7.3999L6 2.7999L1.4 7.3999L0 5.9999L6 -9.77516e-05Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z"
                    fill="#76B900"
                  />
                </svg>
              )}
            </div>
            {selectedQuestion === i ? (
              <p className="main-inner-nine-answer">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
