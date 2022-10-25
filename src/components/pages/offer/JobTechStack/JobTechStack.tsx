import { Job as JobType } from '../../../../types/Job';

import { JobSection } from '../JobSection';

function Tech({ name }: { name: string }) {
  return (
    <div>
      <p className="font-medium text">{name}</p>
      <p className="text-sm">Advanced</p>
    </div>
  );
}

type JobTechStackProps = {
  badges: JobType['meta']['badges'];
};

export default function JobTechStack({ badges }: JobTechStackProps) {
  return (
    <JobSection title="Tech stack">
      <div className="grid grid-cols-2 gap-y-5">
        {badges.map((b) => (
          <Tech name={b} key={b} />
        ))}
      </div>
    </JobSection>
  );
}
