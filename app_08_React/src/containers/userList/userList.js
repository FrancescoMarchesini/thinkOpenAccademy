import React, { Component } from "react";
import './userList.scss'
import  UserListApi from '../../services/api/userList';
import ReactTable from "react-table";
import 'react-table/react-table.css'

class UserList extends Component {
  constructor(props) {
		super(props);
		
		this.state = {
			obj : [{
				name : '',
				surname : '',
				img : ''
			}],
			objs:[]
		}
	}
	
	componentDidMount(){
		UserListApi("users/2", this);
		UserListApi("users?page=2", this);
	}

	getUsers(response){
		let tmpObj = [];
		response.data.map(function(item, id){
			tmpObj.push(item)
		})
		this.setState({
			objs: tmpObj
		})
	}

	getUser(response){
		this.setState(prevState => ({
			obj:[{
				...prevState.obj,
				name : response.data.first_name,
				surname : response.data.last_name,
				img: response.data.avatar
			}]
		}))
	}

	successCallback(response, url){
	 	if(url ==  "https://reqres.in/api/users/2"){
			this.getUser(response)
		} else if(url == "https://reqres.in/api/users?page=2"){
			this.getUsers(response)
	 	 }
	}

	render() {
		  const columns = [{
				Header: () => ( <p className="header-table"> Nome</p> ),
				accessor: 'name', // String-based value accessors!
				className : 'center_text',
		  	}, {
				Header: () => ( <p className="header-table"> Cognome</p> ),
				accessor: 'surname',
				className : 'center_text'
		  	},{
				Header: () => ( <p className="header-table"> Avatar</p> ),
				Cell: row => { return <div><img height={68} src={row.value}/></div>},
				accessor: 'img',
				className : 'center_text'
			}]


			const columnstwo = [{
				Header: () => ( <p className="header-table2"> Nome</p> ),
				accessor: 'first_name', // String-based value accessors!
				className : 'center_text',
		  	}, {
				Header: () => ( <p className="header-table2"> Cognome</p> ),
				accessor: 'last_name',
				className : 'center_text'
		  	},{
				Header: () => ( <p className="header-table2"> Avatar</p> ),
				Cell: row => {
						return <div><img height={68} src={row.value}/></div>
					},
					accessor:'avatar',
					className:'center_text',
					id:'avatar'
		  	}]
			
			  
			return(
				 <div className="generic">
					<div className="space"></div>
				 	<ReactTable
					 	 defaultPageSize={1} 
						 showPaginationBottom={false}
						 data={this.state.obj}
		 				 columns={columns}
		  	 		/>
			
					<div className="space-due"></div> 
			
					<ReactTable
					 	 defaultPageSize={3} 
						 showPaginationBottom={false}
						 data={this.state.objs}
		 				 columns={columnstwo}
		  	 		/>
				
				 </div>
		   )
	}
}


export default UserList;
