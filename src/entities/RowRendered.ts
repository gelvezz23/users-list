import { IUsers } from "./Users";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type IRowRendered = {
  index: number;
  key: any;
  style: any;
  users?: IUsers[];
};
