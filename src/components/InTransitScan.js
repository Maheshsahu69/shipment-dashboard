import React from "react";
import "./InTransitScan.css";

const InTransitScan = (props) => {
  return (
    <div>
      <table className="ui padded table">
        <tbody>
          {props.scan.map((e, i) => {
            return (
              <tr className="item-tr1-int-scan" key={i}>
                <td className="item-left-int-scan">
                  {e[0].location} {e[0].time.split(" ")[0]}{" "}
                  {e[0].time.split(" ")[1]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default InTransitScan;
