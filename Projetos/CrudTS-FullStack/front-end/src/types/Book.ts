export interface Book {
  _id?: string;
  titulo: string;
  autor: string;
  imagemUrl: string;
  isbn: string;
  ano: number;
  editora?: string;
}
