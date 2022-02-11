import React from "react";
import { useDrag } from "react-dnd";

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



export default Label
