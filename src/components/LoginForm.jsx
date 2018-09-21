import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../store/actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.hideThis = this.hideThis.bind(this);
    this.state = {containerClassName: "collapse show border border-light rounded p-4"};
    this.loginClicked = this.loginClicked.bind(this);
  }
  loginClicked() {
    let formInfo = {};
    for (let refName in this.refs) {
      let node = ReactDOM.findDOMNode(this.refs[refName]);
      formInfo[refName] = node.nodeValue;
    }
    this.props.history.replace(this.props.routes.formSubmission);
    // this.props.dispatch(login(formInfo)); console.log(formInfo)
  }
  hideThis() {
    let container = ReactDOM.findDOMNode(this.refs["login-form"]);
    let lst = container.classList.value.split(" ");
  }
  render() {
    return (
      <div className={this.state.containerClassName} id="login-form" ref="login-form">
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
              onClick={this.loginClicked}>Login</button>
          </div>
        </div>
        <hr className="mx-3 mt-3" />
        <small className="text-center align-content-center">
          <div>Don't have an account?</div>
          <div>
            <a href={"#signup-form"} data-parent={this.props.dataParent} data-toggle="collapse" data-target="#signup-form"
              aria-expanded="false" aria-controls="signup-form" onClick={this.hideThis}>
              signup
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
)(withRouter(LoginForm));