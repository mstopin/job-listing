export interface Job {
  id: string;
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
