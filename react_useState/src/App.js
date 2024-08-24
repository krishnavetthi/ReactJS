import {useState} from 'react';

function Technolgies(){
  const[tech, setTech]=useState(["HTML","CSS","JS"]);
  const [name,setName] = useState(()=>"React");
  const AddTech = () => {
    setTech([...tech,name]);
    setName("");
  }
  return(
    <div>
      <ul>
        {tech.map((t)=>(
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input type="text" 
        value={name} 
        onChange={(e)=>setName(e.target.value)}>
      </input>
      <button onClick={AddTech}>
        Add value
      </button>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);

  function plusone(){
    if(count<10)
      setCount(count+1);
  }

  return(
    <div>
      <button onClick={plusone} >Counter : {count}</button>

    </div>
  );
}

function App() {
  return (
    <>
      <h1>Hello Krishna</h1>
      <Counter/>
      <Technolgies/>
    </>
  );
}

export default App;

