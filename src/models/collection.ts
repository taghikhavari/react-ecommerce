import { IItem } from "./item";

export interface ICollection {
	id: number;
	title: string;
  routeName: string;
  items: IItem[]
}