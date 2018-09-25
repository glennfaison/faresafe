import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signup } from '../store/actions';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit() {
    let formInfo = {};
    for (let refName in this.refs) {
      formInfo[refName] = ReactDOM.findDOMNode(this.refs[refName]).value;
    }console.log(formInfo)
    this.props.dispatch(signup(formInfo));
  }
  render() {
    let containerClassName = "mx-auto border border-light rounded p-4";
    if (this.props.hidden) { containerClassName = "d-none"; }
    return (
      <form className={containerClassName} onSubmit={e => e.preventDefault()}>
        <h2 className="text-center">SIGN UP</h2>
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
              onClick={this.submit}>Signup</button>
          </div>
        </div>
        <hr className="mx-3 mt-3" />
        <small className="text-center align-content-center">
          <div>Already have an account?</div>
          <div>
            <Link to="#" className="btn btn-sm btn-link"
              onClick={() => { this.props.hideThis("signup") }}>
              login
            </Link>
          </div>
        </small>
      </form>
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