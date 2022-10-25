import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import JobHero from './JobHero';

describe('JobHero', () => {
  const renderJob = () =>
    render(
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
      />
    );

  it('should render company name', () => {
    renderJob();

    expect(screen.getByText('company')).toBeInTheDocument();
  });

  it('should render company logo', () => {
    renderJob();

    expect(screen.getByAltText('Logo of company')).toBeInTheDocument();
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
});
