import { useState } from 'react';
function App() {
let[Color, setColor]=useState("#ffffff");
function colorchangeer(event)
{
  setColor(event.target.value);
}
  return (
      <div className="color-change">
        <h1>Color Picker</h1>
        <h2 style={{color: Color}}>Selected Color is: {Color}</h2>
        <input type="color" value={Color} onChange={colorchangeer} id='inp'style={{backgroundColor: Color}}/>
      </div>
  )
}

export default App
