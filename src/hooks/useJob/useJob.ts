import { useJobs } from '../useJobs';

interface UseJobProps {
  id: string;
}

export default function useJob({ id }: UseJobProps) {
  const { jobs } = useJobs();

  return jobs?.find((j) => j.id === id) ?? null;
}
