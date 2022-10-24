import { ColorModeSelector } from '../components/common/ColorModeSelector';

import { Job } from '../components/pages/index/Job';
import { JobList } from '../components/pages/index/JobList';

export default function Index() {
  return (
    <div className="relative">
      <div className="absolute top-[10px] right-[15px]">
        <ColorModeSelector />
      </div>
      <div className="py-12 px-6">
        <JobList numberResults={5}>
          {Array.from({ length: 5 }).map((_, idx) => (
            <div className="mb-12 xl:mb-6" key={idx}>
              <Job
                company="Company Inc."
                title="Senior Fullstack Developer"
                image={{
                  url: 'https://picsum.photos/150',
                }}
                salary={{
                  min: 1500,
                  max: 8500,
                  currency: 'USD',
                }}
                meta={{
                  createdAt: '1d ago',
                  workTime: 'Full Time',
                  location: 'Remote',
                  badges: ['JavaScript', 'TypeScript', 'MongoDB', 'Redis'],
                }}
              />
            </div>
          ))}
        </JobList>
      </div>
    </div>
  );
}
