import Image from 'next/future/image';
import Link from 'next/link';
import { BsPencilSquare, BsArrowLeftSquare } from 'react-icons/bs';
import { MdWorkOutline, MdAttachMoney } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';

import { Job as JobType } from '../../../../types/Job';
import { useSalaryText } from '../../../../hooks/useSalaryText';
import { ColorModeSelector } from '../../../common/ColorModeSelector';

type JobHeroProps = Omit<JobType, 'id'>;

function JobHeroIconWithText({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center">
      <div className="mr-1.5">{icon}</div>
      <p>{text}</p>
    </div>
  );
}

export default function JobHero({
  company,
  title,
  image,
  salary,
  meta,
}: JobHeroProps) {
  const salaryText = useSalaryText(salary);

  return (
    <div className="job-hero">
      <div className="p-4 text-white">
        <div className=" h-[25px] mb-4">
          <div className="flex justify-between items-center">
            <div className="w-[25px] bg-[rgba(0,0,0,0.5)]">
              <Link href="/">
                <div className="cursor-pointer">
                  <BsArrowLeftSquare size={25} />
                </div>
              </Link>
            </div>
            <div>
              <ColorModeSelector
                containerClassName="bg:primary outline outline-1 outline-white"
                iconClassName="text-white"
              />
            </div>
          </div>
        </div>
        <div className="flex h-full items-center">
          <div className="grow">
            <div className="grow flex items-center">
              <div>
                <Image
                  src={image.url}
                  alt={`Logo of ${company}`}
                  width="100"
                  height="100"
                  className="rounded-full w-[100px] h-[100px]"
                />
              </div>
              <div className="ml-5 grow">
                <div className="h-full flex flex-col justify-center">
                  <div>
                    <p className="font-medium text-sm">{company}</p>
                    <p className="font-bold text-lg">{title}</p>
                  </div>
                  <div className="mt-2 self-start">
                    <div className="text-sm">
                      <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-2">
                        <JobHeroIconWithText
                          icon={<MdWorkOutline size={20} />}
                          text={meta.workTime}
                        />
                        <JobHeroIconWithText
                          icon={<IoLocationOutline size={20} />}
                          text={meta.location}
                        />
                        <JobHeroIconWithText
                          icon={<BsPencilSquare size={20} />}
                          text={meta.createdAt}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 font-medium" data-testid="job-hero__salary">
              <JobHeroIconWithText
                icon={<MdAttachMoney size={20} />}
                text={salaryText}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
