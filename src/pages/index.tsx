import { PageHero } from '../components/pages/index/PageHero';
import { Job } from '../components/pages/index/Job';

export default function Index() {
  return (
    <>
      <PageHero />
      <div className="mt-14 px-6">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div className="mb-12" key={idx}>
            <Job
              company="Company Inc."
              title="Senior Fullstack Developer"
              image={{
                url: 'https://picsum.photos/75',
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
      </div>
    </>
  );
}
