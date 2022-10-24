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
        <div className="relative px-5 py-6 pt-8 xl:flex">
          <div className="absolute -top-[25px] xl:static">
            <Image
              src={image.url}
              alt={`Logo of ${company}`}
              width="75"
              height="75"
              className="rounded-full w-[50px] h-[50px] xl:w-[80px] xl:h-[80px]"
            />
          </div>
          <div className="xl:ml-5 xl:flex xl:flex-col xl:flex-grow">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="font-medium text-sm xl:text-base">{company}</p>
                <p
                  className="font-medium text-sm text-[#1ec66c] xl:text-base"
                  data-testid="job__salary"
                >
                  {salaryText}
                </p>
              </div>
              <p className="font-bold xl:text-lg">{title}</p>
            </div>
            <div className="mt-1">
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
    </div>
  );
}
