import React from 'react';
import './App.scss';
import ProductList from './components/ProductList';
import ntc from 'ntc';
import { usePalette } from 'react-palette';

// import ColorThief from 'color-thief';


//  10 products and identifies the prominent colour of each item of clothing. 
// The output of this should be a JSON file which contains an array of products 
// listing the product name, designer, description, link, image path and colour. 6
//  You may use any tool, package or plugin to achieve this.


function App() {

  // =========================

  const sendProductDetailsWithProminentColor = () => {

    
  }


  // ========================
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

  const { data, loading, error } = usePalette("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUSEhAVDxUQFRUVDw8QFRUPDw8PFRUXFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0OFQ4NFSsdFRktKysrKystLSsrKysrKysrKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOAA4QMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAAIDBf/EACIQAQEBAQAABgMBAQAAAAAAAAABEQISITFBYeFRcYGhE//EABYBAQEBAAAAAAAAAAAAAAAAAAAHBf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APC5nksHuaxVMOC0gBCKYB6EnkvEqCiv4WqgVeRptBRCVApFi91QOC0gBCKYB6EXiVBRX8LRQaivI02guUIgc9+E7bAAlSWgqzhwQDTgxQDYkIB5gXMQLT1cHUHVBqC08igZUloKs4cAGnBigGxIQDzEJEC09XBYuqBgtPIoLUcQKhU6CoNooHlnTFQWpfSBUi1QDehV0ZAQnofRUFREgNBtFA8s61BQWpfSBUjVAN6FXRkBCFANiGQgjYKQGKn2ZBJQgDipBimLVICsbjNh5nyCsZawAbFYKQGKn2YoFLkgDipoMU8rVICrcZsPMAWDGsALwI4gPYtEnmrQSlCkBRrWUC00gB0oaeYCq5i6XIINWMgelokVoJQKAo1rOEBppADpQ08wFVzF0uQWhqxkG8TKAYjBgJGRYCiwRoGV0bBICPKioLv9HgLAVUakZwBiMGAg1IsBRZ/oh9wC6Ngk8gR5UVBd/o8BYCqjUjOAziXi+UDWpLQa1k1n+gqlVgNaLRYgOpcqgtNZILmoaqB1aotA6DWf6BxCxYDWi0WIFp91yqC01kguahKga8EQ1ACqAOiU0QFp1cswDVp0ApVq04Aq7po6gLlYYMBHRVAOiU1QBDq5ZlA1adAKVatOAKu6aOoC5WGDASOIBRWhgG+gqqBQVKgfpL6WAqoKoBsWCxqQBFYrBQNDVGAfYVIFBVFQP0ksBVQVQDYcZsakARWKwWgSkCqXa0ANa0AIVzDgCnAdBlRVQDYeVVyCwSHRAVK7WgMGtSgBCuYcAU4DoMpVQDYeVVyCsGHQDSWIGfc0IEMKAWJrBgLwpC0DYeYDyC6i5g6a5gDBL5GqQBhoQIFAMTWDAPhCFoGwyA8guouYO2uYAwSmqQAWSBnmMKBSLGp6M0FKWSAsTQAGTEAao0xdAWTz0rQE8xhQKRY1GaClLJBWBoUBDIoAao0xdAWTz0rQZ8Xwl/yIIggmZVagVSQLUrUC5NEq0E0w12ASiAyEEEzptAK1JAtVVqBQ0SrQRZa7AYlEBIwgKFUBEhoA8sytMWA3oSA6sFh0F1GejYsAwGC+gGhVAcEiqA8sytRiwG9CQHVgsOguoz0agMgUV9AJZ80D/9k=")

  console.log("color:",data.vibrant)








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
      <div style={{ color: data.vibrant }}>
        Text with the vibrant color
      </div>
    </div>
  );
}

export default App;
