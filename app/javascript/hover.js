function hover() {
  const articles = document.querySelectorAll(".article");
  articles.forEach((article) => {
    article.addEventListener("mouseover", () => {
      article.setAttribute("style", "background-color: #f1940b");
    });

    article.addEventListener("mouseout", () => {
      article.removeAttribute("style");
    });
  });
  
}

setInterval(hover, 1000);