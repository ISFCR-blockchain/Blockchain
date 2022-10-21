import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Blockchain } from "./lib/blockchain";
import AddBlock from "./AddBlock";
import Block from "./Block";
import DistributedBlock from "./Block/DistributedBlock";

export default function DistributedBlockchain() {
  const [blockchain1, setBlockChain1] = useState(new Blockchain());
  const [blockchain2, setBlockChain2] = useState(new Blockchain());
  const [blockchain3, setBlockChain3] = useState(new Blockchain());
  const [chain1, setChain1] = useState(blockchain1.chain);
  const [chain2, setChain2] = useState(blockchain2.chain);
  const [chain3, setChain3] = useState(blockchain3.chain);

  const handleAddBlock = (data) => {
    const newChain1 = [...blockchain1.addNewBlock(data)];
    setChain1(newChain1);
    const newChain2 = [...blockchain2.addNewBlock(data)];
    setChain2(newChain2);
    const newChain3 = [...blockchain3.addNewBlock(data)];
    setChain3(newChain3);
  };

  const handleDataChange = (block, data, chainNum) => {
    if (chainNum === "1") {
      const newChain = [...blockchain1.updateBlockData(block.index, data)];
      setChain1(newChain);
    } else if (chainNum === "2") {
      const newChain = [...blockchain2.updateBlockData(block.index, data)];
      setChain2(newChain);
    } else {
      const newChain = [...blockchain3.updateBlockData(block.index, data)];
      setChain3(newChain);
    }
  };

  const handleNonceChange = (block, data, chainNum) => {
    if (chainNum === "1") {
      const newChain = [...blockchain1.updateBlockNonce(block.index, data)];
      setChain1(newChain);
    } else if (chainNum === "2") {
      const newChain = [...blockchain2.updateBlockNonce(block.index, data)];
      setChain2(newChain);
    } else {
      const newChain = [...blockchain3.updateBlockNonce(block.index, data)];
      setChain3(newChain);
    }
  };

  return (
    <>
      <AddBlock addBlock={handleAddBlock} />
      <BlockchainContainer>
        {chain1.map((block) => (
          <DistributedBlock
            key={`chain1-${block.index}`}
            nonceChange={handleNonceChange}
            dataChange={handleDataChange}
            setChain={setChain1}
            blockchain={blockchain1}
            block={block}
            chainNum={"1"}
          />
        ))}
      </BlockchainContainer>
      <BlockchainContainer>
        {chain2.map((block) => (
          <DistributedBlock
            key={`chain2-${block.index}`}
            nonceChange={handleNonceChange}
            dataChange={handleDataChange}
            setChain={setChain2}
            blockchain={blockchain2}
            block={block}
            chainNum={"2"}
          />
        ))}
      </BlockchainContainer>
      <BlockchainContainer>
        {chain3.map((block) => (
          <DistributedBlock
            key={`chain3-${block.index}`}
            nonceChange={handleNonceChange}
            dataChange={handleDataChange}
            setChain={setChain3}
            blockchain={blockchain3}
            block={block}
            chainNum={"3"}
          />
        ))}
      </BlockchainContainer>
    </>
  );
}

const BlockchainContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  margin-top: 20px;
  padding: 20px;
`;
