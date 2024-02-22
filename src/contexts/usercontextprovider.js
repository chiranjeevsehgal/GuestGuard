import React, { useState } from 'react';
import usercontext from './usercontext';

const UserContextProvider = ({children})=>{
    const [userpro, setUserPro] = React.useState({
        name: "",
        email: "",
        number: ""
    })
    return (
        <usercontext.Provider value={{userpro, setUserPro}}>
            {children}
        </usercontext.Provider>
    )

}
export default UserContextProvider;