import React, { useState,useCallback } from "react";
import {Inputs,Label,H1,SelectBox,Button,DIv} from "./DragAble";
import { useDrop } from "react-dnd";
import "../App.css";
import {v4 as uuid} from 'uuid'
import styled from "styled-components";

const inputs = [
  {
    id: 1,
    name: "input",
    type: "text",
  },
  { id: 2, name: "input", type: "checkbox" },
  { id: 3, name: "label" },
  { id: 4, name: "heading1" },
  { id: 5, name: "select" },
  { id: 6, name: "button" },
  { id:7,name:"div"}
];

function DragDrop() {
  const [form, setform] = useState([]);
  const [final,setFinal]= useState(false)
  // const [name,setName]=useState('')
  // const [showFeild,setShowfeild]= useState(false)
  // const [heading,setHeading]=useState('')

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addInputsToForm(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addInputsToForm = useCallback((id) => {
    const input = inputs.filter((picture) => id === picture.id);
    let res={...input[0],id2:uuid()}
   console.log(res);
  // // console.log(form);
  // //   if(f[f.length-1].name==='label' && input[0].type=='text'){
  // //     return alert('ajkjk')
  // //   }
  // //   else if(f[f.length-1].name===input[0].name){
  // //     return alert('jj')
  // //   }
    setform((form) => [...form, res]);
  },[form])
  return (
    <>
      <div className="Inputs">
        {inputs.map((el) => {
          if (el.name === "input") {
            return <div className='border' key={el.id}><Inputs id={el.id} type={el.type}></Inputs></div>
          } else if (el.name === "label") {
            return <div className='border' key={el.id}><Label id={el.id}></Label></div>
          } else if (el.name === "heading1") {
            return <div className='border' key={el.id}><H1 id={el.id}></H1></div>
          }
          else if (el.name==='select'){
            return <div key={el.id} className='border'>
              <SelectBox id={el.id}/>
            </div>
          }
          else if (el.name==='button'){
            return <div key={el.id} className='border'>
              <Button id={el.id}>{el.name}</Button>
            </div>
          }
          
        })}
      </div>
      
     <div>
     {
        final?<>
        <Form >
       
       {form?.map((el) => {
         if (el.type === "text") {
           return <div id={el.id2} className='inputDiv'><input  type={el.type}></input></div>;
         } else if (el.name === "label") {
           return <label className='label' id={el.id2}>{el.name}</label>;
         } else if (el.name === "heading1") {
           return <h1 className='block' id={el.id2}>{el.name}</h1>;
         }
         else if(el.type==='checkbox'){
           return <div><input className='checkbox' key={el.id2} type={el.type} ></input></div>
         }
         else if (el.name==='button'){
           return < >
             <button className='button' key={el.id2}>{el.name}</button>
           </>
         }
         else if (el.name==='select'){
          return <div key={el.id} className='border'>
           <select>
             <option>values</option>
           </select>
          </div>
        }
       })}
     </Form>

        </>:<Form ref={drop}>
       
       {form?.map((el) => {
         if (el.type === "text") {
           return <div id={el.id} className='inputDiv'><input  type={el.type}></input></div>;
         } else if (el.name === "label") {
           return <label className='label' id={el.id}>Label</label>;
         } else if (el.name === "heading1") {
           return <h1 className='block' id={el.id}>{el.name}</h1>;
         }
         else if(el.type==='checkbox'){
           return <div><input className='checkbox' key={el.id} type={el.type} ></input></div>
         }
         else if (el.name==='button'){
           return < >
             <button onClick={(e)=>{
               e.preventDefault()
             }} className='button'>{el.name}</button>
           </>
         }
         else if (el.name==='div'){
          return <DIv id={el.id}></DIv>
        }
        else if (el.name==='select'){
          return <div key={el.id} className='border block'>
           <select  className='block select'>
             <option>values</option>
           </select>
          </div>
        }
       })}

       
     </Form>

      }

<div style={{display:'flex',justifyContent:"center",alignItems:'center',width:'100%'}}>
<button  style={{width:'50%',padding:"10px 15px"}} onClick={()=>{
         setFinal(true)
       }}>Submit</button>
</div>
     </div>
    </>
  );
}

const Form = styled.form`
  width: 400px;
  border: 1px solid rgb(201, 197, 197);
  margin: 100px auto;
  padding: 70px;
  display:flex;
  border-radius:10px;
  background:rgb(229, 241, 237);
  
  flex-wrap:wrap;
  .block{
    width:500px;
  }

.inputDiv{
  width:360px;
}
& div{
  input{
    border:1px solid rgb(216, 210, 210);
    border-radius:5px;
    padding:8px;
    width:80%;
    margin:4px;
  }

  
}

.select{
  width:40%;
}
& h1{
  text-align:center;
  
}
.checkbox{
  width:50px;
  padding:50px;
  background:red;
  
}

.button{
  padding:10px 10px;
  border:none;
  background:#F5F5F5;
  color:black;
  width:60%;
  margin:30px auto;
  font-size:20px;
  font-weight:600;
  font-size:16px;

}
.label{
  width:80%;
  font-weight:600;
  font-size:20px;
}
  
`;

export default DragDrop;
