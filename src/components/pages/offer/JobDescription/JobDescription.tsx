import {
  Job as JobType,
  TextDescriptionSection as TextDescriptionSectionType,
  ListDescriptionSection as ListDescriptionSectionType,
  DescriptionSectionType,
} from '../../../../types/Job';

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
    <div className="text-text mt-4 bg-white">
      <div className="border-b border-[#f3f6f8] border-solid">
        <div className="px-6 py-2">
          <p className="text-lg font-medium">Description</p>
        </div>
      </div>
      <div className="px-6 py-4">
        {description.sections.map((s) => {
          if (s.type === DescriptionSectionType.TEXT) {
            return <TextDescriptionSection {...s} key={s.data.text} />;
          }
          if (s.type === DescriptionSectionType.LIST) {
            return <ListDescriptionSection {...s} key={s.data.title} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}
