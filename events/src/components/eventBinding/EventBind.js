import { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
    // this.handleClick = this.handleClick.bind(this); [3]
  }
  /**
   * TODO List
   * create class component
   * 1. Binding in render method
   * 2. Binding in render method using arrow function
   * 3. Binding in the constructor
   * 4. Class property as an arrow function
   * 5. send argument to event handler
   */

  // handleClick(){
  //   this.setState({message: "Goodbye!"})
  //   console.log("this: ", this);
  // }[1,2,3]

  // handleClick = () => {
  //   this.setState({ message: "Goodbye!" });
  //   console.log("this: ", this);
  // } [4]

  // handleClick(name){
  //   this.setState({message: `Goodbye! ${name}`})
  //   console.log("this: ", this);
  // } [5]

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        {/* <button onClick={this.handleClick.bind(this)}>click</button> */}{" "}
        {/* [1] */}
        {/* <button onClick={() => this.handleClick()}>click</button> */}{" "}
        {/* [2] */}
        {/* <button onClick={this.handleClick}>click</button> */} {/* [3] */}
        {/* <button onClick={() => this.handleClick("Roy")}>click</button> */}{" "}
        {/* [5] */}
      </div>
    );
  }
}

export default EventBind;