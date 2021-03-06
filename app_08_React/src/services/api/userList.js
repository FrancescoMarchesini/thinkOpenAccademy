import axios from 'axios';

export default function UserListApi(service, context) {
    const options = {
        method : 'GET',
        url :  `https://reqres.in/api/${service}` 
    }
    axios(options).then((response) => {
        context.successCallback(response.data, response.config.url);
    })
}