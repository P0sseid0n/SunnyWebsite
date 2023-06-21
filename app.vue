<template>
   <div id="app">
      <header>
         <div class="container">
            <NuxtLink to="/" class="title">SunnyStore</NuxtLink>

            <ul>
               <NuxtLink to="/#Home">Inicio</NuxtLink>
               <NuxtLink to="/#Services">Nossos serviços</NuxtLink>
               <NuxtLink to="/#Story">Quem somos</NuxtLink>
            </ul>


            <div>
               <NuxtLink to="/calculo" class="CTA">Faça um orçamento</NuxtLink>

               <button class="menu-icon">
                  <img src="./assets/hamburguer-icon.png" alt="Menu">
               </button>
            </div>
         </div>
      </header>
      <NuxtPage />
   </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;

   font-family: 'Inter', sans-serif;
}

:root {
   --primary-light: #48a9af;
   --primary: #48a9af;
   --primary-dark: #3c6696;
}

body {
   font-size: 16px;

   background-color: #fff;

   color: black;
}

.container {
   max-width: 1360px;
   margin: 0 auto;

   padding: 0 4%;
}

#app {
   padding-top: 96px;
   text-align: center;
}

#app header {
   position: fixed;
   width: 100%;

   background: #fff;

   top: 0px;

   border-bottom: 1px solid rgb(230, 235, 240);

   z-index: 100;
}

.CTA {
   color: white;
   background: var(--primary);

   border: none;
   border-radius: 8px;

   padding: 12px;

   font-size: 14px;
   font-weight: 500;

   cursor: pointer;

   transition: background 0.15s;

   text-decoration: none;

   &:hover {
      background: var(--primary-dark);
   }
}

#app header .container {
   display: flex;
   justify-content: space-between;
   align-items: center;

   padding-top: 16px;
   padding-bottom: 16px;

   .title {
      font-size: 32px;
      font-weight: bold;
      cursor: pointer;
      text-decoration: none;
      color: rgb(40, 50, 60);
   }

   .title:hover {
      color: var(--primary);
   }

   h1,
   button,
   .CTA {
      width: 100%;
      max-width: 192px;
      text-align: center;
   }

   >div {
      display: flex;
      align-items: center;
      gap: 32px;
   }

   ul {
      display: flex;
      align-items: center;
      padding-left: 48px;
      list-style: none;

      gap: 48px;

      a {
         color: rgb(75, 75, 75);
         text-decoration: none;
         font-weight: 500;
         padding: 6px 12px;
         border-radius: 8px;
         transition: all 0.15s;
      }

      a:hover {
         background-color: rgba(0, 0, 0, 0.05);
      }
   }

   .menu-icon {
      display: none;

      img {
         width: 32px;
      }
   }
}

@media screen and (max-width: 768px) {
   #app header .container {
      .title {
         font-size: 24px;
      }

      ul {
         display: none;
      }

      h1,
      button,
      .CTA {
         max-width: 144px;
      }

      .CTA {
         font-size: 12px;
      }

      .menu-icon {
         // display: block;
      }
   }
}
</style>