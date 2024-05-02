import React from 'react';
import firebase from './firebase';
import { auth } from "/pages/account-security/firebase.js";

const signOutButton = () =>{
<button className="xl:mx-7 mx-3 text-zinc-700 text-[1.03rem] font-semibold hover:text-cyan-700" onClick={auth.doSignOut}> 
                        Signout 
                    </button>
}
export default signOutButton;
