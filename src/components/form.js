import React from 'react';

const initialState={
    firstName: '',
    lastName: '',
    email: '',
    firstNameValid: '',
    lastNameValid: '',
    emailValid: '',
    submitDisable: true
}

class UserForm extends React.Component {

    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            firstNameValid: '',
            lastNameValid: '',
            emailValid: '',
            submitDisable: true
        }
    }

      handleChange = (event, field) => {
        if(field === 'firstName'){
            (event.target.value.length>2) ? this.setState({firstNameValid: ' is-valid'}) : this.setState({firstNameValid: ' is-invalid'})
        }
        if(field === 'lastName'){
            (event.target.value.length>2 || event.target.value.length===0) ? (event.target.value.length>2)?this.setState({lastNameValid: ' is-valid'}) : this.setState({lastNameValid: ''}) : this.setState({lastNameValid: ' is-invalid'})
        }
        if(field === 'email'){
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            (re.test(event.target.value)) ? this.setState({emailValid: ' is-valid'}) : this.setState({emailValid: ' is-invalid'})
        }
        (this.state.firstNameValid && (this.state.lastName.length>2 || this.state.lastName.length===0) && this.state.emailValid) ? this.setState({submitDisable: false}) : this.setState({submitDisable: true})
        this.setState({[field]: event.target.value})
      }

      handleSubmit= (e) => {
        let highest = Math.max.apply(Math, this.props.users.users.users.map((o)=>{
            return o.id
        }))
          let userData = {
              id: highest + 1,
              first_name: this.state.firstName,
              last_name: this.state.lastName,
              email: this.state.email
          }

          this.props.users.addUser(userData)
          this.setState(initialState)
      }

    render(){
        return (

                <form>
                    <h2>Add User</h2>
                    <hr/>
                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <div className="input-group">
                                <input type="text" className={"form-control" + this.state.firstNameValid} id="validationServerUsername" aria-describedby="inputGroupPrepend3" required value={this.state.firstName} onChange={(event)=> this.handleChange(event, 'firstName')} placeholder="First Name" />
                                <div className="invalid-feedback">
                                    Enter atleast 2 letters
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-3">
                            <div className="input-group">
                                <input type="text" className={"form-control" + this.state.lastNameValid} id="validationServerUsername" aria-describedby="inputGroupPrepend3" value={this.state.lastName} onChange={(event)=> this.handleChange(event, 'lastName')} placeholder="Last Name" />
                                <div className="invalid-feedback">
                                Enter atleast 2 letters
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-3">
                            <div className="input-group">
                                <input type="text" className={"form-control" + this.state.emailValid} id="validationServerUsername" aria-describedby="inputGroupPrepend3" value={this.state.email} onChange={(event)=> this.handleChange(event, 'email')} required placeholder="Email" />
                                <div className="invalid-feedback">
                                    Enter a valid email
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-block btn-primary" disabled={this.state.submitDisable} type="button" onClick={(e)=> this.handleSubmit(e)}>Add User</button>
                    </div>
                </form>
        )
    }

}

export default UserForm;
