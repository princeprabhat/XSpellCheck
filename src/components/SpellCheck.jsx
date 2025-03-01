import React, { useEffect, useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const SpellCheck = () => {
  const [text, setText] = useState("");
  const [suggestedWord, setSuggestedWord] = useState("");

  function checkWords(items) {
    let ans = "";
    const itemArr = items.split(" ");

    for (let i = 0; i < itemArr.length; i++) {
      if (customDictionary[itemArr[i].toLowerCase()]) {
        ans = customDictionary[itemArr[i].toLowerCase()];
        break;
      }
    }

    return ans;
  }

  useEffect(() => {
    if (!text) {
      setSuggestedWord("");
      return;
    }

    setSuggestedWord(checkWords(text));
  }, [text]);

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>

      <textarea
        name="spell"
        id="spell"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text.length && suggestedWord.length ? (
        <p>
          Did you mean: <b>{suggestedWord}</b>?
        </p>
      ) : null}
    </div>
  );
};

export default SpellCheck;
