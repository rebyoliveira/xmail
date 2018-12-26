// Import React
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//apps Imports
import { composeMinimize } from '../../store/actions/compose'
import { composeMaximize } from '../../store/actions/compose'
import { composeClose } from '../../store/actions/compose'

// Package Imports
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Modal from '@material-ui/core/Modal';


// components
import MailSendBar from '../Main/MailBody/MailSendBar'
// Icons
import Minimize from '@material-ui/icons/Minimize'
import Launch from '@material-ui/icons/Launch'
import Clear from '@material-ui/icons/Clear'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  container: {
    width: 980,
    position: 'absolute',
    height: 533,
    minHeight: 250,
    maxHeight: '80%',
    float: 'left',
    display: 'block',
    zIndex: 9999,
    bottom: 0,
    right: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  containerBody: {
    width: 980,
    position: 'absolute',
    height: 533,
    },
  },
  gridBar: {
    backgroundColor: '#404040',
    width: 980,
    position: 'relative',
    height: 40,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  icon: {
    color: '#b2b2b2',
    width: 20,
    height: 20,
    margin: 5,
    padding: 2,
    alignSelf: 'center',
  },
  gridIcons: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  gridText: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  pTitle: {
    display: 'flex',
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    alignSelf: 'center',
    padding: 3,
  },
  titleForm: {
    display: 'flex',
    color: '#777',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    alignSelf: 'center',
    padding: 3,
  },
  inputForm: {
    border: '0!important',
    fontSize: 14,
    fontFamily:' "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 500,
    resize: 'none',
    webkitBoxSizing: 'border-box',
    width: '100%',
    margin: 0,
    outline: 'none',
    backgroundColor: 'white',
    color: '#404040',
    display: 'flex',
    paddingLeft: 10,
  },
  pText: {
    display: 'flex',
    color: '#404040',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 10,
    whiteSpace: 'wrap',
    alignSelf: 'center',
    padding: 3,
    height: 250,
    maxHeight: '100%'
  },
  inputTitle: {
    border: '0!important',
    fontSize: 14,
    fontFamily:' "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 500,
    marginTop: 10,
    marginBottom: 10,
    resize: 'none',
    webkitBoxSizing: 'border-box',
    width: '100%',
    margin: 0,
    outline: 'none',
    backgroundColor: 'white',
    color: '#777',
    display: 'flex',
  },
  divTitle: {
    borderBottom:'1px solid #e0e0e0',
    marginLeft: 15,
    marginRight: 15,
    position: 'relative',
    transition: 'box-shadow .15s cubic-bezier(0.4,0.0,0.2,1)',
    zIndex: 1,
  },
  mailSend: {
    maxWidth: '100%',
    width: 510,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    marginBottom: 10,
    bottom: 0,
    position: 'relative',
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography gutterBottom>Click to get the full Modal experience!</Typography>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()}>
            <Paper className={classes.container} elevation={3}>
              <Grid container className={classes.gridBar}>
                <Grid item xs={6} className={classes.gridText}>
                  <Typography className={classes.pTitle} variant="subtitle2">New Message</Typography>
                </Grid>
                <Grid item xs={6} className={classes.gridIcons}>
                  <div>
                    <Minimize className={classNames(classes.icon)} fontSize="small" />
                    <Launch className={classNames(classes.icon)} fontSize="small" />
                    <Clear className={classes.icon} fontSize="small" />
                  </div>
                </Grid>
              </Grid>

              <Grid container className={classes.containerBody}>
                <Grid item xs={6}>
                  <Typography className={classes.titleForm} variant="subtitle2">
                  From <input readOnly className={classes.inputForm} value="you@mail.com" />
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <div>
                    <Typography style={{justifyContent: 'flex-end'}} className={classes.titleForm} variant="subtitle2">Cc Bcc</Typography>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.titleForm} style={{borderBottom:'1px solid #e0e0e0'}} variant="subtitle2">
                  To <input readOnly className={classes.inputForm} />
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <div className={classes.divTitle}>
                    <input readOnly className={classes.inputTitle} placeholder="Subject" />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.pText} variant="body2" gutterBottom>
                    <textarea cols="30" rows="5" className={classes.inputForm} type="text" />
                  </Typography>
                </Grid>
              </Grid>
              <div className={classes.mailSend}>
                <MailSendBar  />
              </div>
            </Paper>
            <SimpleModalWrapped />
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
