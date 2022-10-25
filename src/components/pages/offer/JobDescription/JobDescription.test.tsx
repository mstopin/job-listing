import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import JobDescription from './JobDescription';
import { DescriptionSectionType } from '../../../../types/Job';

describe('JobDescription', () => {
  it('renders text description', () => {
    render(
      <JobDescription
        description={{
          sections: [
            {
              type: DescriptionSectionType.TEXT,
              data: {
                text: 'text',
              },
            },
          ],
        }}
      />
    );

    expect(screen.getByText('text')).toBeInTheDocument();
  });

  it('renders list description', () => {
    render(
      <JobDescription
        description={{
          sections: [
            {
              type: DescriptionSectionType.LIST,
              data: {
                title: 'title',
                entries: ['entry-1', 'entry-2'],
              },
            },
          ],
        }}
      />
    );

    expect(screen.getByText('title:')).toBeInTheDocument();
    expect(screen.getByText('entry-1')).toBeInTheDocument();
    expect(screen.getByText('entry-2')).toBeInTheDocument();
  });
});
