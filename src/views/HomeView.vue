<script setup lang="ts">
import { Application } from "@/models/application.model";
import ApplicationTracker from "../components/ApplicationTracker.vue";

// The application tracker should be the most recent one they have applied too.
// Get the most recent job application for this user.

var application: Application = new Application();
application.stage = "Awaiting Stage 1 Feedback";
</script>

<template>
  <main>
    <ApplicationTracker :application="application" />
  </main>
</template>
