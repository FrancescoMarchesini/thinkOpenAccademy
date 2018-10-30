/**file per scrivere tutte le rotte che saranno all'interno della nostra applicazione */
import React from 'react';
import {Provider} from "react-redux";

import Login from './containers/login/login'
import UserList from './containers/userList/userList'
import WelcomePage from './containers/welcomPage/welcomePage'

import {
    BrowserRouter,
    HashRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

//roote preivate , ovvero algonte pagine , routte sono accessiblie solo se 
//si ha il token valido

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            sessionStorage.getItem('token') ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

/**store è  l'aiuto di redux  per i routing*/
//store è lo stato generico dell'applicazione
//exact permette la single page senza il ricarico
const Routes = ({store}) =>(
    <Provider store={store}>
        {/*vera e propria navigazione di react */}
        <BrowserRouter>
            <div>
                <Route exact path="/" component={WelcomePage}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/userList" component={UserList}/>
            </div>
        </BrowserRouter>
    </Provider>
);

export default Routes;