import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div style={{ fontFamily: "Cerebri Sans Book" }}>
        <div className="" style={{
          backgroundColor: '#F7F9FD'

        }} >
          <div className='md:container sm:px-4 md:px-16 flex justify-between items-center py-4'>
            <div>
              <Link to='/'> <img src='logo.png' alt='logo' className='sm:w-2/3 md:w-full' /></Link>
            </div>
            <div className='w-1/2 flex justify-end'>
              <a href="https://apps.apple.com/us/app/careerpaths/id1558302311" target='_blank'><button className='text-white sm:px-6 sm:py-2 md:px-4 md:py-2 rounded-full bg-black sm:text-xs md:text-lg font-bold hover:bg-gray-700'>Download App</button></a>
            </div>
          </div>

          <div className='md:container sm:px-4 md:px-16 flex sm:flex-col md:flex-row items-center justify-center'>
            <div className='sm:text-3xl md:text-5xl'>
              <h1 className='font-bold'>Speak to industry</h1>
              <p className='font-bold my-3'>professionals for priceless</p>
              <p className='font-bold'>career advice</p>
              <p className='text-lg text-gray-700 my-4'>Make impossible career connections possible</p>
              <p className='text-2xl font-bold' style={{ color: '#00C4FF' }}>Sign up now</p>
              <div className="flex my-2">
                <button className="bg-gray-800 hover:bg-black text-white px-5 py-2 w-48 rounded flex justify-center"
                ><a href='https://apps.apple.com/us/app/careerpaths/id1558302311' rel="noreferrer" target="_blank"><img src="/appstore.png" alt="apple"
                /></a> </button>
                <button className="bg-gray-800 hover:bg-black text-white px-5 py-2 ml-2 rounded flex w-48"
                ><a href='https://play.google.com/store/apps/details?id=com.careerpaths.mobile' rel="noreferrer" target="_blank"><img src="/googleplay.png" alt="apple"
                /></a></button>
              </div>
              {/* <button className='text-white sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full bg-blue-400 sm:text-xs md:text-lg flex items-center justify-center' style={{ backgroundColor: '#00C4FF' }}>Sign up now</button> */}
            </div>
            <div>
              <img src='mobile.png' alt='mobile' />
            </div>
          </div>
        </div>

        <div className='p-8 bg-white'>
          <div className='md:container sm:px-2 md:px-48 flex sm:flex-col-reverse md:flex-row justify-center md:items-center'>
            <div className='sm:w-full md:w-1/2'>
              <img src='mid.png' />
            </div>
            <div className='w-1/2 sm:mb-4 md:ml-8'>
              <div className='sm:text-3xl md:text-5xl'>
                <p className='font-bold'>Industry</p>
                <p className='font-bold my-3'>experienced</p>
                <p className='font-bold'>mentors</p>
              </div>
            </div>
          </div>
        </div>


        <div className='pt-8' style={{
          backgroundImage: 'url(mobileback.png)', backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',

        }}>
          <div className='md:container sm:px-2 md:px-48 flex sm:flex-col md:flex-row justify-between items-center'>
            <div className='sm:mb-4'>
              <div className='sm:text-3xl md:text-5xl'>
                <p className='font-bold'>Choose a</p>
                <p className='font-bold my-3'>mentor perfect </p>
                <p className='font-bold'>for you</p>
              </div>
            </div>
            <div>
              <img src='iphoneX.png' />
            </div>
          </div>
        </div>

        <div className='pt-8' style={{
          backgroundImage: 'url(backwhite.png)', backgroundPosition: 'center',
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',

        }}>
          <div className='md:container sm:px-2 md:px-48 flex sm:flex-col-reverse md:flex-row justify-center items-center'>
            <div className='sm:w-full md:w-1/2'>
              <img src='mobiletop.png' />
            </div>
            <div className='md:w-1/2 ml-8'>
              <div className='sm:text-3xl md:text-5xl'>
                <p className='font-bold'>1:1</p>
                <p className='font-bold my-3'>personalised</p>
                <p className='font-bold'>video sessions</p>
              </div>
            </div>
          </div>
        </div>

        <div className='pt-8' style={{
          backgroundImage: 'url(mobileback.png)', backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',

        }}>
          <div className='md:container sm:px-2 md:px-48 flex sm:flex-col md:flex-row justify-between items-center'>
            <div className='sm:mb-4'>
              <div className='sm:text-3xl md:text-5xl'>
                <p className='font-bold'>Advanced booking</p>
                <p className='font-bold my-3'>capability and in app</p>
                <p className='font-bold'>video calling</p>
              </div>
            </div>
            <div className=''>
              <img src='mobilegirl.png' />
            </div>
          </div>
        </div>

        <div className='sm:pt-4 sm:pl-4 sm:pr-4 md:pt-48 md:pl-16 md:pr-16  flex items-center justify-center bg-white w-full'>
          <div className='w-full rounded-lg p-8 flex items-center justify-center h-64 flex-col' style={{
            backgroundImage: 'url(blueback.png)', backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',

          }}>
            <p className='sm:text-xl md:text-3xl font-bold text-white'>FIND A CAREER MENTOR NOW</p>
            <div className='flex sm:flex-col md:flex-row items-center mt-4'>
              <a href="https://apps.apple.com/us/app/careerpaths/id1558302311" target='_blank' className='border-2 bg-white rounded-lg px-4 sm:mb-2 md:mb-0 '>
                <button className='text-sm py-2 bg-white text-black rounded-lg font-bold border-white border-2'>
                  Download App
                </button>
              </a>
              <button className='text-sm font-bold sm:ml-0 md:ml-2 px-4 py-2 bg-transparent text-white border-white border-2 rounded-lg'>
                Apply to be a member
              </button>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center p-16'>
          <div>
            <a href="https://www.linkedin.com/company/careerpathsio/" target='_blank'><button className='bg-blue-700 rounded-lg p-3'><img src='linkedin.svg' alt='image' className='w-6' /></button></a>
            <a href="https://www.instagram.com/careerpathsapp/" target='_blank'><button className='bg-pink-600 rounded-lg p-3 ml-2'><img src='instagram.svg' alt='image' className='w-6' /></button></a>
          </div>
          <div className='my-2'>
            <Link to="/terms-and-conditions">  <button className='px-3 text-sm text-gray-600 text-center'>Term of use</button>
            </Link>
            <Link to="/privacy-policy">
              <button className='border-l-2 px-2 text-sm text-gray-600 text-center'>Privacy Policy</button>
            </Link>
          </div>
          <p className="text-sm text-gray-600 text-center mb-3">Copyright &copy; 2021 CareerTech. All Rights Reserved</p>
        </div>

      </div>
    )
  }
}
export default Landing
