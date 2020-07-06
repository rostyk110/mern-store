import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";

// redux
import {Provider} from 'react-redux'
import store from './redux/state'
import ItemModal from "./components/ItemModal";
import Container from "reactstrap/es/Container";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <Container>
          <ItemModal/>
          <ShoppingList/>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
