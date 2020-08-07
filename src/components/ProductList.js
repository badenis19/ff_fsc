import React, { useState, useEffect } from 'react';
import TopBanner from './TopBanner';

const ProductList = () => {

  // variables and useState hooks
  let [loading, setLoading] = useState(true);
  let [products, setProductList] = useState(null);
  let [filterValue, setFilterValue] = useState("");
  let uniqueBrands = []

  // fetching data from API and storing it using hooks
  const fetchData = async () => {
    const url = 'https://www.farfetch.com/uk/plpslice/listing-api/query?setId=9645&view=180&gender=Men';
    const response = await fetch(url);
    const data = await response.json();
    let products = data.listing.products;
    setProductList(products)
    setLoading(false)
  }

  // useEffect to fetchData every time the component renders
  useEffect(() => {
    fetchData();
  }, [])

  // function to display the products fetched (then called in the render)
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

  // function to update the filter by brand
  const updateFilter = (e) => {
    setFilterValue(e.target.value)
  }

  // creating unique list of brand so that they are no duplicated in the brand filter list 
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
            uniqueBrands.sort().map((brand, id) => {
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