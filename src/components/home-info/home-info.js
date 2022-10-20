const homeInfo = `
  <div class="content-item">
        <div class="image">
          <img
            src="https://images.unsplash.com/photo-1579633711380-ad5922a56153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="ingredients" />
        </div>
        <div class="about">
          <h2>Entregas Rapidas</h2>
          <p>
            Realizamos Pedidos dentro de la zona de cobertura de tu sucursal
            mas cerana.
          </p>
        </div>
      </div>

      <div class="content-item">
        <div class="image">
          <img
            src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 "
            alt="taco" />
        </div>
        <div class="about">
          <h2>Ingredientes Frescos</h2>
          <p>
            Ingredientes frescos y de gran calidad en todos nuestros pedidos
            todos los dias !
          </p>
        </div>
      </div>

      <div class="content-item">
        <div class="image">
          <img
            src="https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="plate" />
        </div>

        <div class="about">
          <h2>Muchos colores y sabores!</h2>
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
            sint cillum sint consectetur cupidatat.
          </p>
        </div>
      </div>

      <div class="content-item">
        <div class="image">
          <img
            src="https://plus.unsplash.com/premium_photo-1664476278388-1ee4dbec54f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=583&q=80"
            alt="party" />
        </div>

        <div class="about">
          <h2>Carne de Primera</h2>
          <p>
            Gran Variedad de Carnes, Especias, Ingredientes, todo lo que te
            gusta en la palma de tu mano
          </p>
        </div>
      </div>

`;

const homePageContent = document.querySelector(".content");

homePageContent.innerHTML = homeInfo;
