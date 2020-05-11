import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/Auth/authContext';
import Lang from '../lang';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const lang = Lang;
  const { account_l, emailAddress_L, password_L, login_L } = lang.en.loginPage;

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'invalid Credential') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password,
      });
    }
  };
  //account_l, emailAddress_L, password_L, login_L
  return (
    <div className='form-container'>
      <h1>
        {account_l} <span className='text-primary'> {login_L} </span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>{emailAddress_L}</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
          ></input>
        </div>
        <div className='form-group'>
          <label htmlFor='password'> {password_L} </label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          ></input>
        </div>

        <input
          type='submit'
          value={login_L}
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Login;
