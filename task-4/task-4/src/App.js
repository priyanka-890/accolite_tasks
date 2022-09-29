import './App.css';
import React from 'react';

import  useIsMount  from './custtomHooks/useIsMount';


function App() {
  const [count,setCount] = React.useState(1)
  
  
  
  useIsMount(()=>{
    console.log("function executes")
    console.log(`rendered ${count} times`)
  },[count])
  

   const handleClick=()=>{
    setCount(count+1)
    
   }
  return (<div className='App'>
      <h1 className='heading'>custom hooks</h1>
     <div className="countLabel" >count:<span className='count' data-testid="count">{count}</span></div>
     <button className='btn' onClick={handleClick} data-testid="btn" >Render</button>
     </div>);
}
export default App;


