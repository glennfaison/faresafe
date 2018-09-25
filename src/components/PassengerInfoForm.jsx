import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

class PassengerInfoForm extends React.Component {
  submit() {
    let formInfo = {};
    for (let refName in this.refs) {
      let node = ReactDOM.findDOMNode(this.refs[refName]);
      formInfo[refName] = node.value;
    }
    // this.props.dispatch(login(formInfo));
  }
  render() {
    return (
      <form className="col-12 py-3 px-4 border border-light rounded mx-auto"
        onSubmit={e => e.preventDefault()}>
        <div className="row">
          <img src={process.env.PUBLIC_URL + "/images/logo_1x.png"}
            className="img-fluid mx-auto" alt="Fare Safe" />
        </div>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-12 col-form-label">Name</label>
          <div className="col-sm-12">
            <input type="text" className="form-control" name="name" placeholder="Name" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="address" className="col-sm-12 col-form-label">Address</label>
          <div className="col-sm-12">
            <input type="text" className="form-control" name="address"
              placeholder="Address" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="dob" className="col-sm-12 col-form-label">Customer DOB</label>
          <div className="col-sm-12">
            <input type="date" className="form-control" name="dob" placeholder="Customer DOB" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="tel" className="col-sm-12 col-form-label">Telephone</label>
          <div className="col-sm-12">
            <input type="tel" className="form-control" name="tel" placeholder="Telephone" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="passengerId" className="col-sm-12 col-form-label">Passenger
          ID</label>
          <div className="col-sm-12">
            <input type="file" name="passengerId" ref="passengerId" className="form-control"
              placeholder="Passenger ID" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="proof" className="col-sm-12 col-form-label">Proof</label>
          <div className="col-sm-12">
            <input type="file" name="proof" ref="proof" className="form-control" placeholder="Proof" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-12">
            <button type="submit" className="btn btn-block btn-yellow"
              onClick={this.submit}>Submit</button>
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
)(PassengerInfoForm);