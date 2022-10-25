import { Job as JobType } from '../../../../types/Job';

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
    <div className="text-text mt-4 bg-white">
      <div className="border-b border-[#f3f6f8] border-solid">
        <div className="px-6 py-2">
          <p className="text-lg font-medium">Tech stack</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="grid grid-cols-2 gap-y-5">
          {badges.map((b) => (
            <Tech name={b} key={b} />
          ))}
        </div>
      </div>
    </div>
  );
}
