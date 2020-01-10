import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Main from './main';


class App extends Component {

  render() {
    return (
      <div>
        <Provider store={store}>
          <Main />
        </Provider>

      </div>

    )
  }
}
export default App;