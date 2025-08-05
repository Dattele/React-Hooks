import React, { useEffect, useRef } from "react";

import CloseIcon from "../../assets/images/icon_close.svg";

import "./Slide.css";

const Slide = ({ hook, onClose }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    // Clean up function
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div
      className="Slide-Wrapper"
      ref={wrapperRef}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="Slide">
        <h2>{hook.name}</h2>
        <p>{hook.description}</p>

        <div className="Slide-Syntax">
          <h4>Syntax:</h4>
          <pre>
            <code>{hook.syntax}</code>
          </pre>
        </div>

        {hook.parameters && (
          <>
            <h4>Parameters:</h4>
            <ul>
              {hook.parameters.map((param, i) => (
                <li key={i}>
                  <strong>{param.name}</strong> ({param.type}):{" "}
                  {param.description}
                </li>
              ))}
            </ul>
          </>
        )}

        {hook.returns && (
          <>
            <h4>Returns:</h4>
            <ul>
              {hook.returns.map((ret, i) => (
                <li key={i}>
                  <strong>{ret.name}</strong> ({ret.type}): {ret.description}
                </li>
              ))}
            </ul>
          </>
        )}

        {hook.useCases && (
          <>
            <h4>Use Cases:</h4>
            <ul>
              {hook.useCases.map((useCase, i) => (
                <li key={i}>{useCase}</li>
              ))}
            </ul>
          </>
        )}

        <div className="Slide-Example">
          <h4>Example Code:</h4>
          <pre>
            <code>{hook.exampleCode}</code>
          </pre>
        </div>

        <p>{hook.explanation}</p>
        <CloseIcon onClick={onClose} />
      </div>
    </div>
  );
};

export default Slide;
