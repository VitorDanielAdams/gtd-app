import Realm from 'realm';
export interface Task {
  id: Realm.BSON.ObjectId;
  text: string;
  createdAt: Date;
  deletedAt?: Date | null;
} 