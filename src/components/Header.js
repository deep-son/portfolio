import React, { Component } from "react";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles;
    }

    return (

      <section className="h-screen bg-blue overflow-x-hidden">
      <div className="px-8 lg:px-32 flex flex-col justify-center align-between">
          <h1 className="text-6xl mt-64 font-bold tracking-wide">
            Hi, my name is  
            <span className="ml-3 whitespace-nowrap bg-gradient-to-r to-green-400 from-blue-500 bg-clip-text text-transparent">
              {name}
            </span>
          </h1>
          <h1 className="text-6xl font-bold tracking-wide mt-4">I am a {this.titles}.</h1>
          <a href="#about" className="text-2xl font-bold p-0.5 mt-6 w-44 bg-gradient-to-r to-green-400 from-blue-500 via-indigo-500">
            <div className="bg-white">
              <span className="block text-center py-0.5 px-2 font-semibold bg-white font-bold bg-gradient-to-r to-green-400 from-blue-500 bg-clip-text text-transparent">
                Know more
              </span>
            </div>
          </a>
        </div>
      </section>
    );
  }
}

export default Header;

