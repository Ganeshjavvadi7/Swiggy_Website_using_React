import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: { name: null, location: null },
    };
    // console.log(this.props);
    // this.state = {
    //   count: 0,
    // };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ganeshjavvadi7");
    console.log(data);
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
    console.log(jsonData);
  }
  render() {
    const { name, location } = this.state.userInfo;
    // const { count } = this.state;

    return (
      <div className="user">
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
            console.log(count);
          }}
        >
          Count-{count}
        </button> */}
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>{this.props.role}</h4>
      </div>
    );
  }
}

export default UserClass;
