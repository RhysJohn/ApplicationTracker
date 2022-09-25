<script setup lang="ts">
defineProps<{
  applicantName: string;
}>();
</script>

<template>
  <div class="applicant-information">
    <div class="applicant-header">Hey, {{ applicantName }}</div>
  </div>
</template>

<style scoped lang="scss">
.applicant-information {
  .applicant-header {
    font-size: 24px;
  }
}
</style>
