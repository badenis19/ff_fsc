import React, { useState } from 'react';

const ProductList = () => {

  let url = 'https://www.farfetch.com/uk/plpslice/listing-api/query?setId=9645&view=180&gender=Men';

  let [loading, setLoading] = useState(true);
  let [products, setProductList] = useState(null);

  let res;

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

    // console.log("fd:",products)

  // const products = [
  //   {
  //     id: 1,
  //     name: "item",
  //     shortDescription: "ndindijndij",
  //     url: "/uk/shopping/men/orlebar-brown-x-007-thunderball-shirt-item-15565219.aspx?storeid=9610",
  //     image_model: "https://cdn-images.farfetch-contents.com/15/57/69/32/15576932_28139289_300.jpg",
  //     image_cutOut: "https://cdn-images.farfetch-contents.com/15/57/69/32/15576932_28139286_300.jpg",
  //   },



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
                <img onMouseOver={(e) => e.target.src = product.images.cutOut} onMouseOut={(e) => e.target.src = product.images.model} src={product.images.model} alt="" />
                <p><strong>{product.name}</strong></p>
                <p>{product.shortDescription}</p>
                {/* <a href={"https://www.farfetch.com" + product.url}>Link to Product</a> */}
                <a href={url}>Link to Product</a>
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