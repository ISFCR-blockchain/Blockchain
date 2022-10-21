import React from "react";
import Block from "../../Blockchain/Block";
import { Main} from "../../../styles/Main";
import BlockBar from "../BlocksTabs";
// import AppBarStyle from "../../../AppBarStyled";

export default function Hash() {
  return (
    <>
      {/* <AppBarStyle valid= {false}/> */}
      <Main>
      <BlockBar/>
      <br/>
        <h3>Hash</h3>
        
      </Main>
      <Block type='hash' />
    </>
  );
}
