import React from "react";
import { Link } from "react-router-dom";
import Block from "../../Blockchain/Block";
import { Main} from "../../../styles/Main";
import BlockBar from "../BlocksTabs";
// import AppBarStyle from "../../../AppBarStyled";

export default function BlockPage() {
  return (
    <>
      {/* <AppBarStyle valid= {false}/> */}
      <Main>
      <BlockBar/>
        <br />
        <h3>Block</h3>
      </Main>
      <Block type='single' />
    </>
  );
}
