import type { Status } from './Status';

export interface Order {
  title: string;
  description?: string;
  status: Status;
  manufacturer: {
    name: string;
    website?: string;
  };
  customer: {
    name: string;
    website?: string;
  };
}
