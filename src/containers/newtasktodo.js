import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: hsl(201, 80%, 23%);
  color: white;
  width: 80px;
  height: 32px;
  font-size: 1.7em;
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const TextInput = styled.input`
padding: 5px;
font-size: .7em;
background: hsl(201, 80%, 23%);
color: white;
width: 100%;
margin-right: 7px
border: 0px;
-webkit-apperance: none;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border 2px solid #343744;
  background: hsl(201, 80%, 23%);
  border-radius: 10px;
  padding: 5px;
`;

const NewToDoTask = ({ onChange, onSubmit, newTask }) => (
  <Container>
    <TextInput
      type="text"
      onChange={onChange}
      placeholder="Write your new task"
      value={newTask}
    />
    <Button onClick={onSubmit}>+</Button>
  </Container>
);

export default NewToDoTask;
