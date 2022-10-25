import { JobHero } from '../../components/pages/offer/JobHero';
import { useJobs } from '../../hooks/useJobs';

export default function Offer() {
  const jobs = useJobs();

  return <div>{jobs.jobs.length && <JobHero {...jobs.jobs[0]} />}</div>;
}
