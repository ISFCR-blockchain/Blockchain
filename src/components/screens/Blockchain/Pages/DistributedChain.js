import React from "react";
import DistributedBlockchain from "../../Blockchain/DistributedBlockchain";
import { Main} from "../../../styles/Main";
import BlockBar from "../BlocksTabs";

// import AppBarStyle from "../../../AppBarStyled";

export default function DistributedChain() {
  return (
    <>
      {/* <AppBarStyle valid= {false}/> */}
      <Main>
      <BlockBar/>
        <br/>
        <h3>Distributed Blockchain</h3>
      </Main>
      <DistributedBlockchain />
    </>
  );
}
