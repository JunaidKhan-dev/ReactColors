import React, {Component} from 'react';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css'
class Navbar extends Component {
  state = { 
    localLevel : 500
   }
  change = (nwLevel) => {

    this.setState({
      localLevel: nwLevel
    }, ()=>{
      this.props.changeLevel(this.state.localLevel)
    })

    

  }
  render() { 


    return ( 
      <nav className='Navbar'>
        <div className='logo'>
          <a href="/">React Colors</a>
        </div>
        <div className='slider'>
        Level: <span className='slider-level'> {this.state.localLevel}</span>
        <Slider defaultValue={this.state.localLevel} min={100} max={900}
        onAfterChange={this.change} step={100} />
        </div>
      </nav>
     )
  }
}
 
export default Navbar