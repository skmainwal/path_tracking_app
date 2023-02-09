import React, { useState, useEffect } from "react";
import { Form, SimpleItem, RequiredRule, } from "devextreme-react/form";
import { DataGrid, Column , Paging,} from "devextreme-react/data-grid";
import styled from "styled-components";
import { routeDetails } from "../mapDrawer/data";
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const InputContainer = styled.div`
  width: 100%;
  height: 10%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-bottom:5px;

`;
const DataGridContainer = styled.div`
  width: 100%;
  height: 90%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

`;

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const employee = {
  name: "John Heart",
  officeNumber: 901,
  hireDate: new Date(2012, 4, 13),
};
const UserInput = ({dataHandler}) => {
  const [dataSource, setDataSource] = useState(routeDetails);
  useEffect(()=>{
    if(routeDetails){
      dataHandler(routeDetails)
    }

  },[routeDetails])

  const buttonOptions = {
    text: "add",
    icon: "add",

    type: "default",
    onClick: function () {
      // Handle the button click here
    },
  };

  return (
    <Container>
      <InputContainer>
        {/* <FormContainer>
          <Form
            id="form"
            labelMode="floating"
            colCount={4}
            formData={dataSource}
          >
            <SimpleItem dataField="latitude">
              <RequiredRule />
            </SimpleItem>
            <SimpleItem dataField="longitude">
              <RequiredRule />
            </SimpleItem>
            <SimpleItem dataField="time">
              <RequiredRule />
            </SimpleItem>
            <SimpleItem itemType="button" style={{marginTop:"10px"}} buttonOptions={buttonOptions} />

          </Form>
        </FormContainer> */}
      </InputContainer>
      <DataGridContainer>
        <DataGrid
          // dataSource={employees}
          height={"100%"}
          dataSource={dataSource}
          keyExpr="lat"
        >
        <Paging  enabled={false}/>
          <Column dataField="lat" alignment={"left"} caption="Latitude" ></Column>
          <Column dataField="lng" alignment={"left"} caption="Longitude" ></Column>
          <Column dataField="time" alignment={"left"} caption="Time (Sec)" ></Column>
        </DataGrid>
      </DataGridContainer>
    </Container>
  );
};

export default UserInput;
