import React, { useState } from 'react';

const ProductList = () => {

  const url = 'https://www.farfetch.com/uk/plpslice/listing-api/query?setId=9645&view=180&gender=Men';

  let [loading, setLoading] = useState(true);
  let [products, setProductList] = useState(null);

  fetch(url)
    .then(response => response)
    .then(response => response.json())
    .then(data => {
      if (data.listing.products < 0) {
        return (
          <p></p>
        )
      }
      else {
        let products = data.listing.products;
        setProductList(products)
        setLoading(false)

        return (
          <p>d</p>
        )
      }
    });

  // useEffect(() => {
  //   const fetchData = async() => {
  //     const url = 'https://www.farfetch.com/uk/plpslice/listing-api/query?setId=9645&view=180&gender=Men';
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     let products = data.listing.products;
  //     setProductList(products)
  //     setLoading(false)
  //   }
  // },[products])

  // console.log(products)

  const showProducts = () => {
    if (loading || !products) {
      return (
        <p>Loading..</p>
      )
    }
    else {
      return (
        <div className="container">
          {products.map(product => {
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



  return (
    <div>
      {/* {getDataFromUrl()} */}
      <h1>Products below:</h1>
      {showProducts()}
    </div>
  )
}

export default ProductList;