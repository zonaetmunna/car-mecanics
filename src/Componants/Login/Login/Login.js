import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
     const { user, signInWithGoogle } = useAuth()
     return (
          <div>
               <h2>plsease login</h2>
               <button onClick={signInWithGoogle} className="btn-btn-warning">Google Sign In</button>

          </div>
     );
};

export default Login;