import React, { useContext } from 'react';
import AuthContext from '../../Auth/Context/AuthContext';

const Social_login = () => {
    const {signInWithGoogle} = useContext(AuthContext);
    const handleSignInWithGoogle = (e) => {
        signInWithGoogle()
        .then(result=>{
        console.log(result);
    })
    .catch(error=>{
        console.log(error.message);
    })
}
    return (
        <div>
            <button onClick={handleSignInWithGoogle} className='btn'>Google</button>
        </div>
    );
};

export default Social_login;