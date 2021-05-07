import './App.css';
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";
import Navbar from '../src/components/Navbar/Navbar'

const App = (props) => {
    return <div>
        <UsersContainer/>
        <Navbar/>
    </div>

}

export default App;
