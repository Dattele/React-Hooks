import React from 'react';

import './Slide.css';

const Slide = ({ hook }) => {
  return (
    <div className='Slide-Wrapper'>
      <div className='Slide'>
        <h2>{hook.name}</h2>
        <p>{hook.description}</p>

        <div className='Slide-Syntax'>
          <h4>Syntax:</h4>
          <pre><code>{hook.syntax}</code></pre>
        </div>

        {hook.parameters && (
          <>
            <h4>Parameters:</h4>
            <ul>
              {hook.parameters.map((param, i) => (
                <li key={i}>
                  <strong>{param.name}</strong> ({param.type}): {param.description}
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

        <div className='Slide-Example'>
          <h4>Example Code:</h4>
          <pre><code>{hook.exampleCode}</code></pre>
        </div>

        <p>{hook.explanation}</p>
      </div>
    </div>
  );
}

export default Slide;
