export interface IBidData {
  title: string;
  id: string;
  dueDate?: string | string[];
  solicitationSummary: string;
  mainCategory?: string | string[];
  solicitationType: string;
  attachments: IAttachment[];
}

export interface IAttachment {
  title: string;
  files: IFile[];
}

export interface IFile {
  link?: string;
  fileName: string;
}