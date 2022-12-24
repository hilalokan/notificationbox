import { useState} from "react";
import Table from "react-bootstrap/Table";

const App = () => {
  const reports = [
    {name: "Hilal Okan", number: "18290119", text:"Objected to the score."},
    {name: "Bertuğ Kara", number: "18290104", text:"Objected to the score."},
    {name: "Osman Buğra Dağlı", number:"18290092", text:"Objected to the score."},
    {name: "Kerem Ali Öztürk", number: "19290792", text:"Objected to the score."}
  ]

  const renderReports = (reports,index) => {
    return (
      <tr key ={index}>
        <td>{reports.name}</td>
        <td>{reports.number}</td>
        <td>{reports.text}</td>
      </tr>
    )
  }

  return (
    <div className="App">
      <br></br>
      <br></br>
      <br></br>
      <h5>NOTIFICATIONS</h5>
      <hr></hr>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Student ID</th>
          <th>Message</th>
        </tr>
      </thead>
   <tbody>
      {reports.map(renderReports)}
   </tbody>
    </Table>
    </div>
  );

}
  

export default App;
