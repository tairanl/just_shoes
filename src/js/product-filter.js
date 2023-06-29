import { products } from "/data/db.json";

render(products);
//  filter button
const filterBtnDom = document.querySelectorAll(".btn_filter");

const filterShowAllDom = document.querySelector(".filter_showAll");
const filterTypeDom = document.querySelectorAll(".filter_type");
const filterPriceDom = document.querySelectorAll(".filter_price");

filterTypeDom.forEach((item) => {
  item.addEventListener("click", function () {
    // if there is an existing active
    if (document.querySelector(".filter_type.active")) {
      // if the existing active is the one selected
      if (this === document.querySelector(".filter_type.active")) {
        // remove active
        document
          .querySelector(".filter_type.active")
          .classList.remove("active");
      } else {
        // remove active and add to selected one
        document
          .querySelector(".filter_type.active")
          .classList.remove("active");
        this.classList.add("active");
      }
    } else {
      this.classList.add("active");
    }
  });
});

filterPriceDom.forEach((item) => {
  item.addEventListener("click", function () {
    // if there is an existing active
    if (document.querySelector(".filter_price.active")) {
      // if the existing active is the one selected
      if (this === document.querySelector(".filter_price.active")) {
        // remove active
        document
          .querySelector(".filter_price.active")
          .classList.remove("active");
      } else {
        // remove active and add to selected one
        document
          .querySelector(".filter_price.active")
          .classList.remove("active");
        this.classList.add("active");
      }
    } else {
      this.classList.add("active");
    }
  });
});

filterBtnDom.forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector(".filter_type.active") ||
    document.querySelector(".filter_price.active")
      ? filterShowAllDom.classList.remove("active")
      : filterShowAllDom.classList.add("active");
    // if click show all ,remove all active
    if (this === filterShowAllDom) {
      filterBtnDom.forEach((item) => {
        item.classList.remove("active");
      });
      filterShowAllDom.classList.add("active");
    }
    let arr = products;
    let arr2 = [];
    // filter function
    // check show all
    if (filterShowAllDom.classList.contains("active")) {
      // arr = products;
      render(arr);
    } else if (document.querySelector(".btn_filter.active[data-index='1']")) {
      // check filter by type
      arr = products.filter(
        (item) => item.type === "running" || item.type === "universal"
      );
      render(arr);
    } else if (document.querySelector(".btn_filter.active[data-index='2']")) {
      arr = products.filter(
        (item) => item.type === "basketball" || item.type === "universal"
      );
      render(arr);
    } else if (document.querySelector(".btn_filter.active[data-index='3']")) {
      arr = products.filter(
        (item) => item.type === "football" || item.type === "universal"
      );
      render(arr);
    }

    // check filter by price
    if (document.querySelector(".filter_price.active")) {
      if (document.querySelector('.btn_filter.active[data-index="4"]')) {
        arr = arr.filter((item) => item.price <= 100);
        render(arr);
      } else if (document.querySelector('.btn_filter.active[data-index="5"]')) {
        arr = arr.filter((item) => item.price >= 100 && item.price <= 200);
        render(arr);
      }
    }
  });
});

// filter function
// render function
function render(arr) {
  let str = "";
  arr.forEach((item) => {
    const {
      product_name,
      product_img,
      product_description,
      price,
      product_ranking,
    } = item;

    str += `
    <div class="product_card">
    <div class="product_img">
      <img src="${product_img}" />
    </div>
    <div class="product_info">
      <h3 class="product_name">${product_name}</h3>
      <p class="product_description">
        ${product_name} ${product_description}
      </p>
      <span class="product_price">$${price}</span>
      <div class="product_ranking">
       ${product_ranking}
      </div>
      <div class="addCartBtn btn">Add to cart</div>
      <div class="button_group">
        <span class="likeBtn"><i class="fa-solid fa-heart"></i></span>
        <span class="shareBtn"><i class="fa-solid fa-share"></i></span>
      </div>
    </div>
  </div>
    `;

    document.querySelector(".products>.box").innerHTML = str;
  });
}

// let arr = products;
// switch (+this.dataset.index) {
//   case 1:
//     arr = arr.filter(
//       (item) => item.type === "running" || item.type === "universal"
//     );
//     break;
//   case 2:
//     arr = arr.filter(
//       (item) => item.type === "basketball" || item.type === "universal"
//     );
//     break;
//   case 3:
//     arr = arr.filter(
//       (item) => item.type === "football" || item.type === "universal"
//     );
//     break;
//   case 4:
//     arr = arr.filter((item) => item.price <= 100);
//     break;
//   case 5:
//     arr = arr.filter((item) => item.price >= 100 && item.price <= 200);
//     break;
// }
// console.log(arr);
