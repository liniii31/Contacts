import './App.css';
import JSONDATA from './user.json';
import {useState} from 'react';

function App() {
  let [data,setdata]= useState(JSONDATA.users);
  
  function click(index){
    let newdata = [...data];
    newdata[index].isage = !newdata[index].isage;
    setdata(newdata);
  }

  return (
    <div className="App">
      {JSONDATA.users.map((value,index) =>
        <div  className="contact">
          <div className="dp">
            <img alt="dp" src={value.image.toString()}/>
          </div>
          <div className="details">
            <div className="detail">Name : {value.name}</div>
            <div className="detail">Email : {value.email}</div>
            {value.isage?(<div id="age" className="detail">Age : {value.age}</div>)
            :(<br/>)}
            <button onClick={()=>click(index)}>Toggle Age</button>
          </div>
        </div>
      )};
    </div>
  );
}

export default App;
