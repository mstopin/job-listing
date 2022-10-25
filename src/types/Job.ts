export enum DescriptionSectionType {
  TEXT = 'TEXT',
  LIST = 'LIST',
}

export interface TextDescriptionSection {
  type: DescriptionSectionType.TEXT;
  data: {
    text: string;
  };
}

export interface ListDescriptionSection {
  type: DescriptionSectionType.LIST;
  data: {
    title: string;
    entries: string[];
  };
}

export interface Job {
  id: string;
  company: string;
  title: string;
  image: {
    url: string;
  };
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  meta: {
    createdAt: string;
    workTime: string;
    location: string;
    badges: string[];
  };
  description: {
    sections: (TextDescriptionSection | ListDescriptionSection)[];
  };
}
