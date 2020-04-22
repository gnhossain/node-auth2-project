import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';


class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  signup = e => {
    e.preventDefault();
    // signup to retrieve the JWT token
    // add the token to localstorage
    // route to /protected (whatever landing page)
    axiosWithAuth()
      .post('/api/register', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected');
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.signup}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <input
            type="department"
            name="department"
            value={this.state.credentials.department}
            onChange={this.handleChange}
          />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Login;