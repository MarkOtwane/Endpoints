export class NoteBook {
  constructor(
    public id: string,
    public email: string,
    public name: string | null,
    public password: string,
    public notes: NoteBook[],
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
