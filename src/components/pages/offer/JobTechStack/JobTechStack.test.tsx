import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import JobTechStack from './JobTechStack';

describe('JobTechStack', () => {
  it('should render technologies of stack', () => {
    const stack = ['tech1', 'tech2', 'tech3'];

    render(<JobTechStack badges={stack} />);

    stack.forEach((t) => expect(screen.getByText(t)).toBeInTheDocument());
  });
});
