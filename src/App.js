import './App.css';
// import Users from "./users";
import Ant from "./ant";
import Form from "./form";
import Data from "./Forms/data";
import AntedForm from "./antedForm";
import LoginForm from "./login";
import Login from "./login";
import SignUp from "./signUp";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./navbar";


function App() {
    return ( <
        div className = "App" >



        { /*<Ant/>*/ } { /*<Form/>*/ } { /*<Data/>*/ } { /*<AntedForm/>*/ } { /*<LoginForm/>*/ }

        {/*// <Login / >*/}

<Router>
    <Navbar/>
    <Switch>
        <Route path={'/'} exact component={SignUp}/>
        <Route path={'/login'} exact component={Login}/>
        <Route path={'/ant'} exact component={Ant}/>

    </Switch>


</Router>




        </div>
    );
}

export default App;