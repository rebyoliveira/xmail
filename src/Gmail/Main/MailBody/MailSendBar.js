// Import React
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//apps Import
import { mailAdd } from '../../../store/actions/mails'
import { clear } from '../../../store/actions/composeForm'
import { composeClose } from '../../../store/actions/compose'

// Package Imports
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

// Icons
import DeleteIcon from '@material-ui/icons/Delete'
import TextFormat from '@material-ui/icons/TextFormat'
import InsertLink from '@material-ui/icons/InsertLink'
import AttachFile from '@material-ui/icons/AttachFile'
import Face from '@material-ui/icons/Face'
import Photo from '@material-ui/icons/Photo'
import Lock from '@material-ui/icons/Lock'
import More from '@material-ui/icons/MoreVert'

const styles = theme => ({
  container: {
    zIndex: 1,
    maxWidth: '100%',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
  },
  item: {
    display: 'flex',
  },
  buttonSend: {
    boxShadow: 'none',
    textTransform: 'none',
  },
  buttonIcon: {
    alignSelf: 'center',
    margin: 5,
    color: 'grey',
  },
  buttonIconAction: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
  }
});

function MailSendBar({
  classes, compose, mails, composeForm,
  mailAdd, clear, composeClose
  }) {
  const sendMail = () => {
    mailAdd(composeForm.to, composeForm.subject, composeForm.body)
    clear()
    composeClose()
  }
  const closeMail = () => {
    clear(composeForm.to, composeForm.subject, composeForm.body)
    composeClose()
  }
  return (
    <Grid className={classes.container}>
      <Grid item className={classes.item}>
        <Button onClick={sendMail}
          color="primary" variant="contained"
          className={classes.buttonSend}>
          Send
        </Button>
        <div>
          <TextFormat className={classes.buttonIcon} />
          <AttachFile className={classes.buttonIcon} />
          <InsertLink className={classes.buttonIcon} />
          <Face className={classes.buttonIcon} />
          <Photo className={classes.buttonIcon} />
          <Lock className={classes.buttonIcon} />
        </div>
      </Grid>
      <div className={classes.buttonIconAction}>
        <DeleteIcon onClick={closeMail} className={classes.buttonIcon} style={{cursor: 'pointer'}}/>
        <More className={classes.buttonIcon} />
      </div>
    </Grid>
  );
}

MailSendBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  const { compose, mails, composeForm } = state
  return ({
    compose,
    mails,
    composeForm
  })
}

const mapDispatchToProps = {
  mailAdd,
  clear,
  composeClose
}


export default (
  connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles)(MailSendBar)
  )
);
