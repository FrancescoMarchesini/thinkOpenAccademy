import React, { Component } from "react";
import { Link } from 'react-router-dom'
import './welcompage.scss'

class WelcomePage extends Component {
  constructor(props) {
	  super(props);
	}
	  
	render() {
		return (
				<div className="flex-container">
						<div className="flex-item">
							<p>Click Below To </p>
							<div className="welcomLink">
								<Link to="/Login">go inside</Link>
							</div>
						</div>
				</div>
		);
	}
}


export default WelcomePage;
