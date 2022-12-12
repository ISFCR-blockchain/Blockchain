import BlockchainComponent from "../../Blockchain/Blockchain";
import { Main} from "../../../styles/Main";
import BlockBar from "../BlocksTabs"
// import AppBarStyle from "../../../AppBarStyled";

export default function BlockchainPage() {

  return (
    <>
      {/* <AppBarStyle valid= {false}/> */}
      <Main>
      {/* <BlockBar/> */}
        <br/>        
        <h3>Blockchain</h3>
      </Main>

      <BlockchainComponent />
    </>
  );
}
