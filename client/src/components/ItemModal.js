import React, {useState} from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import {connect} from 'react-redux'
import {addItems} from "../redux/actions/itemActions";


function ItemModal(props) {
  const [state, setState] = useState({
    modal: false,
    name: ''
  })


  function toggle() {
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

    const newItem = {
      name: state.name
    }

    props.addItem(newItem)
    toggle()
  }

  return (
    <div>
      {
        props.isAuthenticated ? <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={toggle}
        >Add Item</Button> : <h4>Please log in to manage items</h4>
      }


      <Modal
        isOpen={state.modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="Add shopping item"
                onChange={onChange}/>
              <Button
                color="dark"
                style={{marginTop: '2rem'}}
                block
              >
                Add item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addItems(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemModal);
