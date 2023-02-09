import React from "react";
import styled from "styled-components";
import Uploader from "./Uploader";
import UserInput from "./UserInput";
import { Button } from "devextreme-react/button";
const Container = styled.div`
  width: 100%;
  height: 99%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${'' /* border: 1px solid; */}
`;

const DataInputContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UploaderContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const SimulatorContainer = styled.div`
  width: 100%;
  ${'' /* border: 1px solid; */}
  height: 8%;
  display:flex;
  align-items:center;
  justify-content:center;
  ${'' /* text-align:center; */}
  ${'' /* padding-top:20px; */}
`;

const DataUploader = ({dataHandler,simulateButtonHandler}) => {
  return (
    <Container>
      <Wrapper>
        <DataInputContainer>
          <UserInput dataHandler={dataHandler}></UserInput>
        </DataInputContainer>
        <UploaderContainer>
          <Uploader />
        </UploaderContainer>
        <SimulatorContainer>
          <Button text="simulate"  type="default" onClick={()=>simulateButtonHandler(true)} />
        </SimulatorContainer>
      </Wrapper>
    </Container>
  );
};

export default DataUploader;
