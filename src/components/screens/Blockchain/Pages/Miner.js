import React from "react";
import { Main} from "../../../styles/Main";
import BlockBar from "../BlocksTabs";
import Miner from "../MinerChain";

export default function MinerChain() {
  return (
    <>
      <Main>
      <BlockBar/>
        <br/>
        <h3>Mining</h3>
      </Main>
      <Miner />
    </>
  );
}
