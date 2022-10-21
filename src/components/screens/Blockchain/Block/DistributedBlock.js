import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const SingleBlockCard = styled.div`
  position: relative;
  padding: 20px;
  margin: auto;
  width: 620px;
  border-radius: 10px;

  background-color: ${({ valid }) => (valid ? "#e6ffff" : "#ffdada")};
  fieldset {
    display: flex;
    flex-direction: column;
    border: none;
  }
  
  span {
    background-color: #eee;
    padding: 3px 3px;
    border-radius: 3px;
    border: none;
    font-size: 0.85rem;
  }
`;

const MineButton = styled.button`
  color: ${({ isLoading }) => (isLoading ? "#aaa" : "#333")};
  transform: ${({ isLoading }) => (isLoading ? "scale(.9)" : "")};
  width: ${({ isLoading }) => (isLoading ? "40px" : "60px")};
  aspect-ratio: ${({ isLoading }) => (isLoading ? "1" : "4")};
  border-radius: ${({ isLoading }) => (isLoading ? "100%" : "3px")};
  border: 1px solid #333;
  transition: 0.1s;
  border: none;
`;

export default function BlockchainBlock({
  nonceChange,
  dataChange,
  setChain,
  blockchain,
  block,
  chainNum,
}) {
  const [nonce, setNonce] = useState(block.nonce);
  const [data, setData] = useState(block.data);
  const [isLoading, setIsLoading] = useState(false);

  const handleNonceChange = (event) => {
    setNonce(event.target.value);
    nonceChange(block, data, chainNum);
  };
  const handleDataChange = (event) => {
    setData(event.target.value);
    dataChange(block, data, chainNum);
  };

  const handleMine = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      let newChain = [
        ...blockchain.mineBlock(blockchain.chain[block.index], true),
      ];
      setNonce(blockchain.chain[block.index].nonce);
      setIsLoading(false);
      setChain(newChain);
    }, 100);
  };

  return (
    <SingleBlockCard valid={!block.error}>
      <form>
        <fieldset>
          <label htmlFor='block'>Block: </label>
          <input
            class="form-control"
            type='number'
            name='block'
            id='block'
            value={block.index}
            disabled={true}
          />
          <label htmlFor='nonce'>Nonce: </label>
          <input
            class="form-control"
            type='number'
            id='nonce'
            name='nonce'
            value={nonce}
            onChange={handleNonceChange}
          />
          <label htmlFor='data'>Data: </label>
          <textarea
            class="form-control"
            type='textarea'
            name='data'
            id='data'
            rows='5'
            cols='40'
            left='20px'
            value={data}
            onChange={handleDataChange}
          />
          <p>
            Prev Hash: <span>{block.prevHash}</span>
          </p>
          <p>
            Hash: <span >{block.hash}</span>
          </p>
        </fieldset>
        <MineButton isLoading={isLoading} onClick={handleMine}>
          Mine
        </MineButton>
      </form>
    </SingleBlockCard>
  );
}
