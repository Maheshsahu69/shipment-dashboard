import React from "react";
import "./NoInformationYetScan.css";

const NoInformationYetScan = (props) => {
  return (
    <div>
      <table className="ui padded table">
        <tbody>
          {props.scan.map((e, i) => {
            return (
              <tr className="item-tr1-int-scan" key={i}>
                <td className="item-left-int-scan">{e}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default NoInformationYetScan;
