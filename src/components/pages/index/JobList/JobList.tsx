import { PropsWithChildren } from 'react';

type JobListProps = PropsWithChildren<{
  numberResults: number;
}>;

export default function JobList({ numberResults, children }: JobListProps) {
  return (
    <div className="text-[#57606D] mx-auto max-w-[768px] xl:max-w-[986px]">
      <div className="px-4">
        <p className="font-bold text-xl xl:text-2xl">
          <span>{numberResults} results</span>
        </p>
        <div className="mt-3 xl:mt-6">
          <div className="w-full h-[1px] border-b border-[#989ea7] border-solid" />
        </div>
      </div>
      <div className="mt-10">{children}</div>
    </div>
  );
}
