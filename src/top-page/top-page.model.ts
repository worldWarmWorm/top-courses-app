import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLevelCategory {
  Courses,
  Services,
  Book,
  Products,
}

export class HeadHunterData {
  @prop()
  count: number;

  @prop()
  juniorSalary: number;

  @prop()
  middleSalary: number;

  @prop()
  seniorSalary: number;
}

export class TopPageAdvantage {
  @prop()
  title: string;

  @prop()
  description: string;
}

export interface IProductModel extends Base {}
export class TopPageModel extends TimeStamps {
  @prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;

  @prop()
  secondCategory: string;

  @prop({ unique: true })
  alias: string;

  @prop()
  title: string;

  @prop()
  category: string;

  @prop({ type: () => HeadHunterData })
  hh?: HeadHunterData;

  @prop({ type: () => [TopPageAdvantage]})
  advantages: TopPageAdvantage[];

  @prop()
  seoText: string;

  @prop()
  tagsTitle: string;

  @prop({ type: () => [String]})
  tags: string[];
}
