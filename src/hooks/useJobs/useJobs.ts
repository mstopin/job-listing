import useSWRInfinite from 'swr/infinite';

import { Job } from '../../types/Job';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useJobs() {
  const result = useSWRInfinite(
    (idx) => `/jobs${idx === 0 ? '' : idx + 1}.json`,
    fetcher
  );

  const data = result.data as unknown as
    | {
        jobs: Job[];
        total: number;
        links: {
          next: string;
        };
      }[]
    | undefined;
  const { error, size, setSize } = result;

  return {
    jobs: data ? data.reduce((prev, cur) => [...prev, ...cur.jobs], []) : [],
    total: data ? data[0].total : null,
    isLoading: !data && !error,
    isLoadingMore: (!data && !error) || (size > 0 && data && !data[size - 1]),
    hasMore: data && !!data[size - 1]?.links.next,
    loadMore: () => {
      if (!!data[0].links.next) {
        setSize(size + 1);
      }
    },
  };
}
