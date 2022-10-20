export class Appbar {
  constructor() {
    this.header = document.createElement("header");
  }

  render(target) {
    this.header.classList.add("appbar");
    this.header.innerHTML = `
      <div class="logo">🌮</div>
      <nav class="links">
        <ul>
          <li><a href="index.html"> Home </a></li>
          <li><a href="shop.html"> Comprar </a></li>
          <li><a href="#"> Carrito </a></li>
          <li><a href="#"> Pedidos </a></li>
        </ul>
      </nav>
      <div class="actions">
        <button type="button">
          <span class="material-symbols-outlined"> more_vert </span>
        </button>
      </div>`;

    target.append(this.header);
  }
}

const appbar = new Appbar();

const AppRoot = document.querySelector("#app");
appbar.render(AppRoot);
