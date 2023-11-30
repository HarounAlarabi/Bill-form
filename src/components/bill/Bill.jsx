import { useState } from "react";
import Navbar from "../NavBar";
import "../../css/bill.css"

function Bill() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tips = bill * ((percentage1 + percentage2) / 200);

  function handleRest() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <>
      <Navbar />
      <div  className="bill-container">
        <BillInput bill={bill} onSetBill={setBill} />
        <Percentage percentage={percentage1} onSelect={setPercentage1}>
          How did you like the service
        </Percentage>
        <Percentage percentage={percentage2} onSelect={setPercentage2}>
          How did your friend like the service
        </Percentage>
        {bill > 0 && <OutPut bill={bill} tips={tips} />}
        <Rest restValues={handleRest} />
      </div>
    </>
  );
}

export default Bill;

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <p>How mach was the bill</p>
      <input type="text" value={bill} onChange={(e) => onSetBill(Number(e.target.value))}></input>
    </div>
  );
}
function Percentage({ percentage, children, onSelect }) {
  return (
    <div className="">
      <label>{children}</label>
      <select value={percentage} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">it was okay (5%)</option>
        <option value="10">Good (10%)</option>
        <option value="15">Great (15%)</option>
      </select>
    </div>
  );
}

function OutPut({ bill, tips }) {
  return (
    <h3>
      You Have to Pay ${bill + tips} (${bill}+${tips} tip)
    </h3>
  );
}

function Rest({ restValues }) {
  return <button onClick={restValues}>Rest</button>;
}
