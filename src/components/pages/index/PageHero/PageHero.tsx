import Image from 'next/image';

import { ColorModeSelector } from '../../../common/ColorModeSelector';

import heroImage from '../../../../../public/hero.svg';

export default function PageHero() {
  return (
    <div
      className="h-[100px] bg-secondary relative"
      data-testid="page-hero-container"
    >
      <Image
        src={heroImage}
        alt=""
        layout="fill"
        className="object-center object-cover"
        data-testid="page-hero-image"
      />
      <div className="absolute top-[5px] right-[15px]">
        <ColorModeSelector />
      </div>
    </div>
  );
}
