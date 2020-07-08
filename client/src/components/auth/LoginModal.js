import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink
} from 'reactstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {login} from "../../redux/actions/authActions";
import {clearErrors} from "../../redux/actions/errorAction";


function LoginModal({isAuthenticated, error, login, clearErrors}) {
  const [state, setState] = useState({
    modal: false,
    email: '',
    password: '',
    msg: null
  })

  useEffect(() => {
    if (error.id === 'LOGIN_FAIL') {
      setState({
        ...state,
        msg: error.msg.msg
      })
    } else {
      setState({
        ...state,
        msg: null
      })
    }

    if (state.modal) {
      if (isAuthenticated) {
        toggle()
      }
    }

  }, [error, isAuthenticated])

  function toggle() {
    clearErrors()

    setState({
      ...state,
      modal: !state.modal
    })
  }

  function onChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function onSubmit(e) {
    e.preventDefault()

    const {email, password} = state

    login({email, password})
  }

  return (
    <div>
      <NavLink onClick={toggle} href="#">Login</NavLink>
      <Modal
        isOpen={state.modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          { state.msg ? <Alert color="danger">{state.msg}</Alert> : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-3"
                onChange={onChange}/>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={onChange}/>
              <Button
                color="dark"
                style={{marginTop: '2rem'}}
                block
              >
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

LoginModal.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  }
}

export default connect(mapStateToProps, {login, clearErrors})(LoginModal);
