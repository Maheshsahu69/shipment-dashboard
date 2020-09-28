import React from "react";
import "./OutForDeliveryScan.css";

const OutForDeliveryScan = (props) => {
  return (
    <div>
      <table className="ui padded table">
        <tbody>
          {props.scan.map((e, i) => {
            return e.map((ee, ii) => {
              return (
                <tr className="item-tr4-ood-scan" key={ii}>
                  <td className="item-left-ood-scan">
                    {ee.location}
                    {ee.time.split(" ")[0]}
                    {ee.time.split(" ")[1]}
                  </td>
                </tr>
              );
            });
          })}
        </tbody>
      </table>
    </div>
  );
};
export default OutForDeliveryScan;
