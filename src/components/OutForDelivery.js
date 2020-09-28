import React from "react";
import './OutForDelivery.css';
const OutForDelivery = (props) => {
  let trim;
  return (
    <div>
      <table className="ui padded table">
        <thead>
        <tr className="header-style-OOD">
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
                if (item.current_status_code === "OOD") {
                  if(item.extra_fields!==undefined){
                    trim=item.extra_fields.expected_delivery_date.split('T')[0].split(' ')[0];
                 }
                  return (
                    <tr key={index}>
                      <td className="status-OOD">{item.awbno}</td>
                      <td className="status-OOD">{item.carrier}</td>
                      <td className="status-OOD">{item.from}</td>
                      <td className="status-OOD">{item.to}</td>
                      <td className="status-OOD">USPA</td>
                      <td className="status-OOD">{item.createdAt.split('T')[0]}</td>
                      <td className="status-OOD">{trim}</td>
                      <td className="status-style-OOD">{item.current_status}</td>
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
export default OutForDelivery;
