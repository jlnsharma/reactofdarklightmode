import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {bg: 'mode', heading: 'heading', text: 'Light Mode'}

  changeMode = () => {
    const {bg, heading, text} = this.state
    if (text === 'Light Mode') {
      this.setState(prevState => ({
        text: 'Dark Mode',
        bg: 'mode1',
        heading: 'heading1',
      }))
    } else {
      this.setState(prevState => ({
        text: 'Light Mode',
        heading: 'heading',
        bg: 'mode',
      }))
    }
  }

  render() {
    const {bg, heading, text} = this.state
    return (
      <div className="main">
        <div className={bg}>
          <h1 className={heading}>Click To Change Mode</h1>

          <button className="btn" onClick={this.changeMode} type="button">
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
