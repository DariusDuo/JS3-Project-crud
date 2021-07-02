import React, { Component } from 'react';
import mainImage from '../static/shop/accessories/acc_hat_01_1.jpg';

class ShopItem extends Component {
  render() {
    return (
      <div className="shop-item">
        <img src={mainImage} alt="Rocco Flat Peak Cap" />
        <h5>Rocco Flat Peak Cap</h5>
        <p>99 eur</p>
      </div>
    );
  }
}

export default ShopItem;

// shopSingleItem komponentas

// padaryti kad jis atsidarytu kai mes nueina i /shop/item/1

// pasirasyti jsx ir css kad atrodytu kaip pavyzyje, dydziai
// standartiniai, spalvos 3 is masyvo

// sukurti socialIcons componenta ir panaudoti ji shopSingleItem
//ir aside

// padaryti kad paspaudus ant nuotraukos ji pasikeistu kaip pagrindine
