import { products } from "/data/db.json";
// console.log(products);
// {
//   let str = "";
//   products.forEach((item) => {
//     const {
//       product_name,
//       product_img,
//       product_description,
//       price,
//       product_ranking,
//     } = item;

//     str += `
//     <div class="product_card">
//               <div class="product_img">
//                 <img src="${product_img}" />
//               </div>
//               <div class="product_info">
//                 <h3 class="product_name">${product_name}</h3>
//                 <p class="product_description">
//                   ${product_name} ${product_description}
//                 </p>
//                 <span class="product_price">$${price}</span>
//                 <div class="product_ranking">
//                  ${product_ranking}
//                 </div>
//                 <div class="addCartBtn btn">Add to cart</div>
//                 <div class="button_group">
//                   <span class="likeBtn"><i class="fa-solid fa-heart"></i></span>
//                   <span class="shareBtn"><i class="fa-solid fa-share"></i></span>
//                 </div>
//               </div>
//             </div>
//     `;

//     document.querySelector(".products>.box").innerHTML = str;
//   });
// }

// // render function
// function render(arr) {
//   let str = "";
//   arr.forEach((item) => {
//     const {
//       product_name,
//       product_img,
//       product_description,
//       price,
//       product_ranking,
//     } = item;

//     str += `
//     <div class="product_card">
//     <div class="product_img">
//       <img src="${product_img}" />
//     </div>
//     <div class="product_info">
//       <h3 class="product_name">${product_name}</h3>
//       <p class="product_description">
//         ${product_name} ${product_description}
//       </p>
//       <span class="product_price">$${price}</span>
//       <div class="product_ranking">
//        ${product_ranking}
//       </div>
//       <div class="addCartBtn btn">Add to cart</div>
//       <div class="button_group">
//         <span class="likeBtn"><i class="fa-solid fa-heart"></i></span>
//         <span class="shareBtn"><i class="fa-solid fa-share"></i></span>
//       </div>
//     </div>
//   </div>
//     `;

//     document.querySelector(".products>.box").innerHTML = str;
//   });
// }

// render(products);
