import React from "react";
import { useDrag } from "react-dnd";
// import Split from 'react-split'
import styled from'styled-components'
function Inputs({ id, type }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
  
      <input
    type={type}
      ref={drag}
      style={{ border: isDragging ? "5px solid pink" : "1px solid gray"}}
    />
  
  );
}

function H1({ id, name }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <Head1 ref={drag} style={{ cursor: "pointer" }}>
      {name ? name : "Heading1"}
    </Head1>
  );
}

function Label({ id ,name}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <label
    
      ref={drag}
      style={{cursor:'pointer'}}
    >{name?name:'Label'}</label>
  );
}



function SelectBox({id,name}){
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return < >
  
   <div ref={drag} style={{width:'70px'}}>
   <select ref={drag} style={{cursor:'pointer',width:'100%'}} >
      <option  >Value</option>
     
    </select>
   </div>
     </>
}

function DIv({id,name}){
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return < >
  
    <div style={{width:'40px',height:"40px",border:'1px solid gray'}} ref={drag}>
      <input></input>
    </div>
     </>
}


function Button({id,name}){
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return <>
  
  <button style={{cursor:'pointer'}} ref={drag}>button</button>
  </>
}

const Head1=styled.h1`
font-size:20px;
margin:2px;
display:block;
width:100%;

`

export  {
  Inputs,
  Label,
  H1,
  SelectBox,Button,
  DIv
};
