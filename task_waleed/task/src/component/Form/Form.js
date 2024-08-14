import { useState } from "react";
import "./Form.css";

function Form() {
  const [Low, setLow] = useState("");
  const [Open, setOpen] = useState("");
  const [Bitcoin, setBitcoin] = useState("");
  const [Volume, setVolume] = useState("");

  return (
    <>
      <div class="form">
        <label>Enter your low value </label>
        <div class="form-text">
          <input value={Low} onChange={(e) => setLow(e.target.value)} />
        </div>
      </div>

      <div class="form">
        <label>Enter your Open value</label>
        <div class="form-text">
          <input
            value={Open}
            onChange={(e) => setOpen(e.target.value)}
            action="GET"
          />
        </div>
      </div>

      <div class="form">
        <label>Enter your Bitcoin value</label>
        <div class="form-text">
          <input value={Bitcoin} onChange={(e) => setBitcoin(e.target.value)} />
        </div>
      </div>

      <div class="form">
        <label>Enter your Volume value</label>
        <div class="form-text">
          <input value={Volume} onChange={(e) => setVolume(e.target.value)} />
        </div>
      </div>
      <div class="form-button">
      <label>Submit Me</label>
      <button onClick="">
     SUBMIT
    </button>
      </div>
    </>
  );
}
export default Form;
