export interface CoursesListItem {
  id?: number;
  name: string;
  date: Date;
  length: number;
  description: string;
  isTopRated?: boolean;
  authors?: {
    id: number,
    firstName: string,
    lastName: string,
  }[];
}
