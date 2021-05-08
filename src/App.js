import './App.css';
import UsersContainer from "./components/Users/UsersContainer";
import Navbar from '../src/components/Navbar/Navbar'
import {Route} from "react-router-dom";

const App = () => {
    return <div className='app-wrapper'>
        <div className='app-wrapper-content'>
            <Route path='/employees'
                    render={() => <UsersContainer/>}
        />
        </div>

        <Navbar/>
    </div>

}

export default App;
