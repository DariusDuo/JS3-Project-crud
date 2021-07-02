import React, { Component } from 'react';

class ShopItem extends Component {
  render() {
    const { price, title, image, category } = this.props.item;
    return (
      <div className="shop-item">
        <img src={require(`../static/shop/${category}/${image}1.jpg`).default} alt={title} />
        <h5 className="item-title">{title}</h5>
        <p className="item-price">{price} eur</p>
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
