import React, { useState, useEffect } from 'react';
import TopBanner from './TopBanner';

const ProductList = () => {

  let [loading, setLoading] = useState(true);
  let [products, setProductList] = useState(null);
  let uniqueBrands = []

  const fetchData = async () => {
    const url = 'https://www.farfetch.com/uk/plpslice/listing-api/query?setId=9645&view=180&gender=Men';
    const response = await fetch(url);
    const data = await response.json();
    let products = data.listing.products;
    setProductList(products)
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [])

  let [filterValue, setFilterValue] = useState("");

  const showProducts = () => {
    if (loading || !products) {
      return (
        <p>Loading...</p>
      )
    }
    else {
      return (
        <div className="container">
          {!filterValue ?
            products.map(product => {
              let url = "https://www.farfetch.com" + product.url;
              return (
                <div className="product" key={product.id}>
                  <a href={url}>
                    <img onMouseOver={(e) => e.target.src = product.images.cutOut} onMouseOut={(e) => e.target.src = product.images.model} src={product.images.model} alt="" />
                    <p><strong>{product.brand.name}</strong></p>
                    <p>{product.shortDescription}</p>
                  </a>
                </div>
              )
            }) :
            products.filter(filter => filter.brand.name === filterValue).map(product => {
              let url = "https://www.farfetch.com" + product.url;
              return (
                <div className="product" key={product.id}>
                  <a href={url}>
                    <img onMouseOver={(e) => e.target.src = product.images.cutOut} onMouseOut={(e) => e.target.src = product.images.model} src={product.images.model} alt="" />
                    <p><strong>{product.brand.name}</strong></p>
                    <p>{product.shortDescription}</p>
                  </a>
                </div>
              )
            })}
        </div>
      )
    }
  }

  const updateFilter = (e) => {
    setFilterValue(e.target.value)
  }

  if (products) {
    const allBrands = [];

    products.forEach(product => {
      allBrands.push(product.brand.name)
    })

    uniqueBrands = [...new Set(allBrands)];
  }

  return (
    <div className="filter-brand">
      <TopBanner />
      <div className="input-and-clear">
        <p>Filter by brand:</p>
        <select onChange={(e) => updateFilter(e)}>
          {uniqueBrands
            &&
            uniqueBrands.map((brand, id) => {
              return (
                <option key={id} value={brand}>
                  {brand}
                </option>
              )
            })}
        </select>
        <button onClick={() => setFilterValue("")}>Clear</button>
      </div>
      {showProducts()}
    </div>
  )
}

export default ProductList;