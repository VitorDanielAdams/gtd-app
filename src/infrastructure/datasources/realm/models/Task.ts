import Realm from 'realm';

export class Task extends Realm.Object<Task> {
  id!: string;
  text!: string;
  createdAt!: Date;
  deletedAt?: Date | null;

  static generate(text: string, type: string) {
    return {
      id: new Realm.BSON.ObjectId().toHexString(),
      text,
      createdAt: new Date(),
      deletedAt: null,
    };
  }

  static schema: Realm.ObjectSchema = {
    name: 'Task',
    primaryKey: 'id',
    properties: {
      id: 'string',
      text: 'string',
      createdAt: 'date',
      deletedAt: 'date?',
    },
  };
} 