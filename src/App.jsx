import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HeaderX from './components/headerX';
import Home from './pages/home';
import Shop from './pages/shop';
import About from './pages/about';
import Misc from './pages/misc';
import 'font-awesome/css/font-awesome.css';

class App extends Component {
  state = {
    navLinks: [
      { to: '/', title: 'Home' },
      { to: '/shop', title: 'Shop' },
      { to: '/about', title: 'About' },
      { to: '/misc', title: 'Misc' },
    ],
    shop: {
      shopCategories: [
        { _id: 1, title: 'Accessories' },
        { _id: 2, title: 'Denim' },
        { _id: 3, title: 'Footwear' },
        { _id: 4, title: 'Jeans' },
        { _id: 5, title: 'T-Shirts' },
        { _id: 6, title: 'Outerwear' },
        { _id: 7, title: 'Pants' },
      ],
      socialLink: [
        { to: 'https://www.facebook.com', icon: 'fa fa-facebook' },
        { to: 'https://www.twitter.com', icon: 'fa fa-twitter' },
        { to: 'https://www.instagram.com', icon: 'fa fa-instagram' },
      ],
    },
  };
  render() {
    return (
      <div className="App">
        <HeaderX navLinks={this.state.navLinks} />
        <div className="container">
          <Switch>
            {/* kai reikia perduoti props i route  mes tai darom su sekancia sintaxe */}
            <Route path="/shop" render={(props) => <Shop shop={this.state.shop} {...props} />} />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/misc" component={Misc} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
