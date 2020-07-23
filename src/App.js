import React, { createRef } from 'react';
import './App.scss';
import ProductList from './components/ProductList';
import ntc from 'ntc';
import ColorThief from 'color-thief';
// import d from './assets/img.jpeg'

//  10 products and identifies the prominent colour of each item of clothing. 
// The output of this should be a JSON file which contains an array of products 
// listing the product name, designer, description, link, image path and colour. 6
//  You may use any tool, package or plugin to achieve this.


function App() {

  // =========================

  const size = 2;

  const products = [
    {
      name: "item"
    },
    {
      name: "item1"
    },
    {
      name: "item2"
    },
    {
      name: "item3"
    }
  ]

  // item limited to a certain number (depending on size)
  const tenProducts = products.slice(0, size).map(i => {
    console.log("::", i)
    return i;
  });

  console.log(tenProducts[0].name)

  // product name, designer, description, link, image path and colour

  // tenProducts.forEach((product) => {
  //   return {
  //     name: "CANNOT FIND",
  //     designer: product.brand.name,
  //     description: product.shortDescription,
  //     link: "https://www.farfetch.com"+ product.url., 
  //     image_path: product.images.cutOut,
  //     color: "TO DO, colorThief + ntc"
  //   }
  // })

  // TO DO: Extract dominent color from image 
  // =========================

  // let sourceImage = './assets/img.jpeg';
  // let colorThief = new ColorThief();
  // colorThief.getColor(sourceImage)
  //   .then(response => {
  //     console.log(response)
  //   })



  // / get my image url
  // var imageUrl = 'https://cdn-images.farfetch-contents.com/15/57/69/32/15576932_28139286_300.jpg';
  // // than create an image elm, the sizes are needed. 360x360 on this case
  // var image = new Image(360, 360);


  // image.onload = function () {
  //   // act only after image load
  //   console.log(image);

  //   // than colorThief and get the color value 
  //   var colorThief = new ColorThief();
  //   var color = colorThief.getColor(image);
  //   console.log("<>",color);
  // };
  // // image.src = imageUrl;


  // const imgRef = createRef();











  // hex to color name
  // ============================

  // to change hex to color name
  var ColorCode = "#008559";

  // 2. Rate the color using NTC
  var ntcMatch = ntc.name(ColorCode);

  // 3. Handle the result. The library returns an array with the identified color.

  // Text string: Color name e.g "Deep Sea"
  console.log(ntcMatch[1]);





  return (
    <div className="App">
      <ProductList />
      {/* <img
            crossOrigin={"anonymous"}
            ref={this.imgRef}
            src={
              "https://images.unsplash.com/photo-1516876437184-593fda40c7ce"
            }
            alt={"example"}
            className={"example__img"}
            onLoad={() => {
              const colorThief = new ColorThief();
              const img = this.imgRef.current;
              const result = colorThief.getColor(img, 25);
              console.log("OOOOO")
            }}
          /> */}
    </div>
  );
}

export default App;
