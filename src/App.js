// import "./App.css";
// import { useState, useEffect } from "react";
// export default function App() {
//   let time = new Date();
//   const [timer, setTimer] = useState({
//     H: time.getHours(),
//     M: time.getMinutes(),
//     S: time.getSeconds()
//   });
//   const [userInput, setUserInput] = useState({
//     H: "",
//     M: "",
//     S: ""
//   });

//   const [snooze,setSnooze] = useState(false)

  

  
//   useEffect(() => {
//     setInterval(() => {
//       let time = new Date();
//       setTimer({
//         H: time.getHours(),
//         M: time.getMinutes(),
//         S: time.getSeconds()
//       });
//     }, 1000);
//   }, []);

//   useEffect(()=>{
//     let alarms=JSON.parse(localStorage.getItem('alarms'))
//     if(alarms){
//       alarms.forEach((e)=>{
//         if(e.H==timer.H && e.M==timer.M && e.S==timer.S){
//           setSnooze(true)
//           console.log(timer,e);
        
       
//         }
//       })
//     }
//   },[timer])

// const handleSnooze=()=>{
//   let preAlarms=JSON.parse(localStorage.getItem('alarms'))
//   if(preAlarms){
//     const snoozeAlarm= {...timer,S:timer.S+10}
//   localStorage.setItem('alarms',JSON.stringify([...preAlarms,snoozeAlarm]))

//   setSnooze(false)
//   }

// }
  

//   const handlechange = (e) => {
//     const { value, name } = e.target;
  

//     setUserInput({
//       ...userInput,
//       [name]: value
//     });
//   };

//   const handleSubmit=()=>{
//     let preAlarms= JSON.parse(localStorage.getItem('alarms'))
//     if(preAlarms){
//       console.log(preAlarms);
//       localStorage.setItem('alarms',JSON.stringify([...preAlarms,userInput]))
//     }
//     else{
//       localStorage.setItem('alarms',JSON.stringify([userInput]))
//     }

   
//   }

//   return (
//     <div className="App">
//       <div>
//         <input
//           type="number"
//           name="H"
//           onChange={handlechange}
//           placeholder="Enter Hour"
//         ></input>
//         <input
//           name="M"
//           onChange={handlechange}
//           type="number"
//           placeholder="Enter Minutes"
//         ></input>
//         <input
//           name="S"
//           onChange={handlechange}
//           type="number"
//           placeholder="Enter Seconds"
//         ></input>
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//       <div>
//         <span>{timer.H >= 10 ? `${timer.H} :` : `0 ${timer.H} :`}</span>
//         <span>{timer.M >= 10 ? `${timer.M} :` : `0 ${timer.M} :`}</span>
//         <span>{timer.S >= 10 ? `${timer.S} ` : `0 ${timer.S}`}</span>
//       </div>

//       <div>
//         {
//           snooze? <>
//           <button onClick={handleSnooze} >Snooze</button>
//           <button onClick={()=>{
//             setSnooze(false)
//           }}> Cancle</button></>:null
//         }
//       </div>
//     </div>
//   );
// }   
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <DragDrop />
      </div>
    </DndProvider>
  );
}

export default App;