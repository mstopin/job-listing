import { JobHero } from '../../components/pages/offer/JobHero';
import { JobTechStack } from '../../components/pages/offer/JobTechStack';
import { JobDescription } from '../../components/pages/offer/JobDescription';
import { useJobs } from '../../hooks/useJobs';

export default function Offer() {
  const jobs = useJobs();

  if (!jobs.jobs.length) return null;

  return (
    <div>
      <JobHero {...jobs.jobs[0]} />
      <JobTechStack badges={jobs.jobs[0]!.meta.badges} />
      <JobDescription description={jobs.jobs[0]!.description} />
    </div>
  );
}
