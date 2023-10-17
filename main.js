import "./style.scss";
import viteLogo from "/vite.svg";

async function getProducts() {
  const response = await fetch(
    "http://medieinstitutet-wie-products.azurewebsites.net/api/products"
  );
  const products = await response.json();
  console.log(products);
  createHTML(products);
}

function createHTML(products) {
  const productsContainer = document.getElementById("productsContainer");

  for (let i = 0; i < products.length; i++) {
    const productContainer = document.createElement("div");
    productContainer.className = "productContainer";
    const imageContainer = document.createElement("div");
    imageContainer.className = "imageContainer";
    const img = document.createElement("img");
    const title = document.createElement("h4");
    const price = document.createElement("p");

    img.src = products[i].imageUrl;
    img.onerror = () => {
      img.onerror = "";
      img.src = "/vite.svg";
      return true;
    };

    title.innerHTML = products[i].name;
    price.innerHTML = products[i].price;

    imageContainer.appendChild(img);
    productContainer.appendChild(title);
    productContainer.appendChild(imageContainer);
    productContainer.appendChild(price);
    productsContainer.appendChild(productContainer);
  }
}

getProducts();
