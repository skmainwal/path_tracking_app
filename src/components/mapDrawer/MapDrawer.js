import React, { useState, useEffect } from "react";
import Map from "devextreme-react/map";
import styled from "styled-components";
import DroneImg from "../../icons/drone.png";
import { markersData, routeDetails } from "./data.js";
import { Button } from "devextreme-react/button";

const modes = ["driving", "walking"];
const routeColors = ["blue", "green", "red"];
const ButtonContainer = styled.div`
  width: 95%;
  height: 5%;
  ${"" /* border:1px solid; */}
  display:flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const ButtonWarpper = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;
const MapDrawer = ({route,isSimulateButtonClicked}) => {
  const [pathData, setPathData] = useState([]);
  const [routesData, setRoutesData] = useState([{
    weight: 6,
    color: "red",
    opacity: 0.5,
    mode: "",
    locations: [[
      0,0
    ]],
  },]);
  const [intervalId,setIntervalId] = useState(null)
  const [count, setCount] = useState(0)
  const [leftPathData, setLeftPathData] = useState([])

  const [isPause, setIsPause] = useState(false)
  const [isResume, setIsResume] = useState(false)
  // let leftPathData=[] 
  // let count =0;

  
  // Tracking a path with time stamp
  useEffect(() => {
    if (route && isSimulateButtonClicked) {
      setLeftPathData(route)
      let data= route
      // Collecting route data
      setRoutesData([
        {
          weight: 6,
          color: "red",
          opacity: 0.5,
          mode: "",
          locations: data,
        },
      ]);
      
      let id = setInterval(()=>{
        setPathData((prevState) => [
          ...prevState,
          { location: [data[count]?.lat, data[count]?.lng] },
        ])
        data.shift()
        setLeftPathData(data)
        setCount((prevState)=>prevState+1)

      },1000*data[count]?.time  )
      setIntervalId(id)

      

      // for (let i = 0; i < route.length; i++) {
      //   if(isPause){
      //     clearTimeout(intervalId)
      //     break;
      //   } 

      //   let id=  setTimeout(
      //     () => [
      //       setPathData((prevState) => [
      //         ...prevState,
      //         { location: [route[i].lat, route[i].lng] },
      //       ]),
      //     ],
      //     1000 * route[i].time * i
      //   );
      //   setIntervalId(id)
      // }
    }
    return ()=>{
      clearInterval(intervalId)
    }
  }, [route,isPause, isSimulateButtonClicked]);


  useEffect(()=>{
    if(isResume){
      let data= leftPathData
      setRoutesData([
        {
          weight: 6,
          color: "red",
          opacity: 0.5,
          mode: "",
          locations: data,
        },
      ]);
      let id = setInterval(()=>{
        setPathData((prevState) => [
          ...prevState,
          { location: [data[count]?.lat, data[count]?.lng] },
        ])
        data.shift()
        setLeftPathData(data)
        setCount((prevState)=>prevState+1)

      },1000*data[count]?.time  )
      setIntervalId(id)

    }

    return ()=>{
      clearInterval(intervalId)
    }

  },[isResume])

  const resumeHandler=()=>{

  }

  
  return (
    <Container>
      <ButtonContainer>
        <ButtonWarpper>
          <Button text="Pause" height={30} type="default" onClick={()=>{
            // setIsPause(true)
            clearInterval(intervalId)
            setIsResume(false)
            
          }} />
        </ButtonWarpper>
        <ButtonWarpper>
          <Button text="Resume" height={30} type="default" onClick={()=>{
            setIsResume(true)
          }} />
        </ButtonWarpper>
      </ButtonContainer>

      <Map
        defaultZoom={14}
        height={"90%"}
        width="95%"
        controls={true}
        markers={pathData}
        // markers={markersData}

        routes={routesData}
        provider="bing"
        // markerIconSrc={DroneImg}
      />
    </Container>
  );
};

export default MapDrawer;
