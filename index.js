setTheme = () => {
  let themeToggler = document.querySelector("#theme-toggler");
  themeToggler.addEventListener("change", function () {
    if (this.checked) {
      console.log("checked");
      document.documentElement.className = "dark";
    } else {
      document.documentElement.className = "light";
    }
  });
};
