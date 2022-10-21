import sha256 from "crypto-js/sha256";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Blockchain } from "./lib/blockchain";
import AddBlock from "./AddBlock";
import Block from "./Block";

function calculateHash(testNonce, data, prevHash, timeStamp = Date.now()) {
  return sha256(testNonce + data + prevHash + timeStamp).toString();
}

export default function BlockchainComponent() {
  const [blockchain, setBlockChain] = useState(new Blockchain());

  const [chain, setChain] = useState(blockchain.chain);
  const [blocks, setBlocks] = useState(blockchain.blockchain);
  const [outputMessages, setOutputMessages] = useState([]);
  const [pendingTransactions, setPendingTransaction] = useState([]);
  const [values, setValues] = useState({
    from: "",
    to: "",
    amount: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({
        ...oldValues,
        [name]: value.toLowerCase(),
      }));
    };
  };

  const handleAddPendingTransaction = (e) => {
    e.preventDefault();
    if (values.from === "" || values.to === "" || values.amount === 0) {
      alert("Please enter values for each field... value cannot be 0");
      return;
    }
    if (values.to === values.from){
      alert("Sender and receiver cannot be the same")
      return;
    }
    let newTransaction = values;
    setPendingTransaction([...pendingTransactions, newTransaction]);
    blockchain.pendingTransactions.push(values);
    setValues({
      from: "",
      to: "",
      amount: 0,
    });
  };

  function computeHash(difficulty) {
    setIsLoading(true);
    setTimeout(() => {
      let testNonce = 0;
      let messages = [];
      setOutputMessages([]);
      while (
        calculateHash(
          testNonce,
          pendingTransactions,
          blockchain.latestBlock.hash
        ).substring(0, difficulty) !== Array(difficulty + 1).join("0")
      ) {
        messages.push(testNonce);
        testNonce++;
      }
      setOutputMessages([...messages]);
      setIsLoading(false);
      setTimeout(() => {
        setOutputMessages([]);
        setPendingTransaction([]);
        blockchain.addNewComputedBlock(
          pendingTransactions,
          blockchain.latestBlock().hash
        );
        blockchain.latestBlock().nonce = testNonce;
        let newBlocks = [...blockchain.chain];
        setBlocks(newBlocks);
      }, 1000);
    }, 10);
  }

  const handleAddBlock = (data) => {
    const newChain = [...blockchain.addNewBlock(data)];
    setChain(newChain);
  };

  const handleDataChange = (block, data) => {
    let newChain = [...blockchain.updateBlockData(block.index, data)];
    setChain(newChain);
  };

  const handleNonceChange = (block, data) => {
    let newChain = [...blockchain.updateBlockNonce(block.index, data)];
    setChain(newChain);
  };

  return (
    <>
      <TodoSection>
        <Form>
          <h4 >Enter New Transaction</h4>
          <fieldset>
            <label htmlFor='from'>
              From
              <input
                class="form-control"
                onChange={set("from")}
                value={values.from}
                name='from'
                type='text'></input>
            </label>
            <label htmlFor='to'>
              To
              <input
                class="form-control"
                onChange={set("to")}
                value={values.to}
                name='to'
                type='text'></input>
            </label>
            <label htmlFor='amount'>
              Amount
              <input
                class="form-control"
                onChange={set("amount")}
                value={values.amount}
                name='amount'
                type='number'></input>
            </label>
            <div />
            <button type='submit' class="btn btn-primary" onClick={handleAddPendingTransaction}>
              Submit
            </button>
          </fieldset>
        </Form>
        <PendingTransactions>
          <h4>Mem Pool</h4>
          {pendingTransactions.map((txn, idx) => (
            <Transaction
              key={`${txn.from}-${idx}`}
              from={txn.from}
              to={txn.to}
              amount={txn.amount}
            />
          ))}
        </PendingTransactions>
      <Output
        outputMessages={outputMessages}
        isLoading={isLoading}
        computeHash={() => computeHash(4)}
      />
      </TodoSection>
      <hr />
      <BlockchainContainer>
        {chain.map((block) => (
          <Block
            genisis={block.index === 0}
            key={block.index}
            type='blockchain'
            nonceChange={handleNonceChange}
            dataChange={handleDataChange}
            setChain={setChain}
            blockchain={blockchain}
            block={block}
          />
        ))}
      </BlockchainContainer>
    </>
  );
}


function Transaction({ from, to, amount }) {
  return (
    <div className='transaction'>
      <p>
        <strong>From: </strong>
        {from} -&gt; To: {to}
      </p>
      <p>
        <strong>Amount: </strong>
        {"$"}
        {amount}
      </p>
    </div>
  );
}

function Output({ outputMessages, computeHash, isLoading }) {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    setMessages(outputMessages);
  }, [outputMessages]);
  
  return (
    <OutputContainer isLoading={isLoading}>
      <h4>Output</h4>
      <p>Nonce: {messages[messages.length - 1]}</p>
      <button onClick={computeHash} class="btn btn-primary">Mine</button>
    </OutputContainer>
  );
}

const BlockchainContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  margin-left: 2%;
  margin-bottom: 20px;
`;

const OutputContainer = styled.div`
  max-width: 1400px;
  min-width: 100%;
  height: 100%;
  
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #bbb;
  opacity: ${({ isLoading }) => (isLoading ? ".5" : "1")};
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
    max-width: 300px;
    margin: auto;
  }

  label {
    
    justify-content: space-between;
  }

  button {
    width: 80px;
    align-self: flex-end;
  }
`;

const PendingTransactions = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #bbb;

  p {
    margin: 0;
  }
  .transaction-list {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    gap: 1rem;

    max-height: 200px;
  }
  .transaction {
    display: flex;
    gap: 3rem;
    background: #efefef;
    border: 1px solid #333;
    border-radius: 0.25rem;
    padding: 0.5rem;
  }
`;

const TodoSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  max-width: 1400px;
  margin: auto;
  min-width: 50%;

`;
