import Image from 'next/future/image';
import { useSalaryText } from '../../../../hooks/useSalaryText';

interface JobProps {
  company: string;
  title: string;
  image: {
    url: string;
  };
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  meta: {
    createdAt: string;
    workTime: string;
    location: string;
    badges: string[];
  };
}

export default function Job({ company, title, image, salary, meta }: JobProps) {
  const salaryText = useSalaryText(salary);

  return (
    <div className="text-[#57606D] cursor-pointer">
      <div className="rounded-lg bg-white hover:bg-slate-100 transition ease-in-out">
        <div className="relative px-5 py-6 pt-8">
          <div className="absolute -top-[25px]">
            <Image
              src={image.url}
              alt={`Logo of ${company}`}
              width="75"
              height="75"
              className="rounded-full w-[50px] h-[50px]"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p className="font-medium text-sm">{company}</p>
              <p
                className="font-medium text-sm text-[#1ec66c]"
                data-testid="job__salary"
              >
                {salaryText}
              </p>
            </div>
            <p className="font-bold">{title}</p>
          </div>
          <div className="mt-2">
            <div className="flex items-center">
              <p className="text-sm">{meta.createdAt}</p>
              <p className="mx-2 text-xs">&#9679;</p>
              <p className="text-sm">{meta.workTime}</p>
              <p className="mx-2 text-xs">&#9679;</p>
              <p className="text-sm">{meta.location}</p>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex flex-wrap -mb-2">
              {meta.badges.map((b) => (
                <div className="bg-primary mr-2 mb-2" key={b}>
                  <div className="py-1 px-2">
                    <p className="text-xs font-bold">{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
