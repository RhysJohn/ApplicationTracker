<script setup lang="ts">
import type { Application } from "@/models/application.model";

defineProps<{
  application: Application;
}>();

function formatDate(date: Date): string {
  return date.toLocaleString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });
}
</script>

<template>
  <div class="application">
    <div class="application-icon"></div>
    <div class="application-content">
      <div class="application-content__item title">
        {{ application.jobAdvert.title }}
      </div>
      <div class="application-content__item sub-title">
        {{ application.jobAdvert.description }}
      </div>
      <div class="application-content__item">
        <div class="label">Stage:</div>
        {{ application.stage }}
      </div>
      <div class="application-content__item">
        <div class="label">Applied Date:</div>
        {{ formatDate(application.applied) }}
      </div>
      <div class="application-content__item">
        <div class="label">Last Updated:</div>
        {{ formatDate(application.lastUpdated) }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.application {
  display: flex;
  border-radius: 8px;
  background-color: var(--vt-c-primary);
  padding: 10px;

  .application-icon {
  }

  .application-content {
    .application-content__item {
      display: flex;

      &.title {
        font-size: 20px;
      }

      &.sub-title {
        font-size: 18px;
      }

      .label {
        padding-right: 5px;
        font-weight: 600;
      }
    }
  }
}
</style>
