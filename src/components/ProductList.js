import React from 'react';

const ProductList = () => {

  let url = 'https://www.farfetch.com/uk/plpslice/listing-api/query?setId=9645&view=180&gender=Men';

  let res;

  fetch(url)
    .then(response => response)
    .then(response => response.json())
    .then(data => {
      console.log(data.listing.products)
      if (data.listing.products < 0) {
        // console.log("not ok")
        return (
          <p></p>
        )
      }
      else {
        // console.log("ok")
        let products = data.listing.products;
        // console.log(products)
        // products.map(product => {
        //   console.log(product)
        //   console.log(product.brand.name)
        //   console.log(product.shortDescription)
        //   console.log(product.url)
        //   console.log(product.images.cutOut)
        //   console.log(product.images.model)
        // })
        return (
          <p>d</p>
        )
      }
    });

  const products = [
    {
      id: 1,
      name: "item",
      shortDescription: "ndindijndij",
      url: "/uk/shopping/men/orlebar-brown-x-007-thunderball-shirt-item-15565219.aspx?storeid=9610",
      image_model: "https://cdn-images.farfetch-contents.com/15/57/69/32/15576932_28139289_300.jpg",
      image_cutOut: "https://cdn-images.farfetch-contents.com/15/57/69/32/15576932_28139286_300.jpg",
    },
    {
      id: 2,
      name: "item",
      shortDescription: "ndindijndij",
      url: "/uk/shopping/men/orlebar-brown-x-007-thunderball-shirt-item-15565219.aspx?storeid=9610",
      image_model: "https://cdn-images.farfetch-contents.com/15/57/69/32/15576932_28139289_300.jpg",
      image_cutOut: "https://cdn-images.farfetch-contents.com/15/57/69/32/15576932_28139286_300.jpg",
    },
    {
      id: 3,
      name: "item",
      shortDescription: "ndindijndij",
      url: "/uk/shopping/men/orlebar-brown-x-007-thunderball-shirt-item-15565219.aspx?storeid=9610",
      image_model: "https://cdn-images.farfetch-contents.com/15/57/69/32/15576932_28139289_300.jpg",
      image_cutOut: "https://cdn-images.farfetch-contents.com/15/57/69/32/15576932_28139286_300.jpg",
    },
    {
      id: 4,
      name: "item",
      shortDescription: "ndindijndij",
      url: "/uk/shopping/men/orlebar-brown-x-007-thunderball-shirt-item-15565219.aspx?storeid=9610",
      image_model: "https://cdn-images.farfetch-contents.com/15/57/69/32/15576932_28139289_300.jpg",
      image_cutOut: "https://cdn-images.farfetch-contents.com/15/57/69/32/15576932_28139286_300.jpg",
    },

  ]


  const showProducts = () => {
    if (!products) {
      return (
        <p>No products</p>
      )
    }
    else {
      return (
        <div className="container">
          {products.map(product => {
            return (
              <div className="product" key={product.id}>
                <img onMouseOver={(e) => e.target.src = product.image_cutOut} onMouseOut={(e) => e.target.src = product.image_model} src={product.image_model} alt="" />
                <p><strong>{product.name}</strong></p>
                <p>{product.shortDescription}</p>
                <a href={"https://www.farfetch.com" + product.url}>Link to Product</a>
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