import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Privacy extends React.Component {
  render() {
    return (
      <div className="main_container">
        <header className="main_header">
          <div className="container">
            <div className="logo">
              <a href="#"><img src="images/logo.png" alt="Logo" /></a>
            </div>
            <div className="dnwloadbtn">
              <a href="https://apps.apple.com/us/app/careerpaths/id1558302311">Download App</a>
            </div>
          </div>
        </header>
        <section className="make_career_psbl_sect">
          <div className="container">
            <div className="row">
              <div className="col-6 col-md-6 col-lg-6">
                <div className="make_career_psbl_des">
                  <span className="make_career_psbl_desimg">
                    <img src="images/logo_icon.png" alt="logo icon" />
                  </span>
                  <h1>Making impossible career connections possible!</h1>
                  <p style={{ marginBottom: '20px', marginTop: '20px' }}>Sign up to our waitlist now to find out more</p>
                  <div className="get_erly_access_form">
                    <form action="#">
                      <input type="email" name="email" placeholder="Email" />
                      <input style={{
                        width: '196px',
                        marginRight: '-20px'
                      }} type="submit" value="Get Early Access!" />
                    </form>
                    <div className="career_mentor_div">
                      <a data-tf-popup="toKmpu2Y" className="career_mentor_link">Apply to be an career mentor</a>
                      {/* <a data-tf-popup="JhPX1J2E" data-tf-hide-headers>Apply to be an career mentor</a> */}

                      <span className="help_tooltip">
                        <img src="images/help_icon.png" alt="help icon" />
                        <small>If you are working in a competitive industry and are passionate about helping others, you can apply to be a career mentor and get paid for offering career advice. Simply fill in this application form.</small>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-6">
                <div className="career_mbl_img_div">
                  <img src="images/career_mbl_img.png" alt="Career Mobile" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="career_path_lstng">
          <div className="container">
            <div className="row">
              <ul>
                <li className="col-6 col-md-6 col-lg-3">
                  <div className="career_path_lst">
                    <span className="career_path_lst_icon"><img src="images/tick_icon.png" alt="tick_icon" /></span>
                    <p>Industry experienced career mentors</p>
                  </div>
                </li>
                <li className="col-6 col-md-6 col-lg-3">
                  <div className="career_path_lst">
                    <span className="career_path_lst_icon"><img src="images/tick_icon.png" alt="tick_icon" /></span>
                    <p>One-on-one coaching sessions</p>
                  </div>
                </li>
                <li className="col-6 col-md-6 col-lg-3">
                  <div className="career_path_lst">
                    <span className="career_path_lst_icon"><img src="images/tick_icon.png" alt="tick_icon" /></span>
                    <p>Advance booking capability </p>
                  </div>
                </li>
                <li className="col-6 col-md-6 col-lg-3">
                  <div className="career_path_lst">
                    <span className="career_path_lst_icon"><img src="images/tick_icon.png" alt="tick_icon" /></span>
                    <p>Fully digital experience with in app video calling</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
              <li><Link to="/support">Support</Link></li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}
export default Privacy
