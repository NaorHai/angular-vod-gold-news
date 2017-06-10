/**
 * Created by Haimov on 08/06/2017.
 */
export class Reporter {
  _id?: string;
  id: number;
  age: number;
  vod: number[];
  name: string;
  proficiency: string;
  url: string;

  getName() {return this.name;}
}
