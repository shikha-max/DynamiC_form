import React from "react";
import { useDrag } from "react-dnd";
import styled from "styled-components"
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


const Head1=styled.h1`
font-size:20px;
margin:2px;
display:block;
width:100%;

`

export default H1;
