import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Job from './Job';

describe('Job', () => {
  const renderJob = () =>
    render(
      <Job
        company="Company"
        title="Title"
        image={{
          url: '/url',
        }}
        meta={{
          createdAt: 'createdAt',
          workTime: 'workTime',
          location: 'location',
          badges: ['badge1', 'badge2'],
        }}
      />
    );

  it("should render company's logo", () => {
    renderJob();

    expect(screen.getByAltText('Logo of Company')).toBeInTheDocument();
  });

  it('should render company name', () => {
    renderJob();

    expect(screen.getByText('Company')).toBeInTheDocument();
  });

  it("should render job's title", () => {
    renderJob();

    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('should render created at text', () => {
    renderJob();

    expect(screen.getByText('createdAt')).toBeInTheDocument();
  });

  it('should render work time text', () => {
    renderJob();

    expect(screen.getByText('workTime')).toBeInTheDocument();
  });

  it('should render location text', () => {
    renderJob();

    expect(screen.getByText('location')).toBeInTheDocument();
  });

  it('should render badges', () => {
    renderJob();

    ['badge1', 'badge2'].forEach((b) => {
      expect(screen.getByText(b)).toBeInTheDocument();
    });
  });
});
