export interface Book {
  _id?: string | undefined;
  titulo: string;
  autor: string;
  isbn: string;
  ano: number;
  editora?: string;
}
