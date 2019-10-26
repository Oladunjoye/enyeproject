import React, { Component, Fragment } from "react";
import UserForm from "./Form";
import UserTable from "./Table";
import userReducer from "./redux/reducers/userReducer";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  users: userReducer
});

// const composeSetup = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   : compose;
// +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, composeWithDevTools());

class App extends Component {
  state = {
    displayForm: true,
    displayTable: false
  };

  displayForm = () => {
    this.setState({ displayForm: true, displayTable: false });
  };

  displayTable = () => {
    this.setState({ displayForm: false, displayTable: true });
  };

  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <div className="container">
            <nav className=" navbar">
              <p className="logo  black b f4  tc db">
                <img
                  style={{ height: "60px", marginLeft: "20px" }}
                  src="/Images/enye-logo.png"
                  alt="Company Logo"
                />
              </p>
              <div className="inner-nav flex ">
                <p onClick={this.displayForm} className=" black ">
                  Form
                </p>
                <p onClick={this.displayTable} className=" black ">
                  Table
                </p>
              </div>
            </nav>

            <div>
              {this.state.displayForm && (
                <UserForm displayTable={() => this.displayTable()} />
              )}

              {this.state.displayTable && <UserTable />}
            </div>
          </div>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
