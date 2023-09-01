import React from 'react'

import Header from './component/shared/Header/Header'
import Footer from './component/shared/Footer/Footer'
import TaskManager from './component/TaskManager/TaskManager'
import Login from './component/Login/Login'
function App() {
  return (
    <div className='container'>
      <div className='row'>
          <div className='col'>
            <Header/>
          </div>
      </div>

      <div className='row'>
        <div className='col'>
         <TaskManager/>
        {/* <Login/> */}
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <Footer/>
        </div>
      </div>

    </div>
  )
}

export default App