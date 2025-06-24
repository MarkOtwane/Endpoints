import { NoteBook } from '../entities/note.entity';

export class CreateNoteDto {
  email: string;
  name?: string;
  password: string;
  notes: NoteBook[];
  createdAt: Date;
  updatedAt: Date;
}
