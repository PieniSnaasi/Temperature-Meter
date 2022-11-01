import React from 'react';
import { useState } from 'react';

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold")


  const increaseTemperature =() => {
    const newTemp = temperatureValue +1

    if(newTemp >= 15){
      setTemperatureColor('hot')
    } if (newTemp >= 25){
      setTemperatureColor('superhot')
    } if(newTemp >= 40){
      alert ("TOO HOT!!!")
    }
    setTemperatureValue(newTemp)
  
  }

  const decreaseTemperature =() => {
    const lowTemp = temperatureValue -1

    if(lowTemp <= 24) {
      setTemperatureColor('hot')
    } if (lowTemp <= 14) {
      setTemperatureColor('cold')
    } 

    setTemperatureValue(lowTemp)
  }
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className="button-container">
      <button onClick={decreaseTemperature}>-</button>
        <button onClick={increaseTemperature}>+</button>
        
      </div>
    </div>
  )
}

export default App;

