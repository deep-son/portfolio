import React, { Component } from "react";

class Top extends Component {
  render() {
    return (
        <div className="ui attached stackable pointing menu">
        <div className="ui container">
            <a className="item">
            <i className="home icon"></i> Home
            </a>
            
            <div className="right item">
                <div class="item">
                    <div class="ui primary button">Sign up</div>
                </div>
                <div class="item">
                    <div class="ui button">Log-in</div>
                </div>
            </div>
        </div>
        </div>

    );
      
  }
}

export default Top;
