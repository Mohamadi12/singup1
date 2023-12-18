import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

export class SingUp extends Component {
    constructor(){
        super()
        this.state={
            name:'',
            username:'',
            email:'',
            password:''
        }
        this.changeName=this.changeName.bind(this)
        this.changeUsename=this.changeUsename.bind(this)
        this.changeEmail=this.changeEmail.bind(this)
        this.changePassword=this.changePassword.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

    changeName(e){
        this.setState({
            name:e.target.val
        })
    }

    changeUsename(e){
        this.setState({
            username:e.target.val
        })
    }

    changeEmail(e){
        this.setState({
            email:e.target.val
        })
    }

    changePassword(e){
        this.setState({
            password:e.target.val
        })
    }

    onSubmit(e){
        e.preventDefault()
        const registered={
            name:this.state.name,
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        axios.post('http://localhost:5000/liste/user',registered)
              .then(res=>console.log(res.data))
       
        this.setState({
            name:'',
            username:'',
            email:'',
            password:''
        })
    }

  render() {
    return (
      <div>
        <div className="container">
            <div className="form-div">
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                    placeholder='Your Name'
                    onChange={this.changeName}
                    value={this.state.name}
                    className='form-control form-group'
                    />

                    <input type="text"
                    placeholder='Your Usename'
                    onChange={this.changeUsename}
                    value={this.state.username}
                    className='form-control form-group'
                    />

                    <input type="email"
                    placeholder='Your E-mail'
                    onChange={this.changeEmail}
                    value={this.state.email}
                    className='form-control form-group'
                    />

                    <input type="password"
                    placeholder='Your Password'
                    onChange={this.changePassword}
                    value={this.state.password}
                    className='form-control form-group'
                    />
                    <input type="submit" className='btn btn-danger btn-block' value="Submit" />
                </form>
            </div>
        </div>
      </div>
    )
  }
}

export default SingUp
