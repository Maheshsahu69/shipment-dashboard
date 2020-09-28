import React from "react";
import "./InTransit.css";
const InTransit = (props) => {
  let trim;
  return (
    <div>
      <table className="ui padded table">
        <thead>
          <tr className="header-style-INT">
            <th>AWB NUMBER </th>
            <th>TRANSPORTER</th>
            <th>SOURCE</th>
            <th>DESTINATION</th>
            <th>BRAND</th>
            <th>START DATE</th>
            <th>ETD</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {props.data.length > 0
            ? props.data.map((item, index) => {
                if (item.current_status_code === "INT") {
                  if(item.extra_fields!==undefined){
                    trim=item.extra_fields.expected_delivery_date.split('T')[0].split(' ')[0];
                 }
                  return (
                    <tr key={index}>
                      <td className="status-INT">{item.awbno}</td>
                      <td className="status-INT">{item.carrier}</td>
                      <td className="status-INT">{item.from}</td>
                      <td className="status-INT">{item.to}</td>
                      <td className="status-INT">USPA</td>
                      <td className="status-INT">{item.createdAt.split('T')[0]}</td>
                      <td className="status-INT">{trim}</td>
                      <td className="status-style-INT">{item.current_status}</td>
                    </tr>
                  );
                }
              })
            : 0}
        </tbody>
      </table>
    </div>
  );
};
export default InTransit;
