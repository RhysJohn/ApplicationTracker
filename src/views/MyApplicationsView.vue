<script setup lang="ts">
import Applications from "../components/applications/Applications.vue";
// Lists all the applications which they have done - coming from Gridfox

// Make this down into the following components:
// This component will be a list of applications - Application.vue
// Application.vue - Has Icon for the role - title, stage, date applied, date last updated.
</script>

<template>
  <main>
    <Applications />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
