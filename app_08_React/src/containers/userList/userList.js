import React, { Component } from "react";
// import GenericForm from '../../components/myForm/GenericForm';
import './userList.scss'

import  UserListApi from '../../services/api/userList';

class UserList extends Component {
  constructor(props) {
		super(props);
		this.state = {
				name : '',
				surname : '',
				img : ''
		}
		
	}
	
	//stato che avviene dopo il primo rendering del componente
	componentDidMount(){
		//passo il this per accedere a chi ha fatto la chiamata
		UserListApi("users/2", this);
	 	UserListApi("users?page=2", this);
	}


	successCallback(response, url){
	 	if(url ==  "https://reqres.in/api/users/2"){
			this.setState({
					name :  response.data.first_name,
					surname :  response.data.last_name,
					img :  response.data.avatar
				})
			}
	}

	redirectUserList(response){
		debugger;
		history.push('/UserList')
	}

	render() {
		console.log(this.state.name )
		return (
			<div>UserList
				<div>{`Ola ${this.state.name}`}</div>
				<div>{`Ola ${this.state.surname}`}</div>
			</div>
		);
	}
}


export default UserList;
