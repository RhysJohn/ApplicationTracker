import type JobAdvert from "./job-advert.model";
import type User from "./user.model";

export class Application {
  id!: string;
  userId!: string;
  user!: User;
  jobAdvertId!: string;
  jobAdvert!: JobAdvert;
  stage!: string;
  applied!: Date;
  lastUpdated!: Date;
}
