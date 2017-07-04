import React, { Component } from 'react';

export default class  NavBar extends Component {
  constructor() {
    super();
    this.NavToggle = this.NavToggle.bind(this);

    this.state = {
      nav_open: false
    }
  }

  NavToggle() {
    this.setState({
      nav_open: !this.state.nav_open
    });
  }

  render() {
    const { nav_open } = this.state;
    const nav_icon = nav_open ?
    <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-bars" aria-hidden="true"></i>;
    const nav_visible = nav_open ?
    'show_nav' : 'hide_nav';
    return (
      <div className={`NavBar`}>
        <div className="iconContainer">
          <a className="fb-icon" href="https://www.facebook.com/rainbowjusteam"></a>
          <a className="instagram-icon" href="https://www.instagram.com/rainbowjuscrew/"></a>
          <a className="email-icon" href="mailto:rainbowjus.crew@gmail.com"></a>
        </div>
        <div className={`${nav_visible}`}>

        </div>
        <div className="hamburger" onClick={this.NavToggle}>
          {nav_icon}
        </div>
      </div>
    );
  }

};
