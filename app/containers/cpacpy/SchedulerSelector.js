import React, {Component} from 'react'
import {connect} from 'react-redux'
import clsx from 'clsx'

import {withStyles} from '@material-ui/core/styles'
import {fade} from '@material-ui/core/styles/colorManipulator'
import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase'
import Modal from '@material-ui/core/Modal'
import Popover from '@material-ui/core/Popover'
import Paper from '@material-ui/core/Paper'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Box from 'components/Box'
import {default as FlexBox} from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import Alert from '@material-ui/lab/Alert'


import {
  BulletIcon,
  SchedulerIcon,
  SchedulerConnectionRetryIcon,
} from 'components/icons'

import {BackendChip} from 'components/chips'

import {
  watchCancel as cpacpyWatchCancel,
  detect as cpacpyDetect,
  addNew as cpacpyAddNew,
  selectCurrentScheduler as setCurrentScheduler,
  test as cpacpyTestConnection,
  deleteScheduler as cpacpyDeleteScheduler,
} from 'actions/cpacpy'

import {
  selectSchedulers,
  selectCurrentScheduler,
  getTestingScheduler
} from 'reducers/cpacpy'
import {fromJS} from 'immutable'
import {Grid} from '@material-ui/core'
import TextField from "@material-ui/core/TextField";


class CpacpySchedulerSelector extends Component {

  static styles = theme => ({
    button: {
      padding: '5px 15px',
      boxSizing: 'border-box',
      minWidth: 64,
      padding: '6px 16px',
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short,
      }),

      textTransform: 'uppercase',
      fontSize: '0.9rem',
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: fade(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
        '&$disabled': {
          backgroundColor: 'transparent',
        },
      },
    },
    outlined: {
      border: `1px solid ${
        theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
      }`,
    },
    disabled: {
      border: `1px solid ${theme.palette.action.disabledBackground}`,
      color: theme.palette.action.disabled,
    },
    bullet: {
      fontSize: theme.typography.fontSize,
      marginRight: theme.spacing(),
    },
    detecting: {
      strokeWidth: 0,
      strokeOpacity: 0,
      stroke: '#DDD',
      animation: `$shinebrightlikeadiamond 1s linear infinite`,
    },
    online: {
      color: '#32CD32'
    },
    offline: {
      color: '#CD3232'
    },
    unknown: {
      color: '#666666'
    },
    paper: {
      position: 'absolute',
      width: '80vw',
      height: '80vh',
      padding: theme.spacing(1),
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      display: 'flex',
      '& > *': {
        flexGrow: 1,
      }
    },
    buttons: {
      textAlign: 'center',
      alignItems: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      '& .MuiButton-root ': {
        margin: 3,
      },
    },
    scheduler: {
      margin: theme.spacing(0, 0, 3, 0),
    },
    description: {
      margin: theme.spacing(),
      padding: theme.spacing(1, 1, 0, 1),
    },
    content: {
      overflow: 'auto'
    },
    manage: {
      textAlign: 'center',
      '& .MuiListItemText-root': {
        color: theme.palette.secondary.main,
      },
    },
    actions: {
      padding: `${theme.spacing(0, 1, 1, 1)} !important`,
      '& > *': {
        margin: theme.spacing(),
        marginTop: 0,
        paddingTop: theme.spacing(),
        borderTop: `1px solid ${theme.palette.divider}`,
        '& > *': {
          marginRight: theme.spacing(),
        },
      },
    },
    '@keyframes shinebrightlikeadiamond': {
      '0%': {strokeWidth: 0, strokeOpacity: 1},
      '80%': {strokeWidth: 6, strokeOpacity: 0},
    },
    '@keyframes shinebrightlikeadiamond': {
      '0%': {strokeWidth: 0, strokeOpacity: 0},
      '50%': {strokeWidth: 10, strokeOpacity: 0.5},
      '100%': {strokeWidth: 0, strokeOpacity: 0},
    },
  });

  static mapStateToProps = ({cpacpy: state}, props) => {
    if (!state || !state.get('schedulers') || state.get('schedulers').size < 1) {
      return {
        schedulers: fromJS([]),
        scheduler: null,
        testingScheduler: getTestingScheduler()(state),
      }
    }

    return {
      schedulers: selectSchedulers()(state),
      scheduler: props.scheduler || selectCurrentScheduler()(state).get('id'),
      testingScheduler: getTestingScheduler()(state),
    }
  }

  static mapDispatchToProps = {
    stop: cpacpyWatchCancel,
    detect: cpacpyDetect,
    addNew: cpacpyAddNew,
    setCurrent: setCurrentScheduler,
    testConnection: cpacpyTestConnection,
    deleteScheduler: cpacpyDeleteScheduler,
  }

  state = {
    fullSelector: false,
    selector: false,
    selectorAnchor: null,
    newName: "",
    newIP: "",
    newPort: "",
    newAuthKey: "",
  }

  constructor(props) {
    super(props)
    this.state.scheduler = props.scheduler
    this.nameRef = React.createRef()
    this.ipRef = React.createRef()
    this.portRef = React.createRef()
    this.authKeyRef = React.createRef()
  }

  toggleSelector = (e) => {
    e.stopPropagation()
    e.preventDefault()
    this.setState({selector: !this.state.selector, selectorAnchor: e.target})
  }

  toggleFullSelector = (e) => {
    e.stopPropagation()
    e.preventDefault()
    this.setState({fullSelector: !this.state.fullSelector})
  }

  handleClose = (e) => {
    e.stopPropagation()
    e.preventDefault()
    this.setState({selector: false})
  }

  handleFullClose = (e) => {
    e.stopPropagation()
    e.preventDefault()
    this.setState({newName: '', newIp: '', newPort: '', newAuthKey: ''})
    this.setState({fullSelector: false})
  }

  handleSelect = (scheduler) => (e) => {
    e.stopPropagation()
    e.preventDefault()
    this.setState({selector: false, scheduler})
    this.props.setCurrent(scheduler)
    this.props.detect(scheduler, this.props.schedulers.find((s) => s.get('id') === this.props.scheduler).get('authKey'), false)
    this.props.onSelect && this.props.onSelect(scheduler)
  }

  handleManage = (e) => {
    e.stopPropagation()
    e.preventDefault()
    this.setState({selector: false, fullSelector: true})
  }

  // Handler function that is invoked when the `Add new backend` button is clicked.
  handleAddBackend = (e) => {
    e.stopPropagation()
    e.preventDefault()
    const ifValid = (this.nameRef.current.reportValidity() && this.ipRef.current.reportValidity() && this.portRef.current.reportValidity())
    if (!ifValid) {
      return
    }
    const newName = this.state.newName
    const newIP = this.state.newIP
    const newPort = this.state.newPort
    const newAuthKey = this.state.newAuthKey
    this.props.addNew(newName, newIP, newPort, newAuthKey)
  }

  // When content of a textfield changes, the updated val will be recorded to states.
  handleNewName = (e) => {
    this.setState({newName: e.target.value})
  }
  handleNewIP = (e) => {
    this.setState({newIP: e.target.value})
  }
  handleNewPort = (e) => {
    this.setState({newPort: e.target.value})
  }
  handleNewAuthKey =(e) => {
    this.setState({newAuthKey: e.target.value})
  }

  handleConnectionTest = (e) => {
    e.stopPropagation()
    e.preventDefault()
    const ifValid = (this.nameRef.current.reportValidity() && this.ipRef.current.reportValidity() && this.portRef.current.reportValidity())
    if (!ifValid) {
      return
    }
    const newName = this.state.newName
    const newIP = this.state.newIP
    const newPort = this.state.newPort
    const newAuthKey = this.state.newAuthKey
    this.props.testConnection(newName, newIP, newPort, newAuthKey)
  }

  handleDeletion (e, schedulerId){
    e.stopPropagation()
    e.preventDefault()
    this.props.deleteScheduler(schedulerId)
  }

  render() {
    const {classes, schedulers, watch, stop, buttonProps: {className: buttonClassName, ...buttonProps},
      buttonMenuProps, popoverProps, testingScheduler} = this.props
    const {selector, selectorAnchor, fullSelector, scheduler: selectedScheduler} = this.state
    const {newIP, newPort} = this.state

    if (!schedulers) {
      return null
    }

    const scheduler = schedulers.find((s) => s.get('id') == selectedScheduler)
    const ifBeforeTest = newIP + ':' + newPort !== testingScheduler.get('address')

    return (
      <>
        <Modal
          disableAutoFocus
          disableEnforceFocus
          open={fullSelector}
          onClose={this.handleFullClose}
        >
          <Paper className={classes.paper}>
            <Box
              title="Schedulers"
              avatar={<SchedulerIcon/>}
              classes={{
                content: classes.content
              }}
            >
              {
                schedulers.map((s) => (
                  <Paper key={s.get('id')} elevation={3} className={classes.scheduler}>
                    <Grid container spacing={0}>
                      <Grid item xs={12} className={classes.description}>
                        <Grid container spacing={0}>
                          <Grid item xs={6}>
                            <Typography>
                              {s.get('name')}
                            </Typography>
                          </Grid>
                          <Grid item xs={5}>
                            {
                              s.get('backends')
                                .map(
                                  b =>
                                    <BackendChip
                                      key={`${s.get('id')}-${b.get('id')}`}
                                      scheduler={s.get('id')}
                                      backend={b.get('id')}
                                    />
                                )
                            }
                          </Grid>
                          <Grid item xs={1}>
                            <Button onClick={(e) => this.handleDeletion(e, s.get('id'))}>
                              <DeleteIcon/>
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                ))
              }
              <Paper key='new' elevation={3} className={classes.scheduler}>
                <Grid container spacing={0}>
                  <Grid item xs={12} className={classes.description}>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={5} md={5} >
                        <TextField
                          required
                          label="Unique Name" fullWidth margin="normal" variant="outlined"
                          onChange={this.handleNewName}
                          inputRef={this.nameRef}
                        />
                      </Grid>
                      <Grid item xs={8} sm={4} md={4}>
                        <TextField
                          required
                          label="IP Address/URL" fullWidth margin="normal" variant="outlined"
                          onChange={this.handleNewIP}
                          inputRef={this.ipRef}
                        />
                      </Grid>
                      <Grid item xs={4} sm={3} md={3}>
                        <TextField
                          required
                          label="Port" fullWidth margin="normal" variant="outlined"
                          onChange={this.handleNewPort}
                          inputRef={this.portRef}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={8} md={8}>
                        <TextField
                          required
                          label="Auth Key" fullWidth margin="normal" variant="outlined"
                          onChange={this.handleNewAuthKey}
                          inputRef={this.nameRef}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4} md={4} className={classes.buttons}>
                        <Button onClick={this.handleConnectionTest} variant="contained">
                          {
                            ifBeforeTest ? null :
                              <BulletIcon className={clsx(
                                classes.bullet,
                                testingScheduler.get('detecting') ? classes.detecting : null,
                                testingScheduler.get('success')? classes.online : (testingScheduler.get('detecting') ? classes.unknown : classes.offline)
                              )}/>
                          }
                          {
                            ifBeforeTest ? "Test Connection" :
                              (testingScheduler.get('success')? "Connected" : (testingScheduler.get('detecting') ? "Detecting" : "Offline"))
                          }
                          {
                            newIP + ':' + newPort === testingScheduler.get('address') &&
                            !testingScheduler.get('success') &&
                            !testingScheduler.get('detecting') &&
                            <SchedulerConnectionRetryIcon />
                          }
                        </Button>
                        <Button variant="contained"
                                color="secondary"
                                disabled={!(!ifBeforeTest && testingScheduler.get('success')) }
                                onClick={this.handleAddBackend}>
                          Add Scheduler
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              {
                !ifBeforeTest && testingScheduler.get('error') !== null ?
                  <Alert severity="warning">
                    {testingScheduler.get('error')}
                  </Alert> : null
              }
            </Box>
          </Paper>
        </Modal>

        <Popover
          open={selector}
          anchorEl={selectorAnchor}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          {...popoverProps}
        >
          {schedulers.map((s) => (
            <ListItem button key={s.get('id')} onClick={this.handleSelect(s.get('id'))} {...buttonMenuProps}>
              <ListItemIcon>
                <BulletIcon className={clsx(
                  classes.bullet,
                  (s.get('detecting') || s.get('polling')) ? classes.detecting : null,
                  s.get('online') === null ? classes.unknown : (s.get('online') ? classes.online : classes.offline)
                )}/>
              </ListItemIcon>
              <ListItemText primary={s.get('name')}/>
            </ListItem>
          ))}

          <ListItem button key="manage" className={classes.manage} onClick={this.handleManage} {...buttonMenuProps}>
            <ListItemText primary={'Manage'}/>
          </ListItem>
        </Popover>

        <ButtonBase
          component='a'
          className={clsx(
            classes.button,
            {
              [classes[buttonProps.variant]]: buttonProps.variant,
            },
            buttonClassName,
          )}
          onClick={scheduler && schedulers.size > 0 ? this.toggleSelector : this.handleManage}
          {...buttonProps}
        > {
          scheduler && schedulers.size > 0 ? <BulletIcon className={clsx(
            classes.bullet,
            (scheduler.get('detecting') || scheduler.get('polling')) ? classes.detecting : null,
            scheduler.get('online') === null ? classes.unknown : (scheduler.get('online') ? classes.online : classes.offline)
          )}/> : null
        }
          {scheduler && schedulers.size > 0 ? scheduler.get('name') : 'Manage schedulers'}
        </ButtonBase>
      </>
    )
  }
}

export default connect(CpacpySchedulerSelector.mapStateToProps, CpacpySchedulerSelector.mapDispatchToProps)(
  withStyles(CpacpySchedulerSelector.styles)(
    CpacpySchedulerSelector
  )
);
