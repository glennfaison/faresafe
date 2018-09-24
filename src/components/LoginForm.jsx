import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../store/actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit() {
    let formInfo = {};
    for (let refName in this.refs) {
      let node = ReactDOM.findDOMNode(this.refs[refName]);
      formInfo[refName] = node.nodeValue;
    }
    this.props.dispatch(login(formInfo));
  }
  render() {
    let containerClassName = "mx-auto border border-light rounded p-4";
    if (this.props.hidden) { containerClassName = "d-none"; }
    return (
      <div className={containerClassName} id="login-form" ref="login-form">
        <div className="form-group">
          <h2 className="text-center">LOGIN</h2>
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
              onClick={this.submit}>Login</button>
          </div>
        </div>
        <hr className="mx-3 mt-3" />
        <small className="text-center align-content-center">
          <div>Don't have an account?</div>
          <div>
            <Link to="#" className="btn btn-sm btn-link"
              onClick={() => { this.props.hideThis("login"); }}>
              signup
            </Link>
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
)(LoginForm);