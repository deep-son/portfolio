import React from "react";
import { Link } from 'react-router-dom';
import About from "./components/About";

const Top = () => {
  
  return (
    <div className="header">
      <div className="header__menu">
        <ul className="flex px-8 lg:px-32 gap-x-10 content-center leading-0 h-0">
        <li className="mt-12 cursor-pointer"> <h3>About</h3>
              <a href={"#"}><Link to=""
              </a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Top;