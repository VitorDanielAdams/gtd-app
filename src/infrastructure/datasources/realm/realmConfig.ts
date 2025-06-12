import Realm from 'realm';
import { Task } from './models/Task';

export const realm = new Realm({
  schema: [Task],
  schemaVersion: 1,
}); 