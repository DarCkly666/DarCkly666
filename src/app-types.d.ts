export interface IContact {
  name: string;
  email: string;
  message: string;
  date: Date;
}

export type IData = {
  name: string;
  alias: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface IProject {
  id: number | string;
  name: string;
  description: string;
  url_github: string;
  url_preview?: string;
  image: string;
  techs: string[];
}