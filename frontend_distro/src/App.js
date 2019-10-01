import React, { Component } from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';
import { HashRouter, Switch,Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './MyRedux/store'

const loading = () => <div className="spinner-grow text-primary animated fadeIn pt-1 d-flex justify-content-center"></div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const LandingPage = React.lazy(() => import('./views/Landing_page/Landing_page'));
const Login = React.lazy(() => import('./views/Pages/Login/Login'));
const Register = React.lazy(() => import('./views/Pages/Register/Register'));

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
            <React.Suspense fallback={loading()}>
              <Switch>
                <Route exact path="/LandingPage" name="Login Page" render={props => <LandingPage {...props}/>} />
                <Route path="/login" name="Login Page" render={props => <Login {...props}/>} />
                <Route path="/register" name="register" render={props => <Register {...props}/>} />
                <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
              </Switch>
            </React.Suspense>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
