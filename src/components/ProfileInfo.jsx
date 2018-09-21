import React from 'react';
import { Link } from 'react-router-dom';

let ProfileInfo = (props) => {
  return (
    <section className="row">
      <div className="col-md-4 pl-4 mt-4">
        <div className="mt-5 pt-5"></div>
        <div className="alert-success px-4 pb-4">
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-transparent">
              <i className="fas fa-briefcase fa-lg fa-fw"></i>
              Software Engineer
            </li>
            <li className="list-group-item bg-transparent">
              <i className="fas fa-home fa-lg fa-fw"></i>
              Buea, Cameroon
            </li>
            <li className="list-group-item bg-transparent">
              <i className="fas fa-envelope fa-lg fa-fw"></i>
              <Link to="mailto:glennfaison@gmail.com">glennfaison@gmail.com</Link>
            </li>
            <li className="list-group-item bg-transparent">
              <i className="fas fa-phone fa-lg fa-fw"></i>
              (+237) 675 611 933
            </li>
            <li className="list-group-item bg-transparent">
              <i className="fas fa-home fa-lg fa-fw"></i>
              Buea, Cameroon
            </li>
          </ul>
          <Link to="#" className="btn btn-block btn-dark">New Quote</Link>
        </div>
      </div>
      <div className="col-md-8 pl-4 mt-4">
        <div className="alert-success px-4 pb-4">
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-transparent text-center h4 font-weight-bold">Quote History</li>
            <li className="list-group-item bg-transparent p-0 border-0">
              <form className="d-block row">
                <div className="input-group input-group-lg col-12">
                  <input type="text" className="form-control border border-dark border-right-0" autoComplete="off" name="search" id="search" placeholder="Search" aria-label="" />
                  <span className="input-group-btn">
                    <button className="btn btn-outline-dark border-left-0 rounded-right" type="button" aria-label="">
                      <i className="fas fa-search fa-lg fa-fw"></i>
                    </button>
                  </span>
                </div>
              </form>
            </li>
            <li className="list-group-item bg-transparent">Item 3</li>
            <li className="list-group-item bg-transparent">Item 1</li>
            <li className="list-group-item bg-transparent">Item 2</li>
            <li className="list-group-item bg-transparent">Item 3</li>
            <li className="list-group-item bg-transparent">Item 1</li>
            <li className="list-group-item bg-transparent">Item 2</li>
            <li className="list-group-item bg-transparent">Item 3</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;