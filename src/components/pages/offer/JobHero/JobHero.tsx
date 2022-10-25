import Image from 'next/future/image';
import { BsPencilSquare } from 'react-icons/bs';
import { MdWorkOutline, MdAttachMoney } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';

import { Job as JobType } from '../../../../types/Job';
import { useSalaryText } from '../../../../hooks/useSalaryText';

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
    <div className="h-[200px] job-hero">
      <div className="flex h-full items-center">
        <div className="px-4 py-2 grow text-white">
          <div className="flex items-center">
            <div>
              <Image
                src={image.url}
                alt={`Logo of ${company}`}
                width="100"
                height="100"
                className="rounded-full w-[100px] h-[100px]"
              />
            </div>
            <div className="ml-4 grow">
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
          <div className="mt-6 font-medium">
            <JobHeroIconWithText
              icon={<MdAttachMoney size={20} />}
              text={salaryText}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
