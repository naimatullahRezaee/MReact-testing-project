import { useState } from "react";
import "./Calculator.css";
import { evaluate } from "mathjs";

function Calculator() {
  let [result, setResult] = useState("");
  let [hasDot, setHasDot] = useState(false);
  const checkInput = (text) => {
    if (text === "÷") return "/";
    if (text === "×") return "*";
    return text;
  };
  const clikcHandler = (e) => {
    let input = checkInput(e.target.innerText);
    if (input === ".") {
      if (hasDot == true) return;
      else setHasDot(true);
    }
    if (input === "+" || input === "-" || input === "÷" || input === "×") {
      setHasDot(false);
    }
    setResult(result + input);
  };
  const clearBtn = () => {
    setResult("");
    setHasDot(false);
  };
  const deleteBtn = () => {
    if (result.endsWith(".")) setHasDot(false);
    setResult(result.slice(0, -1));
  };
  const eqaulBtn = () => {
    setResult(String(evaluate(result)));
    setHasDot(false);
  };
  return (
    <>
      <div className="container">
        <div className="screen">{result}</div>
        <div className="buttons">
          <button onClick={clearBtn} className="clear color">
            Clear
          </button>
          <button onClick={deleteBtn} className="color">
            C
          </button>
          <button onClick={clikcHandler} className="color">
            &divide;{" "}
          </button>
          <button onClick={clikcHandler}>7</button>
          <button onClick={clikcHandler}>8</button>
          <button onClick={clikcHandler}>9</button>
          <button onClick={clikcHandler} className="color">
            &times;
          </button>
          <button onClick={clikcHandler}>4</button>
          <button onClick={clikcHandler}>5</button>
          <button onClick={clikcHandler}>6</button>
          <button onClick={clikcHandler} className="color">
            -
          </button>
          <button onClick={clikcHandler}>1</button>
          <button onClick={clikcHandler}>2</button>
          <button onClick={clikcHandler}>3</button>
          <button onClick={clikcHandler} className="color">
            +
          </button>
          <button onClick={clikcHandler}>0</button>
          <button onClick={clikcHandler}>.</button>
          <button className="equal color" onClick={eqaulBtn}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
