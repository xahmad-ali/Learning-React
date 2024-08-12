import React,{Children, useState} from 'react';
import UserContext from './UserContext';

const UserContextProvider=({children})=>{

    // Create as many states as needed 
    // states will be accessable anywhere in the screens // which are wrapped between it
    const [userName, setUserName ]=(null);

    return(
        <UserContext.Provider  value={{userName, setUserName}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider