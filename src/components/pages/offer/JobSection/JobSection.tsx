type JobSectionProps = React.PropsWithChildren<{
  title: string;
}>;

export default function JobSection({ title, children }: JobSectionProps) {
  return (
    <div className="text-text dark:text-text-dark mt-4 bg-white dark:bg-secondary-dark max-w-[1056px] mx-auto">
      <div className="border-b border-[#f3f6f8] border-solid">
        <div className="px-6 py-2 xl:py-4">
          <p className="text-lg font-medium">{title}</p>
        </div>
      </div>
      <div className="px-6 py-4 xl:py-6" data-testid="job-section__children">
        {children}
      </div>
    </div>
  );
}
