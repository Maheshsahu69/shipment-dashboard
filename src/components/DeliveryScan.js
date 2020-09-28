import React from "react";
import "./DeliveryScan.css";

const DeliveryScan = (props) => {
  let location1;
  let location2;
  let location3;
  let location4;
  let date1;
  let date2;
  let date3;
  let date4;
  let time1;
  let time2;
  let time3;
  let time4;
  props.scan.map((e, i) => {
    if (i === 0) {
      let dateTrim = e.time.split(" ")[0];
      let timeTrim = e.time.split(" ")[1];
      location1 = e.location;
      date1 = dateTrim;
      time1 = timeTrim;
    }
    if (i === 5) {
      let dateTrim = e.time.split(" ")[0];
      let timeTrim = e.time.split(" ")[1];
      location2 = e.location;
      date2 = dateTrim;
      time2 = timeTrim;
    }
    if (i === 6) {
      let dateTrim = e.time.split(" ")[0];
      let timeTrim = e.time.split(" ")[1];
      location3 = e.location;
      date3 = dateTrim;
      time3 = timeTrim;
    }
    if (i === 7) {
      let dateTrim = e.time.split(" ")[0];
      let timeTrim = e.time.split(" ")[1];
      location4 = e.location;
      date4 = dateTrim;
      time4 = timeTrim;
    }
  });
  return (
    <div>
      <table className="ui padded table">
        <tbody>
          <tr className="item-tr1">
            <td className="item-left">{location1}</td>
            <td className="item-left">{date1}</td>
            <td className="item-left">{time1}</td>
          </tr>
          <tr className="item-tr2">
            <td className="item-left">{location2}</td>
            <td className="item-left">{date2}</td>
            <td className="item-left">{time2}</td>
          </tr>
          <tr className="item-tr3">
            <td className="item-left">{location3}</td>
            <td className="item-left">{date3}</td>
            <td className="item-left">{time3}</td>
          </tr>
          <tr className="item-tr4">
            <td className="item-left">{location4}</td>
            <td className="item-left">{date4}</td>
            <td className="item-left">{time4}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default DeliveryScan;
