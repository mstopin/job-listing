import path from 'path';
import { writeFile } from 'fs/promises';
import { faker } from '@faker-js/faker';

interface Job {
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
  description: {
    sections: {
      type: 'TEXT' | 'LIST';
      data: any;
    }[];
  };
}

const createRandomJobs = (n: number) => {
  return Array.from({ length: n }).map<Job>(() => ({
    id: faker.datatype.uuid(),
    company: faker.company.name(),
    title: faker.name.jobTitle(),
    image: {
      url: `https://picsum.photos/200/200?random=1&rnd=${Math.floor(
        Math.random() * 100000
      )}`,
    },
    salary: {
      min: Math.floor(Math.random() * 2500 + 1200),
      max: Math.floor(Math.random() * 7500 + 2500),
      currency: 'EUR',
    },
    meta: {
      createdAt: ['1d ago', '2d ago', '5d ago'][Math.floor(Math.random() * 3)],
      workTime: ['Full Time', 'Part Time', 'Contract'][
        Math.floor(Math.random() * 3)
      ],
      location: ['Remote', 'Germany', 'Poland', 'USA'][
        Math.floor(Math.random() * 3)
      ],
      badges: ['JavaScript', 'TypeScript', 'MongoDB', 'RabbitMQ'],
    },
    description: {
      sections: [
        {
          type: 'TEXT',
          data: {
            text: faker.lorem.paragraphs(2),
          },
        },
        {
          type: 'LIST',
          data: {
            title: 'Requirements',
            entries: Array.from({ length: 7 }).map(() =>
              faker.lorem.sentence()
            ),
          },
        },
        {
          type: 'LIST',
          data: {
            title: 'Nice to have',
            entries: Array.from({ length: 3 }).map(() =>
              faker.lorem.sentence()
            ),
          },
        },
        {
          type: 'LIST',
          data: {
            title: 'Responsibilities',
            entries: Array.from({ length: 5 }).map(() =>
              faker.lorem.sentence()
            ),
          },
        },
      ],
    },
  }));
};

(async function () {
  await writeFile(
    path.join(__dirname, '../public/jobs.json'),
    JSON.stringify({
      total: 30,
      jobs: createRandomJobs(10),
      links: {
        next: '/jobs2.json',
      },
    })
  );

  await writeFile(
    path.join(__dirname, '../public/jobs2.json'),
    JSON.stringify({
      total: 30,
      jobs: createRandomJobs(10),
      links: {
        next: '/jobs3.json',
      },
    })
  );

  await writeFile(
    path.join(__dirname, '../public/jobs3.json'),
    JSON.stringify({
      total: 30,
      jobs: createRandomJobs(10),
      links: {
        next: null,
      },
    })
  );
})().catch(console.error);
