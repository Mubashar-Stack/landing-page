import './App.css';
import logo from './logo.svg'
import React from 'react';
import "react-responsive-modal/styles.css";
// import { Modal } from 'antd';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {isMobile} from 'react-device-detect';
import Landing from './Landing'
import Privacy from './Privacy'
import Terms from './Terms'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  
  renderVerification = () => {
    const VerificationHash = new URLSearchParams(window.location.search).get('hash')
    fetch(`https://careerpaths.io/api/verify/${VerificationHash}`).then(res => console.log)
    return (
      <div className="App">
        <header className="App-header">
          <img src="/user.png" className="App-logo" alt="logo" />
          <h2 className="heading">Verified.</h2>
          <p className="para">
            Voila! You have successfully verified the account. 
          </p>
        </header>
        <img src="/logo.png" className="bottom-Logo" alt="logo" />
      </div>
    )
  }

  renderMainApp = () => {
    const { open } = this.state;
    return (
      <Router>
        <Switch>
          
          <Route exact path="/">
            <Landing />
            {/* <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2 className="heading">Coming Soon</h2>
              <p>
                We are working hard to bring our website to life and it will be publically available soon. Meanwhile, download our mobile apps
              </p>
              <p className='store-icons'>
              <a href="https://play.google.com/store/apps/details?id=com.careerpaths.mobile"><img src='/google.png' className="" alt="Download from PlayStore" /></a>
              <a href="https://apps.apple.com/us/app/careerpaths/id1558302311"><img src='/playstore.png' className="" alt="Download from AppStore" /></a>
              </p>
              <p className="signup-form" onClick={this.onOpenModal}>Apply to become a professional</p>
            </header>
            <Modal
              visible={open}
              centered
              onCancel={this.onCloseModal}
              footer={null}
              bodyStyle={{
                height:'800px'
              }}
            >
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScFOowCRq4JhP0QfoZuhGFiX77CFA3Qum2T0y7mhohfdPq80Q/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </Modal> */}
            {/* <p style={{
              width: '98%',
              position: 'absolute',
              bottom: '6px',
              textAlign:'center'
            }}><Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-and-conditions">Terms and Conditions</Link> | <Link to="/support">Support</Link></p> */}
            </Route>
           
            <Route path="/privacy-policy">
              <header style={{
                'min-height': 'unset'
              }} className="App-header">
                <Link to="/">
                <img src={logo} style={{
                  height: '20vmin',
                  padding: '3vh'
                }} className="App-logo" alt="logo" />
                </Link>
                <div style={{
                  height: '100vh',
                  width: isMobile ? '90%' : '60%',
                  textAlign: 'left'
                }}>
                  <Privacy />
                </div>

              </header>
            </Route>
            <Route path="/terms-and-conditions">
              <header style={{
                'min-height': 'unset'
              }} className="App-header">
                <Link to="/">
                <img src={logo} style={{
                  height: '20vmin',
                  padding: '3vh'
                }} className="App-logo" alt="logo" />
                </Link>
                <div style={{
                  height: '100vh',
                  width: isMobile ? '90%' : '60%',
                  textAlign: 'left'
                }}>
                  <Terms />
                </div>

              </header>
            </Route>
            <Route path="/support">
              <header style={{
                'min-height': 'unset'
              }} className="App-header">
                <img src={logo} style={{
                  height: '20vmin',
                  padding: '3vh'
                }} className="App-logo" alt="logo" />
                <iframe style={{
                  height: '80vh'
                }} src="https://docs.google.com/forms/d/e/1FAIpQLSd5qSaiwH_sjoQmJ4Rq_YgOdYXRdHvNGwSxzOvjtuNlFi5uPQ/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

              </header>
            </Route>
            {/* 
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd5qSaiwH_sjoQmJ4Rq_YgOdYXRdHvNGwSxzOvjtuNlFi5uPQ/viewform?embedded=true" width="640" height="1035" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            <Modal styles={{modal: {width: '100%'}}} open={open} onClose={this.onCloseModal}>
                <ResponsiveEmbed src="https://docs.google.com/forms/d/e/1FAIpQLScFOowCRq4JhP0QfoZuhGFiX77CFA3Qum2T0y7mhohfdPq80Q/viewform?embedded=true" />
            </Modal> */}
          
          <Route >
            <Landing /></Route>
        </Switch>
      </Router>
    );
  }
  render() {
    const isEmailVerification = new URLSearchParams(window.location.search).get('email_verification')
    const VerificationHash = new URLSearchParams(window.location.search).get('hash')
    console.log(VerificationHash, isEmailVerification)
   return (
    <div>
      { (isEmailVerification && VerificationHash) && this.renderVerification()}
      { !(isEmailVerification && VerificationHash) && this.renderMainApp() }
    </div>
   )
  }
}

export default App;
