import React from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import Form from "./components/FormData/Form";

function App() {
  const items = ["New York", "Sans Fransisco", "London", "United Kingdom"];
  
  
  const handleItem = (item: string) => {
    console.log(item);
  };
  
  return (
    <div className="App">
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleItem} />
      <Like /> */}
     <Form />
    </div>
  ); 
}

export default App;
