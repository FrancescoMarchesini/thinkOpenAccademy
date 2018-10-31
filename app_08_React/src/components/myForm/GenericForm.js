import React, {Component} from "react";
import PropTypes from 'prop-types';
import GenericButton from '../myButton/GenericButton'
import GenericInput from '../myInput/GenericInput'
import './form.scss'

import LoginMe from '../../services/api/myLogin'


import {
    BrowserRouter,
    HashRouter,
    Switch,
    Route,
    Redirect,
    browserHistory
} from 'react-router-dom'


class GenericForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            user: '',
            pw : '',
            redirect: false
        }

        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePw = this.handleChangePw.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.redirectToUserList = this.redirectToUserList.bind(this);
    }

    handleChangeUser(event) {
        this.setState({user: event.target.value});
      }
    

    handleChangePw(event) {
        this.setState({pw: event.target.value});
      }


    handleSubmit(event) {
        console.log('Email: ' + this.state.user + "Passowrd : " + this.state.pw);
        LoginMe(this.state.user, this.state.pw, this);
        event.preventDefault();
    }

    redirectToUserList(){
        this.setState({redirect: true })
	}
                
    render(){
        
        if(this.state.redirect){
            return( <Redirect to='/userList' />)
        }else{
            return(
                <div className="myForm">
                <GenericInput type={this.props.typeInputOne}  placeholder={this.props.placeholderOne} onChange={this.handleChangeUser}/>
                <GenericInput type={this.props.typeInputTwo} placeholder={this.props.placeholderTwo} onChange={this.handleChangePw}/>                    
                <GenericButton text={this.props.placeholderButton} action={this.handleSubmit} class_btn={this.props.class_btn}/>
                </div>
            )
        }
    }
}


GenericForm.PropTypes = {
    typeInputOne : PropTypes.string.isRequired,
    placeholderOne : PropTypes.string,   
    typeInputTwo : PropTypes.string.isRequired,
    placeholderTwo : PropTypes.string,
    class_btn : PropTypes.text,
    placeholderButton : PropTypes.string
}

export default GenericForm;