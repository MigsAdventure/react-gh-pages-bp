import '../../_styles/global.css';
import React from 'react';

import NavBar from '../global/NavBar';

export default function App (props) {
    return (
      <div id="App">
        <NavBar />
        {props.children}
      </div>
    );
};
