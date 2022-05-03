import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

const Personal = () => {
  const { user, loading } = useContext(UserContext);

  return (
    <>
      <div className="col-12 p-0 text-center mt-5">
        <label>
          <h4>
            <strong>Account Settings</strong>
          </h4>
        </label>
        <p>Manage all account details here</p>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <div className="card c-bs">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <h4 className="card-title">Personal informations</h4>
                  <p>
                    Some info may be visible to recruiters if visibility
                    enabled.
                  </p>
                </div>
                <div className="col-6 text-right">
                  <img
                    src="https://www.gstatic.com/identity/boq/accountsettingsmobile/aboutme_scene_316x112_371ea487b68d0298cc54522403223de1.png"
                    alt="Recruiter"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="card text-center ml-auto mr-auto"
                    style={{ width: '13rem', minHeight: 'auto' }}
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <button type="button" className="btn btn-primary">
                        Upload image
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>First name</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Last name</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="1234 Main St"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Address 2</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apartment, studio, or floor"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>City</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Zip</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>State</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Country</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="m-0" />
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <p>
                    Please check before submitting (previously saved resume Info
                    will not be changed)
                  </p>
                </div>
                <div className="col-6 text-right">
                  <a href="#" className="btn btn-lg btn-primary">
                    Update
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
