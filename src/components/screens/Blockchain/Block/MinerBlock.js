import React, {useState } from "react";
import styled from "styled-components";
import '../../../styles/scrollbar.css'

export const SingleBlockCard = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #00000022; 
  background-color: ${({ valid }) => (valid ? "#e6ffff" : "#ffdada")};
  background-color: ${({ mined }) => (mined ? "rgb(237, 247, 237)" :"#e6ffff")};

  @keyframes anim-glow {
    0% {
      box-shadow: 0px 0px 5px 5px #61EF61;
    }
    100% {
      box-shadow: 0 0 10px 8px transparent;
      border-width: 2px;
    }
  }
  animation: ${({ mined }) => (mined ? "anim-glow ease-out infinite" : "none")};
  animation-duration: 1s;
  animation-iteration-count:2;

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  fieldset {
    border: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    backgrounf-color: aqua;
    overflow: hidden;
  }
//   label {
//     display: flex;
//     flex-direction: column;
//   }
  
  span {
    background-color: "#ffff";
    // padding: 3px 3px;
    border-radius: 3px;
    border: none;
    font-size: 0.85rem;
  }

  .transactions {
    background-color: #ffffffaa;
    border: 1px solid black;
    border-radius: 0.25rem;
    height: 100%;
    padding: 1rem;
  }

  .single-transaction {
    display: flex;
    gap: 1rem;
  }
`;


export default function BlockchainBlock({
  genesisBlock,
  setChain,
  blockchain,
  block,
}) {
  const [nonce, setNonce] = useState(block.nonce);
  const [data, setData] = useState(block.data);
  
  return (
    <SingleBlockCard valid={!block.error} mined={block.mined}>
      <form>
        <fieldset>
          <label htmlFor='block'>Block: <span>{block.index}</span></label>
          <label htmlFor='nonce'>Nonce: <span>{nonce}</span></label>
          <label className='transactions-label' htmlFor='data'>
            Data:
          </label>
          {genesisBlock && (
            <textarea
              class="form-control"
              type='textarea'
              name='data'
              id='data'
              rows='10'
              cols='40'
              value={data}
              disabled = {true}
            />
          )}
          {!genesisBlock && (
            <div className='transactions'>
              <>
                {block.transactions.length >= 1 &&
                  block.transactions.map((transaction, index) => (
                    <div
                      key={`block: ${block.index} - transaction: ${index + 1}`}
                      className='single-transaction'>
                      <p>{index + 1}.</p>
                      <label>
                        From
                        <input
                          class="form-control"
                          index={index}
                          name='from'
                          value={transaction.from}
                          disabled = {true}
                        />
                      </label>
                      <label>
                        To{" "}
                        <input
                          class="form-control"
                          index={index}
                          name='to'
                          value={transaction.to}
                          disabled = {true}

                        />
                      </label>
                      <label>
                        Amount
                        <input
                          class="form-control"
                          index={index}
                          name='amount'
                          value={transaction.amount}
                          disabled = {true}

                        />
                      </label>
                    </div>
                  ))}
              </>
            </div>
          )}
          <p>
            Prev Hash: <span>{block.prevHash}</span>
          </p>
          <p>
            Hash: <span>{block.hash}</span>
          </p>
        </fieldset>
      </form>
    </SingleBlockCard>
  );
}
