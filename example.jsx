import React from "react";

class LifecycleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
    console.log("Constructor: Komponenten instansieras");
  }
  static getDerivedStateFromProps(props, state) {
    console.log(
      "getDerivedStateFromProps: Komponenten förbereder sig för attrenderas",
    );
    // Här kan du baserat på props uppdatera state
    return null; // Om state inte behöver uppdateras, returnera null
  }
  componentDidMount() {
    console.log("componentDidMount: Komponenten har monterats");
    // Perfekt för att hämta data, lägga till eventlyssnare, etc.
    this.setState({ data: "Hämtad data" });
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate: Beslutar om komponenten ska uppdateras",
    );
    // Returnera true eller false baserat på villkor
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "getSnapshotBeforeUpdate: Fångar upp information innan uppdatering",
    );
    // Används för att fånga tillstånd från DOM
    return null;
    // Returnera snapshot-värdet som sedan skickas till componentDidUpdate
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: Komponenten har uppdaterats");
    // Bra plats för efterföljande sidoeffekter baserat på uppdateringen
  }
  componentWillUnmount() {
    console.log("componentWillUnmount: Komponenten kommer att avmonteras");
    // Städning, t.ex. ta bort eventlyssnare
  }
  render() {
    console.log("render: Komponenten renderas (eller omrenderas)");
    return (
      <div>
        <h1>Livscykelmetoder i React</h1>
        <p>Data: {this.state.data}</p>
      </div>
    );
  }
}
export default LifecycleExample;
