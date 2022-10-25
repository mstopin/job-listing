import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import * as useJobs from '../../../../hooks/useJobs/useJobs';
import { Job as JobType } from '../../../../types/Job';

import JobList from './JobList';

const generateJobs = (n: number) =>
  Array.from({ length: n }).map<JobType>((_, idx) => ({
    id: `id-${idx}`,
    company: `company-${idx}`,
    title: `title-${idx}`,
    image: {
      url: `/url-${idx}`,
    },
    meta: {
      createdAt: `createdAt-${idx}`,
      workTime: `workTime-${idx}`,
      location: `location-${idx}`,
      badges: [],
    },
    salary: {
      min: 1000,
      max: 2000,
      currency: 'currency',
    },
    description: {
      sections: [],
    },
  }));
const jobs = generateJobs(2);

jest.mock('../../../../hooks/useJobs/useJobs', () => {
  return {
    __esModule: true,
    ...jest.requireActual('../../../../hooks/useJobs/useJobs'),
  };
});

describe('JobList', () => {
  it('should render correct number of results when no jobs are loaded', async () => {
    jest.spyOn(useJobs, 'default').mockReturnValue({
      jobs: [],
      total: null,
      hasMore: false,
      isLoading: false,
      isLoadingMore: false,
      loadMore: () => undefined,
    } as ReturnType<typeof useJobs['default']>);

    render(<JobList />);

    expect(
      await waitFor(() => screen.getByText('0 results'))
    ).toBeInTheDocument();
  });

  it('should render correct number of results when jobs are loaded', async () => {
    jest.spyOn(useJobs, 'default').mockReturnValue({
      jobs: jobs,
      total: jobs.length,
      hasMore: false,
      isLoading: false,
      isLoadingMore: false,
      loadMore: () => undefined,
    } as ReturnType<typeof useJobs['default']>);

    render(<JobList />);

    expect(
      await waitFor(() => screen.getByText('2 results'))
    ).toBeInTheDocument();
  });

  it('should render empty list when no jobs are loaded', async () => {
    jest.spyOn(useJobs, 'default').mockReturnValue({
      jobs: [],
      total: null,
      hasMore: false,
      isLoading: false,
      isLoadingMore: false,
      loadMore: () => undefined,
    } as ReturnType<typeof useJobs['default']>);

    render(<JobList />);

    expect(
      (await waitFor(() => screen.getByTestId('job-list__jobs'))).children
    ).toHaveLength(0);
  });

  it('should render list with jobs when jobs are loaded', async () => {
    jest.spyOn(useJobs, 'default').mockReturnValue({
      jobs: jobs,
      total: jobs.length,
      hasMore: false,
      isLoading: false,
      isLoadingMore: false,
      loadMore: () => undefined,
    } as ReturnType<typeof useJobs['default']>);

    render(<JobList />);

    expect(
      (await waitFor(() => screen.getByTestId('job-list__jobs'))).children
    ).toHaveLength(jobs.length);
  });

  it('should request more jobs after scroll to bottom if available', async () => {
    const loadMore = jest.fn();
    jest.spyOn(useJobs, 'default').mockReturnValue({
      jobs: jobs,
      total: jobs.length,
      hasMore: true,
      isLoading: false,
      isLoadingMore: false,
      loadMore,
    } as ReturnType<typeof useJobs['default']>);

    render(<JobList />);
    fireEvent.scroll(window, { target: { scrollY: 0 } });

    expect(loadMore).toHaveBeenCalledTimes(1);
  });

  it('should not request more jobs after scroll to bottom when not available', async () => {
    const loadMore = jest.fn();
    jest.spyOn(useJobs, 'default').mockReturnValue({
      jobs: jobs,
      total: jobs.length,
      hasMore: false,
      isLoading: false,
      isLoadingMore: false,
      loadMore,
    } as ReturnType<typeof useJobs['default']>);

    render(<JobList />);
    fireEvent.scroll(window, { target: { scrollY: 0 } });

    expect(loadMore).not.toHaveBeenCalled();
  });
});
