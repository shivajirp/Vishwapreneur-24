import React from "react";
import './Button.css';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link to="https://learner.vierp.in/" target="_blank" rel="noopener noreferrer" className="button">
      <button className="space-button">Register Here</button>
    </Link>
    

  );
};

export default Button;
