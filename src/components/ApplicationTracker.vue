<script setup lang="ts">
import type { Application } from "@/models/application.model";

defineProps<{
  application: Application;
}>();
</script>

<template>
  <div class="container">
    <div class="circle">
      <div class="inner"></div>
    </div>

    <div class="application-stage">Stage: {{ application.stage }}</div>
  </div>

  <!-- <div class="progress-circle">
    <div class="progress-content">0%</div>
  </div> -->

  <!-- <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      What's next?
    </h3>
  </div> -->
</template>

<style scoped lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

@keyframes rainblow {
  from {
    filter: hue-rotate(0deg);
  }

  to {
    filter: hue-rotate(359deg);
  }
}
@-o-keyframes rainblow {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(359deg);
  }
}
@-moz-keyframes rainblow {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(359deg);
  }
}
@-webkit-keyframes rainblow {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(359deg);
  }
}
@keyframes rainblow2 {
  from {
    filter: hue-rotate(0deg) blur(16px);
  }
  to {
    filter: hue-rotate(359deg) blur(16px);
  }
}
@-o-keyframes rainblow2 {
  from {
    filter: hue-rotate(0deg) blur(16px);
  }
  to {
    filter: hue-rotate(359deg) blur(16px);
  }
}
@-moz-keyframes rainblow2 {
  from {
    filter: hue-rotate(0deg) blur(16px);
  }
  to {
    filter: hue-rotate(359deg) blur(16px);
  }
}
@-webkit-keyframes rainblow2 {
  from {
    filter: hue-rotate(0deg) blur(16px);
  }
  to {
    filter: hue-rotate(359deg) blur(16px);
  }
}

.circle {
  position: relative;
  min-width: 350px;
  min-height: 350px;

  &::before,
  &::after {
    // animation: rainblow 5s linear infinite;
    // -webkit-animation: rainblow 5s linear infinite;
    content: "";
    position: absolute;
    inset: 24px;
    border-radius: 50%;
    border: 40px solid #0d457d;
    cursor: pointer;
  }

  &::after {
    animation: rainblow2 5s linear infinite;
    -webkit-animation: rainblow2 5s linear infinite;
    opacity: 0.2;
    inset: 24px;
    border: 24px solid #fed1ac;
  }

  &.inner {
    width: 350px;
    height: 350px;
  }
}
// .progress-circle {
//   //   margin: 40px;
//   display: flex;
//   border-radius: 50%;
//   min-width: 250px;
//   min-height: 250px;
//   box-shadow: 0px 0px 3px 8px #463c4e;
//   background-image: conic-gradient(rgb(203 197 207) 0deg, #6a5d7521 0deg);
//   .progress-content {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: auto;
//     height: 80%;
//     width: 80%;
//     border-radius: 50%;
//     background-color: #6a5d75;
//     font-size: 26px;
//     color: #d0d0d0;
//   }
// }
//   @media (min-width: 1024px) {
//   .greetings h1,
//   .greetings h3 {
//     text-align: left;
//   }
// }
</style>
