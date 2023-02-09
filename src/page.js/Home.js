import React ,{useState} from "react";
import styled from "styled-components";
import DataUploader from "../components/dataUploader/DataUploader";
import MapDrawer from "../components/mapDrawer/MapDrawer";
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const DataUploaderContainer = styled.div`
  width: 40%;
  height: 100%;
  ${"" /* background:pink; */}
`;

const MapDrawerContainer = styled.div`
  width: 60%;
  height: 100%;
`;
const Home = () => {

  const [pathData, setPathData]= useState([])
  const [isSimulateButtonClicked, setIsSimulateButtonClicked] = useState(false)
  return (
    <Container>
      <DataUploaderContainer>
        <DataUploader dataHandler={(data)=>setPathData(data)}  simulateButtonHandler={setIsSimulateButtonClicked} ></DataUploader>
      </DataUploaderContainer>
      <MapDrawerContainer>
        <MapDrawer route={pathData} isSimulateButtonClicked={isSimulateButtonClicked} />
      </MapDrawerContainer>
    </Container>
  );
};

export default Home;
