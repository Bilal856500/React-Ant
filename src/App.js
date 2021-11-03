import './App.css';
// import Users from "./users";
import Ant from "./ant";
import Form from "./form";
import Data from "./Forms/data";
import AntedForm from "./antedForm";
import LoginForm from "./login";
import Login from "./login";
import SignUp from "./signUp";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Navbar from "./navbar";
import NotFound from "./notFound";
import SingleData from "./singleData";


function App() {
    return (
        <div className="App">
            { /*<Ant/>*/} { /*<Form/>*/} { /*<Data/>*/} { /*<AntedForm/>*/} { /*<LoginForm/>*/}

            {/*// <Login / >*/}
            {/*    <SingleData/>*/}

            <Router>
                <Switch>
                    <Route path={'/'} exact component={SignUp}/>
                    <Route path={'/login'} exact component={Login}/>
                    <Route path={'/ant'} exact component={Ant}/>
                    <Route path={'/view/:email'} component={SingleData}/>
                    <Route path={'*'} component={NotFound}/>
                    <Route path={'/signup'} component={SignUp}/>
                    <Redirect from={'/signup'} exact to={'/'}/>
                    <Redirect to={'/not-found'}/>
                </Switch>


            </Router>


        </div>
    );
}

export default App;