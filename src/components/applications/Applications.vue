<script setup lang="ts">
import { Application } from "@/models/application.model";
import JobAdvert from "@/models/job-advert.model";
import User from "@/models/user.model";
import ApplicationComponent from "./Application.vue";

// defineProps<{
//   //   applicantName: string;
// }>();

// Need to query this from Gridfox.
const jobAdvert = new JobAdvert();
jobAdvert.id = "1";
jobAdvert.title = "Academy Full Stack Developer 2023";
jobAdvert.description = "Full Stack Developer role for Academy 2023";
jobAdvert.role = "Developer";

const application = new Application();

application.id = "1";
application.userId = "1";
application.user = new User();
application.jobAdvertId = jobAdvert.id;
application.jobAdvert = jobAdvert;
application.lastUpdated = new Date();
application.applied = new Date();
application.stage = "CV Reviewal";

const applications: Application[] = [
  application,
  application,
  application,
  application,
];
</script>

<template>
  <div class="applications">
    <ApplicationComponent
      v-for="application in applications"
      :key="application.id"
      :application="application"
    ></ApplicationComponent>
  </div>
</template>

<style scoped lang="scss">
.applications {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
