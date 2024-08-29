import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar"
import {useState,createContext} from "react";
import UserCard from "./Components/UserCard";

export const myContext = createContext();

function App() {
  const [name,setName] = useState("");
  const [color,setColor] = useState("");
  
  const myname = (event)=>{
    setName(event.target.value);
  }

  const mycolor = (event)=>{
    setColor(event.target.value);
  }

  return (
    <myContext.Provider value={{name,color}}>
    <NavBar/>
    <form>
      <input 
      type={"text"} 
      placeholder="Enter User Name" 
      value={name} 
      onChange={myname}/>
      <input type={"text"} 
      placeholder="Enter color name"
      value={color}
      onChange={mycolor} />
    </form>
    <HeroSection/>
    <UserCard/>
    </myContext.Provider>
  );
}

export default App;
