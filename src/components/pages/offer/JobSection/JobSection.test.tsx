import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import JobSection from './JobSection';

describe('JobSection', () => {
  it('renders title', () => {
    render(<JobSection title="title" />);

    expect(screen.getByText('title')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <JobSection title="title">
        <div />
        <div />
      </JobSection>
    );

    expect(screen.getByTestId('job-section__children').children).toHaveLength(
      2
    );
  });
});
