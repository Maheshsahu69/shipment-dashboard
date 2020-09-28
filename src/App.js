import React from "react";
import "./App.css";
import {} from "react-router-dom";
import Delivery from "./components/Delivery";
import OutForDelivery from "./components/OutForDelivery";
import InTransit from "./components/InTransit";
import NoInformationYet from "./components/NoInformationYet";
import Dex from "./components/Dex";
import DeliveryScan from "./components/DeliveryScan";
import InTransitScan from "./components/InTransitScan";
import DexScan from "./components/DexScan";
import OutForDeliveryScan from "./components/OutForDeliveryScan";


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      countDEL: 0,
      countINT: 0,
      countOOD: 0,
      countDEX: 0,
      countNFI: 0,
      scan: [],
      scanINT:[],
      scanDEX:[],
      scanOOD:[],
      scanNFI:[],
      showDEL: true,
      showINT: false,
      showDEX: false,
      showOOD: false,
      showNFI: false,
    };
      
  }
  componentDidMount() {
    let self = this;
    let countDEL = 0;
    let countINT = 0;
    let countOOD = 0;
    let countDEX = 0;
    let countNFI = 0;
    var url =
      "https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mahesh";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Authorization", "Bearer tTU3gFVUdP");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        let tempData = JSON.parse(xhr.response);
        self.setState({ data: tempData.data, scan: tempData.data[0].scan });
        self.state.data.map((item, index) => {
          if (item.current_status_code === "DEL") {
            countDEL++;
          } else if (item.current_status_code === "INT") {
            countINT++;
            self.setState(prevState => ({
              scanINT: [...prevState.scanINT, item.scan]
            }))  
          } else if (item.current_status_code === "OOD") {
            countOOD++;
            self.setState(prevState => ({
              scanOOD: [...prevState.scanINT, item.scan]
            })) 
           
          } else if (item.current_status_code === "DEX") {
            countDEX++;
            self.setState(prevState => ({
              scanDEX: [...prevState.scanDEX, item.scan]
            })) 
          } else if (item.current_status_code === "NFI") {
            countNFI++;
          }
        });
        self.setState({
          countDEL: countDEL,
          countINT: countINT,
          countOOD: countOOD,
          countDEX: countDEX,
          countNFI: countNFI,
        });
      }
    };
    var data = '{"email":"maheshsahu.69@outlook.com"}';
    xhr.send(data);
  }
  onDeliveryClick = () => {
    this.setState({
       showDEL: true,
       showDEX:false,
       showINT:false,
       showNFI:false,
       showOOD:false
       });
  };
  onINTClick = ()=>{
    this.setState({ 
      showINT:true,
      showDEL: false,
      showDEX:false,
      showNFI:false,
      showOOD:false
     });
  }
  onOODClick = () =>{
    this.setState({ 
      showOOD:true,
      showINT:false,
      showDEL:false,
      showDEX:false,
      showNFI:false,
     });
  }
  onDEXClick = () =>{
    this.setState({ 
      showDEX:true,
      showINT:false,
      showDEL: false,
      showNFI:false,
      showOOD:false
     });
  }
  onNFIClick = () =>{
    this.setState({ 
      showNFI:true,
      showINT:false,
      showDEL: false,
      showDEX:false,
      showOOD:false
     });
  }
  render() {
    return (
      <div className="main-div">
        
        <h2 style={{ textAlign: "center", padding: "10px" }}>
          Shipment Dashboard
        </h2>
        
        <div className="div-btn-menu">
          <a className="item" onClick={this.onDeliveryClick} id="defaultID">
            <span className="span-title">DEL</span>
            <span className="span-value">{this.state.countDEL}</span>
          </a>
          <a className="item" onClick={this.onINTClick}>
            <span className="span-title">INT</span>
            <span className="span-value">{this.state.countINT}</span>
          </a>
          <a className="item" onClick={this.onOODClick}>
            <span className="span-title">OOD</span>
            <span className="span-value">{this.state.countOOD}</span>
          </a>
          <a className="item" onClick={this.onDEXClick}>
            <span className="span-title">DEX</span>
            <span className="span-value">{this.state.countDEX}</span>
          </a>
          <a className="item" onClick={this.onNFIClick}>
            <span className="span-title">NFI</span>
            <span className="span-value">{this.state.countNFI}</span>
          </a>
        </div>
        
          <div className="left-div">
            {this.state.showDEL && <DeliveryScan scan={this.state.scan} />}
            {this.state.showINT && <InTransitScan scan={this.state.scanINT}/>}
            {this.state.showOOD && <OutForDeliveryScan scan={this.state.scanOOD} />}
            {this.state.showDEX && <DexScan scan={this.state.scanDEX}/>}
          </div>

          <div className="right-div">
            {this.state.showDEL && <Delivery data={this.state.data} />}
            {this.state.showINT && <InTransit data={this.state.data} />}
          {this.state.showOOD && <OutForDelivery data={this.state.data}/>}
            {this.state.showDEX && <Dex data={this.state.data}/>}
            {this.state.showNFI && <NoInformationYet data={this.state.data}/>}
          </div>
        </div>
    
    );
  }
}
export default App;
