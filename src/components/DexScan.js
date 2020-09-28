import React from "react";
import "./DexScan.css";

const DexScan = (props) => {
  console.log("ee",props);
  return (
    <div>
      <table className="ui padded table">
        <tbody>
          { 
          props.scan.length > 0 ?
           props.scan.map((e, i) => {
          return(
            <tr className="item-tr1-dex-scan">
            <td className="item-left-dex-scan">{e.location} {e.time.split(" ")[0]} {e.time.split(" ")[0]}</td>
          </tr>
          )
          }) 
          :'Np data found !'  
        }
        </tbody>
      </table>
    </div>
  );
};
export default DexScan;
