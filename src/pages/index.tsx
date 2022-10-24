import { PageHero } from '../components/pages/index/PageHero';
import { Job } from '../components/pages/index/Job';

export default function Index() {
  return (
    <>
      <PageHero />
      <div>
        <Job />
      </div>
    </>
  );
}
