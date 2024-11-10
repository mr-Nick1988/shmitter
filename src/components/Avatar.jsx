
import { useState, useContext } from 'react';
import { TwitterContext } from '../utils/context.js';

const Avatar = ({ size }) => {
    const { user, changeAvatar } = useContext(TwitterContext);
    const [modalOpen, setModalOpen] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState(user.avatar);


    const avatarClick = () => {
        setModalOpen(true);
    };


    const ModalClose = () => {
        setModalOpen(false);
    };


    const handleChangeAvatar = () => {
        if (avatarUrl.trim()) {
            changeAvatar(avatarUrl);
            setModalOpen(false);
        }
    };

    return (
        <div>
            <img
                className={`user-avatar ${size ?? ''}`}
                src={user.avatar}
                alt={user.name}
                onClick={avatarClick}
            />

            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Add new avatar URL</h2>
                        <input
                            type="text"
                            value={avatarUrl}
                            onChange={(e) => setAvatarUrl(e.target.value)}
                            placeholder="Enter Avatar URL"
                        />
                        <div className="modal-actions">
                            <button onClick={ModalClose}>Cancel</button>
                            <button onClick={handleChangeAvatar}>OK</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Avatar;




// import {useContext} from "react";
// import {TwitterContext} from "../utils/context.js";
//
// const Avatar = ({size}) => {
//     const {user} = useContext(TwitterContext)
//
//     return (
//         <img className={`user-avatar ${size ?? ''}`}
//              src={user.avatar}
//              alt={user.name}/>
//
//     );
// };
//
// export default Avatar;