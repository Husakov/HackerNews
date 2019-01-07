import React, { Component } from 'react';
import TopMenu from './components/topMenu/TopMenu'
import './App.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import Content from "./components/content/Content";
import SubMenu from "./components/topMenu/SubMenu";
library.add(faUser,faSearch);


class App extends Component {
  render() {
    return (
      <div className='App'>
          <TopMenu />
          <SubMenu/>
          <Content />

      </div>
    );
  }
}

export default App;
