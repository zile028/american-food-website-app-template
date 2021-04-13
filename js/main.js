// posts
var post = document.querySelectorAll(".post p");
var posts = document.querySelectorAll(".post");
var nav = document.querySelectorAll(".postNav li");

//consol.log(post[0]);
for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", function () {
    let postIndex = this.getAttribute("data-post");
    post.forEach((element) => {
      element.classList = "";
    });

    nav.forEach((element) => {
      element.classList = "";
    });

    post[postIndex - 1].className = "activePost";
    this.classList = "activeNav";
  });
}
