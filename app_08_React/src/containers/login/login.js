import React, { Component } from "react";

import GenericForm from '../../components/myForm/GenericForm';
import './login.scss'

import Modal from 'react-modal'
import '../../styles/common.scss'


/**css per la modale react */
const customStyles = {
	content : {
	  top                   : '50%',
	  left                  : '50%',
	  right                 : 'auto',
	  bottom                : 'auto',
	  marginRight           : '0%',
	  transform             : 'translate(-50%, -50%)'
	}
  };

  
class Login extends Component {
  constructor(props) {
	  super(props);
		this.state = {
			modalIsOpen: true
		}  
	}
	
	openModal(){
		this.setState({modalIsOpen:true})
	}

	closeModal(){
		this.setState({modalIsOpen:false})
	}

	render() {
		return (
			<div className="basic-class">
				<Modal 
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.openModal.bind(this)}
					style={customStyles}
					className="Modal"
					overlayClassName="Overlay"
					contentLabel="Bella LI"
				>
				
					<GenericForm 
						typeInputOne = "text"
						placeholderOne = "push your name"
						typeInputTwo = "password"
						placeholderTwo = "and your password"
						class_btn = "btn-default"
						placeholderButton = "To Enter"
					/> 

				</Modal>
				

			</div>
		);
	}
}


export default Login;