import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import JobList from './JobList';

describe('JobList', () => {
  it('should render number of results', () => {
    render(<JobList numberResults={5} />);

    expect(screen.getByText('5 results')).toBeInTheDocument();
  });
});
