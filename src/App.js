import React, { useState } from "react";
import "./styles.css";




export default function App() {

  const [meaning, setMeaning] = useState('');
  
  var myName = "Mukul";
  var color = "blue";
  var emojiDictonary = 
  {
    "🇮🇳":"INDIA",
    "🇦🇩": "Andorra",
    "🇧🇹": "Bhutan",
    "🇨🇳": "China",
    
  };
  var finalemojiDictonary = Object.keys(emojiDictonary);


//functions

  function emojiclickHandler(item)
  {

  
  var meaning = emojiDictonary[item];

  
  setMeaning(meaning)
  }

  function inputeventHandler(event) 

  {


    var lastvalueHandler = event.target.value;
    
     var meaning = emojiDictonary[lastvalueHandler];

     if(meaning === undefined)
  {
   meaning ="We don't have this emoji in our Database . "
  }


    setMeaning(meaning);
 }

 
  
  
return (
    <div className="App">
      
      <h1>
        Welcome <span style={{ color: color }}>{myName}</span>
      </h1>
      <div>
       
      <input onChange={inputeventHandler}></input>

     </div>
      <h2>{meaning}</h2>
    
      <div>
       
      {finalemojiDictonary.map(item=>
          
        <div> <h2 onClick={()=>emojiclickHandler(item)} > {item}</h2> </div>
        )}

      </div>
    </div>
  );
}
