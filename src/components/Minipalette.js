import React from 'react'
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {
    backgroundColor: 'white',
    margin: '.5rem',
    minWidth: '200px',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '.5rem',
    position: 'relative',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  colors: {
    backgroundColor: 'grey'

  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '.5rem',
    fontSize: '1rem',
    position: 'relative'

  },
  emoji: {
    marginLeft: '.5rem',
    fontSize: '1.5rem'
  }
}
const Minipalette = (props) => {
  const { classes, paletteName, emoji } = props
  return (
    <div className={classes.root}>
      <div className={classes.colors}>
     
      </div>
      <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span> </h5>
    </div>
  )
}

export default withStyles(styles)(Minipalette)
