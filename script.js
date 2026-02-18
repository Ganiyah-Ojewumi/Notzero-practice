async function getData() {
  const main = document.querySelector("main");
  try {
    const response = await fetch("https://dev.to/api/articles");
    const data = await response.json();

    data.forEach((element) => {
      const article = document.createElement("article");
      article.className = "post";

      const date = new Date(element.published_at);

      const formatted = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      article.innerHTML = `<section class="image-section">
            <img src="${element.social_image}" alt= "social image" class="social-image">
        </section>
            <section class="text-section">
                <div class="tag-title">
                    <div class="hashtags"></div>
                    <p class="title">${element.title}</p>
                </div>
                <div class="profile">
                    <div class="profile-image">
                        <img src="${element.user.profile_image_90}" alt="profile picture" class="image-profile">
                    </div>
                    <div class="footer-text">
                        <div class="user-name">${element.user.name}</div>
                        <div class="bottom-text">
                            <span class="post-date">${formatted}</span>
                            <span class="mins-read">${element.reading_time_minutes}mins</span>
                            <span class="comment-number">${element.positive_reactions_count}</span>
                        </div>
                    </div>
                </div>
            </section>`;
      main.appendChild(article);
      const tagPara = article.querySelector(".hashtags");
      element.tag_list.forEach((tag) => {
        const mySpan = document.createElement("span");
        mySpan.innerHTML = "#" + tag;
        tagPara.append(mySpan);
      });
    });

  } catch (error) {
    console.log("Something went wrong");
  }
}

getData();
