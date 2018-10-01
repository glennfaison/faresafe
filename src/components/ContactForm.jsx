import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { contactUs } from '../store/actions';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit() {
    let formInfo = {};
    for (let refName in this.refs) {
      formInfo[refName] = ReactDOM.findDOMNode(this.refs[refName]).value;
    }
    this.props.dispatch(contactUs(formInfo));
  }
  render() {
    return (
      <form className={"d-block border border-light rounded p-4 mx-auto"}
        onSubmit={e => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="email" className="col-sm col-form-label col-form-label-sm">Email</label>
          <div className="col-sm">
            <input type="email" className="form-control form-control-sm" name="email" ref="email" placeholder="email@example.org" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="name" className="col-sm col-form-label col-form-label-sm">Name</label>
          <div className="col-sm">
            <input type="text" className="form-control form-control-sm" name="name" ref="name" placeholder="John Doe" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject" className="col-sm col-form-label col-form-label-sm">Subject</label>
          <div className="col-sm">
            <input type="text" className="form-control form-control-sm" name="subject" ref="subject" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message" className="col-sm col-form-label col-form-label-sm">Your Message</label>
          <div className="col-sm">
            <textarea className="form-control form-control-sm" rows="7" name="message" ref="message"></textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="col">
            <button type="submit"
              className="btn btn-sm btn-block btn-yellow"
              onClick={this.submit}>
              Submit
            </button>
          </div>
        </div>
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
)(ContactForm);