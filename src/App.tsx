import React, { FC } from "react";
import { Button, Card, Col, Row } from "antd";
import "./App.css";

const App: FC = () => (


  <div className="App">
    <Row>
      <Col span={12}>
      <Card
  
      title={'策略'}
      
    >
      {/* <div >hello</div> */}
    </Card>
      </Col>
   
   <Col span={12}>
   
   <Card
    
      title={'特征'}
      
    >
      <div >hello</div>
    </Card>

   </Col>

    </Row>
  </div>

);

export default App;
