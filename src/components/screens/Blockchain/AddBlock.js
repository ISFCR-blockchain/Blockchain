import React, { useState } from "react";
import styled from "styled-components";
import '../../styles/blocks.css'


export default function AddBlock({ addBlock }) {
  const [value, setValue] = useState("");

  const handleDataChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddBlock = (e) => {
    e.preventDefault();
    addBlock(value);
  };

  return (
    <>
    <TodoSection>
    <Form>
      <fieldset className="addblock-form">
        <legend>Data</legend>
        <div class="form-group">
          <textarea 
            class="form-control" 
            type='textarea'
              name='data'
              id='data' 
              rows="3"
              col="15"
              placeholder='Data'
              value={value}
              onChange={handleDataChange}
              ></textarea>
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleAddBlock}>Add Block</button>
      </fieldset>
    </Form>
  </TodoSection>
  </>

  )
}

const TodoSection = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  max-width: 500px;
  margin: auto;
  min-width: 25%;

`;
const Form = styled.form`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #bbb;
  left: 50px;
  fieldset {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    max-width: 500px;
    margin: auto;
  }

  label {
    display: flex;
    justify-content: space-between;
  }

  button {
    width: 100px;
    align-self: flex-end;
  }
`;
