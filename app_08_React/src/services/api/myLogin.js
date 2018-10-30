import axios from 'axios';

export default function LoginMe(username, password, context){
    const params = {"email" : username, "password": password };
    const option = {
        method : 'POST',
        data : params,
        url : "https://reqres.in/api/login"
    };
    axios(option).then((response) =>{
        sessionStorage.setItem('token', response.data.token)
        // <Redirect to="/UserList" />
        context.redirectToUserList();
       
    }).catch(error =>{
        alert(error)
    })
}