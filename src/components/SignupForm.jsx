import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { signup } from '../store/actions';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.hideThis = this.hideThis.bind(this);
    this.state = {containerClassName: "collapse border border-light rounded p-4"};
  }
  // constructor(props) {
  //   super(props);
  //   this.signupClicked = this.signupClicked.bind(this);
  // }
  // signupClicked() {
  //   let formInfo = {};
  //   for (let refName in this.refs) {
  //     formInfo[refName] = ReactDOM.findDOMNode(this.refs[refName]).nodeValue;
  //   }
  //   this.props.dispatch(signup(formInfo));
  // }
  hideThis() {
    let container = ReactDOM.findDOMNode(this.refs["signup-form"]);
    let lst = container.classList.value.split(" ");
  }
  render() {
    return (
      <div className={this.state.containerClassName} id="signup-form" ref="signup-form">
        <div className="form-group">
          <label htmlFor="firstName" className="col-sm col-form-label col-form-label-sm">First Name</label>
          <div className="col-sm">
            <input type="firstName" className="form-control form-control-sm" name="firstName" ref="firstName" placeholder="First Name" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="lastNames" className="col-sm col-form-label col-form-label-sm">Last Name(s)</label>
          <div className="col-sm">
            <input type="lastNames" className="form-control form-control-sm" name="lastNames" ref="lastNames" placeholder="Last Name(s)" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="col-sm col-form-label col-form-label-sm">Email</label>
          <div className="col-sm">
            <input type="email" className="form-control form-control-sm" name="email" ref="email" placeholder="email@example.org" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="col-sm col-form-label col-form-label-sm">Password</label>
          <div className="col-sm">
            <input type="password" className="form-control form-control-sm" name="password" ref="password" placeholder="pA5$W0rd" />
          </div>
        </div>
        <div className="form-group">
          <div className="col">
            <button type="submit"
              className="btn btn-sm btn-block btn-yellow"
              onClick={this.signupClicked}>Signup</button>
          </div>
        </div>
        <hr className="mx-3 mt-3" />
        <small className="text-center align-content-center">
          <div>Already have an account?</div>
          <div>
            <a href={"#login-form"} data-parent={this.props.dataParent} data-toggle="collapse" data-target="#login-form"
              onClick={this.hideThis}>
              login
            </a>
          </div>
        </small>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { "routes": state.routes };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return { "dispatch": dispatch };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);