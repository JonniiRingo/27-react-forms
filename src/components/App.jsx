import React, {useState} from "react";

function App() {
  const[name, setName] = useState("");
  const[content, setContent] = useState("");

  function handleChange(event){
    setName(event.target.value);
  }

  function handleContent(event){
    setContent(name);
  }

  return (
    <div className="container">
      <h1>Hello {content}</h1>
      <input 
          onChange = {handleChange}
          type="text" 
          placeholder="What's your name?" 
          value = {name}
      />
          
      <button onClick = {handleContent}>Submit</button>
    </div>
  );
}

export default App;
