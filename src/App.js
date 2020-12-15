import "./App.css";
import React from "react";
class App extends React.Component {
  state = {
    person: {
      fullName: "Alicia Keys",
      bio:
        "Born in 1981, in New York, Alicia Keys began piano lessons at age 7",
      imgPub: "/Alicia.jpg",
      profession: "Singer-songwriter",
    },
    visibility: false,
    counter: 0,
  };
  handleClick = () => {
    this.setState({ visibility: !this.state.visibility });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.visibility ? (
          <header className="App-header">
            <h3>Full Name : {this.state.person.fullName}</h3>
            <h3> Biography : {this.state.person.bio}</h3>
            <h3> Profession : {this.state.person.profession}</h3>

            <img src={this.state.person.imgPub} alt="Alicia" width="400px" />
          </header>
        ) : (
          <h1> Click the Button to see the Info</h1>
        )}
        <button onClick={this.handleClick}>click Me !</button>
        <h2> {this.state.counter}</h2>
      </div>
    );
  }
}

export default App;
