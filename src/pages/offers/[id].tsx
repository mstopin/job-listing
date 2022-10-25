import { JobHero } from '../../components/pages/offer/JobHero';
import { JobTechStack } from '../../components/pages/offer/JobTechStack';
import { useJobs } from '../../hooks/useJobs';

export default function Offer() {
  const jobs = useJobs();

  if (!jobs.jobs.length) return null;

  return (
    <div>
      <JobHero {...jobs.jobs[0]} />
      <JobTechStack badges={jobs.jobs[0]!.meta.badges} />
    </div>
  );
}
