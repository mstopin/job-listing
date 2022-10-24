import { useJobs } from '../../../../hooks/useJobs';

import { Job } from '../Job';

export default function JobList() {
  const jobs = useJobs();

  return (
    <div className="text-text dark:text-text-dark mx-auto max-w-[768px] xl:max-w-[986px]">
      <div className="px-4">
        <p className="font-bold text-xl xl:text-2xl">
          <span>{jobs.total ?? 0} results</span>
        </p>
        <div className="mt-3 xl:mt-6">
          <div className="w-full h-[1px] border-b border-[#989ea7] border-solid" />
        </div>
      </div>
      <div className="mt-10">
        {jobs.jobs.map((j) => (
          <div className="mb-12 xl:mb-6" key={j.id}>
            <Job {...j} />
          </div>
        ))}
      </div>
    </div>
  );
}
