import React, {useState} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import {v4 as uuid} from 'uuid';

function ShoppingList() {
  const [items, setItems] = useState([
    {id: uuid(), name: 'Eggs'},
    {id: uuid(), name: 'Milk'},
    {id: uuid(), name: 'Steak'},
    {id: uuid(), name: 'Water'}
  ])

  return (
    <Container>
      <Button
        color="dark"
        style={{marginBottom: '2rem'}}
        onClick={() => {
          const name = prompt('Enter Item')
          if (name) {
            setItems([...items, {id: uuid(), name}])
          }
        }}
      >
        Add Item
      </Button>
      <ListGroup className="list-group">
          {items.map(({id, name}) => (
            <ListGroupItem key={id}>
              {name}
              <Button
                className="remove-btn"
                color="danger"
                size="sm"
                onClick={() => {
                  setItems(items.filter(item => item.id !== id))
                }}
              >&times;</Button>
            </ListGroupItem>
          ))}
      </ListGroup>
    </Container>
  );
}

export default ShoppingList;
