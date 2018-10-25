import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chat from './Chat';
import changeUserName from './actionCreators/changeUserName';
import changeUserPassword from './actionCreators/changeUserPassword';
import changeLoginStatus from './actionCreators/changeLoginStatus';

import './Login.css';

class Login extends Component {
  componentWillMount(){
    if (localStorage.getItem('state')) {
        this.props.handleLogin(true)
    }
  }
  componentDidMount(){
    if (!localStorage.getItem('state')) {
      this.props.handleLogin(false)
    }
  }

  login = (event) => {
    event.preventDefault();

    const checked = (this.props.name === 'admin' && this.props.password === 'admin') ? true : false ;
    if (checked){
      this.props.handleLogin(true)
    } else {
      alert('incorrect UserName and password')
    }
  }
  render() {
    const { name,password,login,handlePassword,handleName } = this.props;
    if (login){
      return <Chat />
    }
    return (
      <div className="form-box">
        <div className="head">Login Form</div>
        <form onSubmit={this.login}>
          <div className="form-group">
            <label className="label-control">
              Email
            </label>
            <input type="text" placeholder="User Name" value={name} onChange={handleName}/>
          </div>
          <div className="form-group">
            <label className="label-control">
              Password
            </label>
            <input type="password" placeholder="password" value={password} onChange={handlePassword}/>
          </div>
            <input type="submit" value="Login" className="btn"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ login, name, password }) => ({
  login,
  name,
  password
})

const mapDispatchToProps = (dispatch) => ({
  handlePassword(event){
    dispatch(changeUserPassword(event.target.value))
  },
  handleName(event){
    dispatch(changeUserName(event.target.value))
  },
  handleLogin(input){
    dispatch(changeLoginStatus(input))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);
