import {
  Job as JobType,
  TextDescriptionSection as TextDescriptionSectionType,
  ListDescriptionSection as ListDescriptionSectionType,
  DescriptionSectionType,
} from '../../../../types/Job';

import { JobSection } from '../JobSection';

type JobDescriptionProps = Pick<JobType, 'description'>;

function TextDescriptionSection({ data }: TextDescriptionSectionType) {
  return (
    <div className="mb-4">
      <p>{data.text}</p>
    </div>
  );
}

function ListDescriptionSection({ data }: ListDescriptionSectionType) {
  return (
    <div className="mb-4">
      <p className="font-medium">{data.title}:</p>
      <div className="ml-4">
        <ul className="list-disc">
          {data.entries.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function JobDescription({ description }: JobDescriptionProps) {
  return (
    <JobSection title="Description">
      {description.sections.map((s) => {
        if (s.type === DescriptionSectionType.TEXT) {
          return <TextDescriptionSection {...s} key={s.data.text} />;
        }
        if (s.type === DescriptionSectionType.LIST) {
          return <ListDescriptionSection {...s} key={s.data.title} />;
        }
        return null;
      })}
    </JobSection>
  );
}
