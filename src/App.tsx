import { useReducer } from "react"
import Calculator from "./components/Calculator"
import CalculatorDisplay from "./components/CalculatorDisplay"
import CalculatorKeypad from "./components/CalculatorKeypad"
import CalculatorOperations from "./components/CalculatorOperations"
import { buttons, ButtonType } from "./data/buttons"


function isNumeric(value: any) {
  return value.length > 0 && !isNaN(value);
}

function firstOfStr(str: string): string {
  return str.length > 0 ? str[0] : "";
}

function lastOfStr(str: string): string {
  return str.length > 0 ? str[str.length - 1] : "";
}

type reducerType = {
  operator: string,
  calcDisplay: string
}

const initialValue: reducerType = {
  operator: "",
  calcDisplay: "0"
}
const reducer = (state: reducerType, action: { type: string, payload: ButtonType }): reducerType => {
  if ((action.payload.type === "button" || action.payload.type === "enter")
    && (!isNumeric(firstOfStr(state.operator)) || !isNumeric(lastOfStr(state.operator))))
    return state;

  switch (action.type) {
    case "reset":
      return { ...state, operator: "", calcDisplay: "0" }

    case "clear":
      const newOperator = state.operator.substring(0, state.operator.length - 1);
      return { ...state, operator: newOperator }

    case "enter":
      return { ...state, calcDisplay: eval(state.operator) }

    default:
      return { ...state, operator: state.operator += action.payload.text };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue)
  return (
    <div className="w-screen h-screen bg-[#DAF0FF] flex items-center justify-center -z-10 bg-rab">
      <Calculator>
        <CalculatorOperations value={state.operator} />
        <CalculatorDisplay className="mb-[78px]" value={state.calcDisplay} />
        <CalculatorKeypad buttons={buttons} onClick={dispatch} />
      </Calculator>
    </div >
  )
}

export default App
