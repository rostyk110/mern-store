import React, {useEffect} from 'react';
import {ListGroup, ListGroupItem, Button} from 'reactstrap'

import {connect} from 'react-redux'
import {deleteItems, getItems} from "../redux/actions/itemActions";
import PropTypes from 'prop-types'

function ShoppingList(props) {
  const {items} = props.item

  useEffect(() => {
    props.getItems()
  }, [items])

  return (
      <ListGroup className="list-group">
          {items.map(({_id, name}) => (
            <ListGroupItem key={_id}>
              {name}
              <Button
                className="remove-btn"
                color="danger"
                size="sm"
                onClick={() => {
                  props.deleteItem(_id)
                }}
              >&times;</Button>
            </ListGroupItem>
          ))}
      </ListGroup>
  );
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  item: state.item
})

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(getItems()),
  deleteItem: id => dispatch(deleteItems(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
