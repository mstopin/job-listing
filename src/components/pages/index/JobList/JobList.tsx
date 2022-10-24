import { PropsWithChildren } from 'react';

type JobListProps = PropsWithChildren<{
  numberResults: number;
}>;

export default function JobList({ numberResults, children }: JobListProps) {
  return (
    <div className="text-[#57606D]">
      <div className="px-4">
        <p className="font-bold text-lg">
          <span>{numberResults} results</span>
        </p>
        <div className="mt-3">
          <div className="w-full h-[1px] border-b border-[#989ea7] border-solid" />
        </div>
      </div>
      <div className="mt-12">{children}</div>
    </div>
  );
}
