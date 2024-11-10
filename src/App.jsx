import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import'./App.css'
import {useState} from "react";


const App = () => {
    const[user, setUser] = useState({
        name:'Monster',
        avatar:'https://gravatar.com/avatar/000?d=retro'
    });

    const[stats, setStats] = useState({
        followers:10,
        following:100
    });

    return (
        <div className={'app'}>
         <Navigation user={user}/>
         <Body user={user} stats={stats}/>
        </div>
    );
};

export default App;