import type { UploadFileInfo } from 'naive-ui';
import type { Status } from './Status';

export interface Order {
  title: string;
  description?: string;
  status: Status;
  image?: UploadFileInfo;
  files: UploadFileInfo[];
  manufacturer: {
    name: string;
    website?: string;
  };
  customer: {
    name: string;
    website?: string;
  };
}
