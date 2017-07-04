import React from 'react';
import '../../_styles/global.css';

export default function App (props) {
    return (
      <div id="App">
        {props.children}
      </div>
    );
};
