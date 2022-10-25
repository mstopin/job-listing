import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import JobHero from './JobHero';

describe('JobHero', () => {
  const renderJob = async () => {
    const result = render(
      <JobHero
        company="company"
        title="title"
        image={{
          url: '/url',
        }}
        salary={{
          min: 0,
          max: 0,
          currency: 'currency',
        }}
        meta={{
          workTime: 'workTime',
          location: 'location',
          createdAt: 'createdAt',
          badges: [],
        }}
        description={{
          sections: [],
        }}
      />
    );

    await waitFor(() => screen.getByTestId('color-mode-selector'));
    return result;
  };

  it('should render company name', async () => {
    renderJob();

    expect(screen.getByText('company')).toBeInTheDocument();
  });

  it('should render company logo', async () => {
    renderJob();

    expect(
      await waitFor(() => screen.getByAltText('Logo of company'))
    ).toBeInTheDocument();
  });

  it('should render job title', () => {
    renderJob();

    expect(screen.getByText('title')).toBeInTheDocument();
  });

  it('should render job worktime', () => {
    renderJob();

    expect(screen.getByText('workTime')).toBeInTheDocument();
  });

  it('should render job location', () => {
    renderJob();

    expect(screen.getByText('location')).toBeInTheDocument();
  });

  it('should render job offer creation date', () => {
    renderJob();

    expect(screen.getByText('createdAt')).toBeInTheDocument();
  });

  it('should render job salary', () => {
    renderJob();

    expect(screen.getByTestId('job-hero__salary')).toBeInTheDocument();
  });

  it('should render color mode selector', async () => {
    renderJob();

    expect(screen.getByTestId('color-mode-selector')).toBeInTheDocument();
  });
});
