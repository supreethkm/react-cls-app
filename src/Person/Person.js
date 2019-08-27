import React from "react";

const person = (props)=>{
  return <div><h1>This is {props.name}, of age {props.age} years </h1>{props.children}</div>
}

export default person;
