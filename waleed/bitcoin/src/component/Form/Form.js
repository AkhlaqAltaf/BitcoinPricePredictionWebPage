import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./Form.css";

function Form() {
  const [low, setlow] = useState("");
  const [open, setopen] = useState("");
  const [bitcoin, setbitcoin] = useState("");
  const [volume, setvolume] = useState("");
  const [outcome, setoutcome] = useState("");

  return (
    <div class="form-container">
        <div>
            <h1>Bitcoin Prediction Calculator</h1>
        <form>
        <div>
          <label>
            Enter your Low Value :
            <input
            id="formbox"
              type="Number"
              value={low}
              onChange={(e) => setlow(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Enter your Open Value :
            <input
             id="formbox"
              type="Number"
              value={open}
              onChange={(e) => setopen(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Enter your Bitcoin Value :
            <input
             id="formbox"
              type="Number"
              value={bitcoin}
              onChange={(e) => setbitcoin(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Enter your Volume Value :
            <input
             id="formbox"
              type="Number"
              value={volume}
              onChange={(e) => setvolume(e.target.value)}
            />
          </label>
          <label>
            Predicted Outcome :
            <input
             id="formbox"
              type="Number"
              value={outcome}
              onChange={(e) => setoutcome(e.target.value)}
            />
          </label>
          <button type="submit" form="form1" value="Submit">Submit</button>
        </div>
      </form>



        </div>
      
    </div>
  );
}
export default Form;
