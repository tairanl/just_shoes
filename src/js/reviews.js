import { reviews } from "/data/db.json";

let str = "";

reviews.forEach((item) => {
  const { review_user_name, review_user_img, review_ranking, review_text } =
    item;

  str += `
  <div class="swiper-slide">
                <div class="review_card">
                  <div class="review_card_top">
                    <div class="profile">
                      <div class="profile_img">
                        <img src=${review_user_img} />
                      </div>
                      <div class="profile_name">
                        <h3>${review_user_name}</h3>
                        <div class="review_ranking">
                          ${review_ranking}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="review_comment">
                    ${review_text}
                  </div>
                </div>
              </div>
  `;

  document.querySelector(
    ".review_box>.swiper-container>.swiper-wrapper"
  ).innerHTML = str;
});
