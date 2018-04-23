import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'sw2x'
    }
  }
  render () {
    return (<div className='home'>
        <div className='Aligner'>
          <div className='Aligner-item'>
            <h1>Sw2x ReactJs Starter kit</h1>
            <div className='menu'>
              <ul>
                <li><a href='https://reactjs.org/docs/hello-world.html' target='new'>Documentation</a></li>
              </ul>
            </div>
            <div className='version-num'>
              version 1.0
            </div>
            <br />
            <a className='button' href='https://instagram.com/sw2x' data-icon='octicon-star' data-style='mega'>Instagram</a>
          </div>
        </div>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
