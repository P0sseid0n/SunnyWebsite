<script setup lang="ts">
</script>

<template>
   <main id="Home">
      <div class="container">
         <img src="../assets/logo.png" alt="Logo">
         <div>
            <h1>Seja Bem-vindo</h1>
            <p>
               Somos a mais nova loja de Eloboosting e venda de smurfs do Brasil!
               <br>
               Contamos com serviços variados como: Elo boost, Duo boost e Coach. Também temos um grande estoque de contas
               unranked e com elo, todas com o melhor preço do mercado!
            </p>

            <NuxtLink to="/calculo" class="CTA">Faça um orçamento</NuxtLink>
            <button class="secondary">Entre no nosso discord</button>
         </div>
      </div>
   </main>
   <section id="Services">
      <div class="container">
         <h2>Nossos serviços</h2>
         <div class="cards">
            <div class="card">
               <h2>Duo Boost</h2>
               <div>
                  <p>Uma opção mais discreta e segura para quem deseja subir de ranque. Poderá jogar duo com um de nossos
                     booster e aprender novas estratégias enquanto sobe seu ranque rapidamente
                  </p>
                  <button>Quero esse!</button>
               </div>
            </div>
            <div class="card main-card">
               <h2>Elo Boost</h2>
               <div>
                  <p>A melhor opção para quem deseja um serviço mais rápido e prático. Jogaremos na sua conta até que
                     chegue
                     ao ranque desejado da maneira que formos solicitados.
                  </p>
                  <button>Quero esse!</button>
               </div>
            </div>
            <div class="card">
               <h2>Coach</h2>
               <div>
                  <p>Aprenda com um de nossos boosters novas estratégias para alcançar seu ranque desejado!</p>
                  <button>Quero esse!</button>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section id="Story">
      <div class="container">
         <h2>Por que escolher a sunny?</h2>

         <p>
            Temos os melhores preços do mercado e o melhor suporte para com o comprador. Sempre cumprimos com nossos prazos
            com muito profissionalismo, além de basearmos nosso serviço na opinião de nossos compradores.
         </p>

         <NuxtLink class="CTA">
            Saiba mais em nosso servidor do discord
         </NuxtLink>
      </div>
   </section>
   <footer>
      <div class="container">
         <div id="Logo">
            <img src="../assets/logo.png" alt="Logo">
         </div>
         <div id="SiteMap">
            <h5>Mapa</h5>
            <ul>
               <li>
                  <NuxtLink to="/#Home">Inicio</NuxtLink>
               </li>
               <li>
                  <NuxtLink to="/#Services">Nossos serviços</NuxtLink>
               </li>
               <li>
                  <NuxtLink to="/#Story">Quem somos</NuxtLink>
               </li>
            </ul>
         </div>
         <div id="Contact">
            <h5>Contato</h5>
            <ul>
               <li><a href="">Discord</a></li>
               <li><a href="">Email</a></li>
               <li><a href="">Whatsapp</a></li>
            </ul>
         </div>
      </div>
   </footer>
</template>

<style lang="scss" scoped>
#Home .container {
   margin-top: 64px;
   margin-bottom: 96px;

   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   text-align: center;

   gap: 32px;

   img {
      width: 192px;
   }

   h1 {
      font-size: 56px;
      color: rgb(40, 50, 60);
   }

   p {
      font-size: 18px;
      max-width: 640px;
      margin: 48px 0;
      color: rgb(120, 130, 140);
   }

   button,
   .CTA {
      border: none;
      border-radius: 8px;

      padding: 12px 16px;
      margin: 32px 16px;

      font-size: 16px;

      cursor: pointer;
   }


   .secondary {
      background: rgb(246, 248, 250);
      border: 1px solid rgb(210, 215, 220);

      transition: background 0.15s;

      &:hover {
         background: rgb(236, 238, 240);
      }
   }
}

section {
   margin: 192px 0;

   >.container>h2 {
      text-align: center;
      margin-top: 64px;
      margin-bottom: 48px;
      font-size: 32px;
   }
}

#Services {
   margin-top: 128px;
}

.cards {
   display: flex;
   align-items: stretch;
   flex-direction: column;
}

.card {
   // min-height: 256px;
   // max-width: 384px;

   flex: 1;

   border-radius: 8px;


   padding: 32px 32px;
   margin: 16px 0;

   background: rgb(246, 248, 250);
   border: 1px solid rgb(210, 215, 220);

   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
   gap: 16px;

   h2 {
      font-size: 48px;
      width: 256px;
      text-align: center;
   }

   >div {
      flex: 1;
      text-align: center;
   }

   p {
      margin: 32px 0;
      font-size: 15px;
      text-align: justify;
   }

   button {
      display: inline-block;

      width: 100%;
      max-width: 320px;

      margin-top: 16px;
      padding: 12px 16px;
      border: none;
      border-radius: 8px;

      background: var(--primary);
      color: white;

      font-size: 16px;
      font-weight: 600;

      cursor: pointer;

      transition: background 0.15s;
   }

   &.main-card {
      background: #48a9af;

      flex-direction: row-reverse;

      color: white;


      p {
         font-size: 16px;
      }


      button {
         background: #fff;
         color: #48a9af;
      }
   }
}

#Story {
   .container {
      text-align: center;
   }

   p {
      max-width: 768px;
      margin: 0 auto;
      text-align: justify;

      margin-bottom: 96px;
      color: rgb(100, 110, 120);

   }

   .CTA {
      font-size: 16px;
      font-weight: 500;
   }
}

footer {
   padding: 64px 0;
   background: #48a9af;
   color: white;

   img {
      width: 192px;
   }

   .container {
      display: flex;

      >div {
         flex: 1;
      }
   }

   ul {
      list-style: none;
      padding: 0;
      margin: 0;
   }

   li a {
      color: rgb(15, 15, 15);
      text-decoration: none;
      font-weight: 500;
      padding: 6px 12px;
      border-radius: 8px;
      transition: all 0.15s;
   }
}

@media screen and (max-width: 768px) {
   .cards {
      flex-direction: column;
   }
}
</style>