import React from 'react';
import { useState } from 'react';
function App() {
  const [user, setUser ] = useState({ });

  function enviarDados(){
    console.log(user);
  }
  return <div className="container-fluid">
    <div className="row">
      <div className="col-3">
        <div className="form-group">
          <label>E-mail</label>
            <input onChange={(event) => {
              const value = event.target.value;
              setUser({
                ...user,
                email: value,
              });
            }} className='form-control' type="text"/>
        </div>

        <div className="form-group">
          <label>Password</label>
            <input onChange={(event) => {
              const value = event.target.value;
              setUser({
                ...user,
                password: value,
              });
            }} className='form-control' type="password"/>
            
        </div>

        <div className="form-group mt-4">
            <button onClick={() => enviarDados()} className="btn btn-primary">Login</button>
        </div>
        
      </div>
  </div>

  </div>
}

export default App;
