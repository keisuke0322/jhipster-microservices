export interface IPost {
  id?: number;
  post?: string;
  name?: string | null;
}

export const defaultValue: Readonly<IPost> = {};
