import { useState } from 'react'
import './App.css'
import { calculateBMI, getBMIMessage } from './logic.jsx'

function App() {
  const [weight, setweight] = useState();
  const [height, setHeight] = useState();
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState(' ');

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setweight(event.target.value);
  };

  const handleCalculate = () => {
    const bmi = calculateBMI(parseFloat(height), parseFloat(weight));
    setResult(bmi ? bmi.toFixed(2) : null);
    setMessage(getBMIMessage(bmi));
  };

  return (
    <div className='Parent'>
      <div className='Heading'>
        BMI CALCULATOR
        <div className='line'></div>
      </div>

      <div className='container'>
        <div className='d1'>
          <input type='number' className='input1'
            value={height}
            onChange={handleHeightChange}
            placeholder="Height ( in m ) " />

        </div>

        <div className='d2'>
          <input type='number' className='input2'
            value={weight}
            onChange={handleWeightChange}
            placeholder="Weight (in kg) " />

        </div>

        <button className='button' onClick={handleCalculate} >Calculate BMI </button>

        <div className='description'>
          <p className='description1'> Your BMI : </p>
          <div className='description10'>
            <div className='description101'>
              {result}
            </div>
            <div className='description102'>
              {message}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
