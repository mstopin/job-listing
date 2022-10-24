import Image from 'next/image';

import heroImage from '../../../../../public/hero.svg';

export default function PageHero() {
  return (
    <div className="h-[125px] bg-secondary relative">
      <Image
        src={heroImage}
        alt=""
        layout="fill"
        className="object-center object-cover"
      />
    </div>
  );
}
