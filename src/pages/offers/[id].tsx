import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { JobHero } from '../../components/pages/offer/JobHero';
import { JobTechStack } from '../../components/pages/offer/JobTechStack';
import { JobDescription } from '../../components/pages/offer/JobDescription';
import { useJob } from '../../hooks/useJob';

export default function Offer() {
  const router = useRouter();
  const job = useJob({ id: (router.query.id as string) ?? '' });

  useEffect(() => {
    if (!job) {
      router.replace('/');
    }
  }, [router, job]);

  if (!job) return null;

  return (
    <div>
      <JobHero {...job} />
      <JobTechStack badges={job.meta.badges} />
      <JobDescription description={job.description} />
    </div>
  );
}
