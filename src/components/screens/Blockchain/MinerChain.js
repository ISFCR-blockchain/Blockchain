import React, { useEffect, useState } from "react";
import sha256 from "crypto-js/sha256";
import styled from "styled-components";
import { Blockchain } from "./lib/blockchain";
import MinerBlock from './Block/MinerBlock';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';


function calculateHash(testNonce, data, prevHash, timeStamp = Date.now()) {
    return sha256(testNonce + data + prevHash + timeStamp).toString();
  }
export default function Miner() {
  const [open, setOpen] = useState(false);
  const [alertMessages, setAlertMessages] = useState([]);
  const [status1, setStatus1] = useState(["Idle"]);
  const [status2, setStatus2] = useState(["Idle"]);
  const [status3, setStatus3] = useState(["Idle"]);
  const [blockchain1, setBlockChain1] = useState(new Blockchain());
  const [blockchain2, setBlockChain2] = useState(new Blockchain());
  const [blockchain3, setBlockChain3] = useState(new Blockchain());
  const [chain1, setChain1] = useState(blockchain1.chain);
  const [chain2, setChain2] = useState(blockchain2.chain);
  const [chain3, setChain3] = useState(blockchain3.chain);
  const [blocks1, setBlocks1] = useState(blockchain1.blockchain);
  const [blocks2, setBlocks2] = useState(blockchain2.blockchain);
  const [blocks3, setBlocks3] = useState(blockchain3.blockchain);
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
    if (values.from === "" || values.to === "" || values.amount === 0 || values.amount === "0") {
      alert("please enter values for each field... value cannot be 0");
      return;
    }
    if (values.from === values.to){
        alert("sender and receiver cannot be same")
        return;
    }
    let newTransaction = values;

    setPendingTransaction([...pendingTransactions, newTransaction]);
    blockchain1.pendingTransactions.push(values);
    blockchain2.pendingTransactions.push(values);
    blockchain3.pendingTransactions.push(values);
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
          blockchain1.latestBlock.hash
        ).substring(0, difficulty) !== Array(difficulty + 1).join("0")
      ) {
        messages.push(testNonce);
        testNonce++;
      }
      setOutputMessages([...messages]);
      setIsLoading(false);

      setOpen(false);
      setStatus1(["Mining..."]);
      setStatus2(["Mining..."]);
      setStatus3(["Mining..."]);

      let str1 = "", str2 = "", str3 = "", sb1 = "", sb2 = "", sb3 = "",stat1 = "", stat2 = "", stat3 = "";
      setTimeout(() => {
        setOutputMessages([]);
        const rndInt = Math.floor(Math.random() * 3) + 1;
        let msg = "Block validated. Miner " + `${rndInt}` + " is given the miner reward!";

        if ( rndInt === 1 ){
          str1 = blockchain1;
          sb1 = setBlocks1;
          stat1 = setStatus1;
          
          str2 = blockchain2;
          sb2 = setBlocks2;
          stat2 = setStatus2;

          str3 = blockchain3;
          sb3 = setBlocks3;
          stat3 = setStatus3;

        }
        if ( rndInt === 2 ){
          str1 = blockchain2;
          sb1 = setBlocks2;
          stat1 = setStatus2;

          str2 = blockchain1;
          sb2 = setBlocks1;
          stat2 = setStatus1;

          str3 = blockchain3;
          sb3 = setBlocks3;
          stat3 = setStatus3;

        }
        if ( rndInt === 3 ){
          str1 = blockchain3;
          sb1 = setBlocks3;
          stat1 = setStatus3;

          str2 = blockchain2;
          sb2 = setBlocks2;
          stat2 = setStatus2;

          str3 = blockchain1;
          sb3 = setBlocks1;
          stat3 = setStatus1;

        }

        /*Add to the chosen miner first*/
        str1.addNewComputedBlock(
          pendingTransactions,
          str1.latestBlock().hash
        );
        str1.latestBlock().nonce = testNonce;
        let newBlocks1 = [...str1.chain];
        sb1(newBlocks1);

        //set mined = true to highlight colour
        str1.latestBlock().mined = true;
        
        stat1(["Mined!"]);
        stat2(["Checking mined block validity"]);
        stat3(["Checking mined block validity"]);
        
        /*Other two miners after a delay*/
        setTimeout(() => {
            str2.addNewComputedBlock(
                pendingTransactions,
                str2.latestBlock().hash
            );
            str2.latestBlock().nonce = testNonce;
            let newBlocks2 = [...str2.chain];
            sb2(newBlocks2);
            
            str3.addNewComputedBlock(
                pendingTransactions,
                str3.latestBlock().hash
            );
                
            str3.latestBlock().nonce = testNonce;
            let newBlocks3 = [...str3.chain];
            sb3(newBlocks3);

            setTimeout(() => {
              stat1(["Idle"]);
              stat2(["Idle"]);
              stat3(["Idle"]);

              setOpen(true);
              setAlertMessages(msg);
              setPendingTransaction([{from: "System",
              to: `${rndInt}`,
              amount: 5,}]);

              setTimeout(() => {
                setOpen(false);
              }, 10000);

            },5);
  
          },2000);      
        
      }, 3000);

    }, 10);

    
  }


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
      <AlertDisplay
       open = {open}
       alertMessage = {alertMessages}
       setopen = {setOpen}
       />
      <MinerHeading>
          <h2>Miner 1 <span className = "miner-status" >{status1}</span></h2>
          <h2>Miner 2 <span className = "miner-status" >{status2}</span></h2>
          <h2>Miner 3 <span className = "miner-status" >{status3}</span></h2>
      </MinerHeading>
      <MinerContainer>
        <BlockchainContainer>
            {chain1.map((block) => (
            <MinerBlock
                key={`chain1-${block.index}`}
                setChain={setChain1}
                blockchain={blockchain1}
                block={block}
                chainNum={"1"}
            />
            ))}
        </BlockchainContainer>
        <BlockchainContainer>
            {chain2.map((block) => (
            <MinerBlock
                key={`chain2-${block.index}`}
                setChain={setChain2}
                blockchain={blockchain2}
                block={block}
                chainNum={"2"}
              
            />
            ))}
        </BlockchainContainer>
        <BlockchainContainer>
            {chain3.map((block) => (
            <MinerBlock
                key={`chain3-${block.index}`}
                setChain={setChain3}
                blockchain={blockchain3}
                block={block}
                chainNum={"3"}
            />
            ))}
        </BlockchainContainer>
      </MinerContainer>
    </>
  );
}

function Transaction({ from, to, amount }) {
    return (
      <div className='transaction'>
        <p>
          <strong>From: </strong>
          {from} -&gt; 
          <strong>To: </strong> {to}
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
        <button onClick={computeHash} class="btn btn-primary">Initiate Mining Process</button>
      </OutputContainer>
    );
  }

function AlertDisplay({open, alertMessage, setopen}){
  return(
    <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="medium"
              onClick={() => {
                setopen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 3, fontSize: "large" }}
        >
          {alertMessage}
        </Alert>
      </Collapse>
  );
}

const MinerContainer = styled.div`
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  max-width: 1400px;
  margin: auto;
  min-width: 50%;
  justify-content: center;
`;

const MinerHeading = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  max-width: 1400px;
  margin: auto;
  min-width: 480px;
  margin-top: 5px;

  .miner-status{
    // background-color: ${({ status }) => (status ? "#aaa" : "rgb(255 184 0/0.5)")};
    font-size: 20px;
    background-color: rgb(255 184 0/0.5);
    border-radius: 1rem;
    width: fit-content;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const BlockchainContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  margin-top: 10px;
  padding: 10px;
  max-width: 480px;
  margin-left: 0px;
`;


const OutputContainer = styled.div`
  max-width: 1400px;
  min-width: 100%;
  height: 100%;
  
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #bbb;
  opacity: ${({ isLoading }) => (isLoading ? ".5" : "1")};
  button{
    width: fit-content;
  }
`;

const Form = styled.form`
  padding: 15px;
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
  input{
    height: 25px;
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