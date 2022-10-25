export class Appbar {
  constructor() {
    this.header = document.createElement("header");
  }

  setTheme = () => {
    let themeToggler = document.querySelector("#theme-toggler");

    themeToggler.checked = false;
    if (localStorage.getItem("darkmode")) {
      console.log(localStorage.getItem("darkmode"));
      document.documentElement.className = "dark";
      themeToggler.checked = true;
    } else {
    }
    themeToggler.addEventListener("change", function () {
      if (this.checked) {
        document.documentElement.className = "dark";
        localStorage.setItem("darkmode", true);
      } else {
        localStorage.removeItem("darkmode");
        document.documentElement.className = "light";
      }
    });
  };

  render(target) {
    this.header.classList.add("appbar");
    this.header.innerHTML = `
        <a href="index.html" class="logo">🌮
      </a>
        <nav class="links">
          <ul>
            <li>
              <a href="shop.html"> Comprar </a>
            </li>
            <li>
              <a href="#"> Carrito </a>
            </li>
            <li>
              <a href="#"> Pedidos </a>
            </li>
          </ul>
        </nav>
        <div class="actions">
          <input  type="checkbox" id="theme-toggler" value="hello"/>
      <label for="theme-toggler">
<span class="material-symbols-outlined">
light_mode
</span>
      </label>
          <button type="button">
            <span class="material-symbols-outlined"> more_vert </span>
          </button>
        </div>
    `;

    target.append(this.header);
  }
}

const appbar = new Appbar();
if (appbar) {
  const AppRoot = document.querySelector("#app");
  appbar.render(AppRoot);
  appbar.setTheme();
}
