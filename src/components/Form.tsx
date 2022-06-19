import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "../styles/form.scss";

export const Form = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(0);

  const [text, setText] = useState("");

  const imcResults = [
    { weight: [0, 18.5], text: "abaixo do peso" },
    { weight: [18.6, 24.9], text: "no peso ideal" },
    { weight: [25, 29.9], text: "levemente acima do peso" },
    { weight: [30, 34.9], text: "com obesidade grau I" },
    { weight: [35, 39.9], text: "com obesidade grau II" },
    { weight: [40, 99], text: "com obesidade grau III" },
  ];

  useEffect(() => {
    for (let i in imcResults) {
      if (
        result > imcResults[i].weight[0] &&
        result <= imcResults[i].weight[1]
      ) {
        setText(imcResults[i].text);
      }
    }
  }, [result]);

  const reset = () => {
    setHeight("");
    setWeight("");
    setResult(0);
  };

  const handleClick = () => {
    let n1 = Number(height);
    setResult(Number(weight) / (n1 * n1));
  };

  return (
    <div className="form">
      <p className="title">Calculadora de IMC</p>
      <hr />
      <div className="form-items">
        <TextField
          type="number"
          value={height}
          name="height"
          onChange={(e) => setHeight(e.target.value)}
          className="input"
          variant="standard"
          label="Insira sua altura Ex: 1.5 (em métros)"
        />
        <TextField
          type="number"
          value={weight}
          name="weight"
          onChange={(e) => setWeight(e.target.value)}
          className="input"
          variant="standard"
          label="Insira seu peso Ex: 60 (em kg)"
        />
        <Button variant="contained" onClick={handleClick} className="button">
          Confirmar
        </Button>
        <Button variant="contained" onClick={reset} className="button">
          Reset
        </Button>
        <div className="form-result">
          {result > 0 && <p>IMC = {result.toFixed(2)}</p>}
          {result > 0 && <p>Você se encontra {text}</p>}
        </div>
      </div>
    </div>
  );
};
