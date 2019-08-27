import React, {Component} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from 'rc-slider'
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import 'rc-slider/assets/index.css'
import './Navbar.css'
class Navbar extends Component {
  state = { 
    localLevel : 500,
    format: 'hex',
    open: false
   }
  change = (nwLevel) => {

    this.setState({
      localLevel: nwLevel
    }, ()=>{
      this.props.changeLevel(this.state.localLevel)
    })

  }

  changeFormat = (e) => {
    this.setState({
      format: e.target.value,
      open: true
    }, ()=>{this.props.handleChange(e)})
    
  }

  closeSnackbar = (e) =>{
this.setState({
  open: false
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
        <div className='select-container'>
          <Select value={this.state.format} onChange={this.changeFormat}>
            <MenuItem value='hex'>HEX - #ffffff </MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255) </MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar anchorOrigin={ {vertical: 'bottom', horizontal : 'left'} } 
        open={this.state.open} autoHideDuration={3000} message={<span id='message-id'>Format Changed to {this.state.format} !</span>} action={[
          <IconButton onClick={this.closeSnackbar} color='inherit' key='close'>
            <CloseIcon />
          </IconButton>
        ]} onClose={this.closeSnackbar}/>
      </nav>
     )
  }
}
 
export default Navbar