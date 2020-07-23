import React, { useState, useEffect } from 'react';

const ProductList = () => {

  let [loading, setLoading] = useState(true);
  let [products, setProductList] = useState(null);

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

  let [filterValue, setFilterValue] = useState("Prada")

  const showProducts = () => {
    if (loading || !products) {
      return (
        <p>Loading...</p>
      )
    }
    else {
      return (
        <div className="container">
          {products.filter(a => a.brand.name === filterValue).map(product => {
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

  return (
    <div>
      <form >
        <select onChange={(e) => updateFilter(e)}>
          {(products && !loading)
            &&
            products.map(product => (
              <option key={product.id} value={product.brand.name}>
                {product.brand.name}
              </option>
            ))}
        </select>

      </form>

      <h1>Products below:</h1>
      {showProducts()}

    </div>
  )
}

export default ProductList;