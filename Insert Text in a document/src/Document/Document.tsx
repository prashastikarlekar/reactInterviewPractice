import React, { useState } from 'react';

export const Document = () => {
  const [text, setText] = useState('');
  const [doc, setDoc] = useState('');
  const [highlight, setHighlight] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('key down ');
      if (!highlight) {
        setHighlight(true);
        e.preventDefault();
        let newDoc = `<p class="highlight">${text}</p>`;
        setDoc(doc + newDoc);
        console.log(doc);
        handleHighlight();
        setText('');
      }
    }
  };

  const handleHighlight = () => {
    setTimeout(() => {
      setDoc((doc) => {
        let tempDoc = doc.replace(` class="highlight"`, '');
        setHighlight(false);
        return tempDoc;
      });
    }, 2000);
  };
  return (
    <div>
      <div>
        <textarea
          placeholder="Enter your text here..."
          value={text}
          onKeyDown={handleKeyDown}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <p>Document</p>

        {doc ? (
          <div
            className="doc-container"
            dangerouslySetInnerHTML={{ __html: doc }}
          ></div>
        ) : (
          <div className="doc-container">Added content will show here</div>
        )}
      </div>
    </div>
  );
};
