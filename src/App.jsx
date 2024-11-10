import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import'./App.css'
import {useState} from "react";
import {TwitterContext} from "./utils/context.js";


const App = () => {
    // Состояние пользователя
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=retro'
    });

    const [stats, setStats] = useState({
        followers: 10,
        following: 100
    });

    // Функция для изменения аватара
    const changeAvatar = (newAvatarUrl) => {
        setUser((prevUser) => ({
            ...prevUser,
            avatar: newAvatarUrl
        }));
    };

    return (
        <div className="app">
            <TwitterContext.Provider value={{ user, stats, changeAvatar }}>
                <Navigation />
                <Body />
            </TwitterContext.Provider>
        </div>
    );
};

export default App;




//
// const App = () => {
//     const[user, setUser] = useState({
//         name:'Monster',
//         avatar:'https://gravatar.com/avatar/000?d=retro'
//     });
//
//     const[stats, setStats] = useState({
//         followers:10,
//         following:100
//     });
//
//     return (
//         <div className={'app'}>
//          <TwitterContext.Provider value={{
//              user,stats
//          }}>
//              <Navigation/>
//              <Body/>
//         </TwitterContext.Provider>
//         </div>
//     );
// };

