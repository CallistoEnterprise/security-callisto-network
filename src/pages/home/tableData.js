import React, { useState } from "react";
import Papa from "papaparse";
import Table from 'react-bootstrap/Table';

// Google Sheet link: https://docs.google.com/spreadsheets/d/e/2PACX-1vQLD7wTy3m9LVtZBQfB4Z2i6fhsNpSd-cfXpiYolfTw7YT3M-nNgOS0cisaqc93uMEA82KD_irBsQ7h/pubhtml*

const TabelData = () => {
  const [data, setData] = useState({});
  Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQLD7wTy3m9LVtZBQfB4Z2i6fhsNpSd-cfXpiYolfTw7YT3M-nNgOS0cisaqc93uMEA82KD_irBsQ7h/pub?output=csv", {
    download: true,
    header: true,
    complete: (results) => {
      setData(results.data);
    },
  });
  const table = Array.from(data);
  return (

    <div className="dataSection">
                    <Table responsive>
                        <thead>
                            <tr>
                            <th className="tablePadLeft">#</th>
                            <th>PROJECT NAME</th>
                            <th>MARKET CAP</th>
                            <th>AUDIT RELEASE</th>
                            <th>RIKS LEVEL</th>
                            <th>REPORT</th>
                            </tr>
                        </thead>
                        <tbody>
  
                              {table.map((data) => (
                                <tr className="tableRow">
                                  <td key={data.id} className="tablePadLeft">
                                    {data.id}
                                  </td>
                                  <td className="tableProName">
                                    <img src={data.project_icon} alt="Project Icon" className="tableProjIcon" width="45px" /> {data.project_name}
                                  </td>
                                  <td>
                                    {data.market_cap}
                                  </td>
                                  <td>
                                    {data.audit_release}
                                  </td>
                                  <td>
                                    <span className="tableRiskLow">{data.risk_level}</span>
                                  </td>
                                  <td>
                                    <a href={data.report_link} className="tableBtn" target="_blank" rel="noopener noreferrer">AUDIT REPORT</a>
                                  </td>
                                </tr>
                              ))}
                            
                        </tbody>
                    </Table>
                </div>
  );
};
export default TabelData;