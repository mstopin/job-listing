import { ColorModeSelector } from '../components/common/ColorModeSelector';

import { Job } from '../components/pages/index/Job';
import { JobList } from '../components/pages/index/JobList';

export default function Index() {
  return (
    <div className="relative">
      <div className="absolute top-[10px] right-[15px]">
        <ColorModeSelector
          containerClassName="bg:primary outline outline-1 outline-text dark:outline-text-dark"
          iconClassName="text-text dark:text-text-dark "
        />
      </div>
      <div className="py-12 px-6">
        <JobList />
      </div>
    </div>
  );
}
