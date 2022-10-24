import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import PageHero from './PageHero';

describe('PageHero', () => {
  it('should render hero', () => {
    render(<PageHero />);

    expect(screen.getByTestId('page-hero-container')).toBeInTheDocument();
    expect(screen.getByTestId('page-hero-image')).toBeInTheDocument();
  });
});
