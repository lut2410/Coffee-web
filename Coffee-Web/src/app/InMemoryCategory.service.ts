import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryCategory implements InMemoryDbService {
  createDb() {
    let table = [
      { id: 1, status: 1 },
      { id: 2, status: 0 },
      { id: 3, status: 0 }, 
      { id: 4, status: 1 }
    ];
    return {table};
  }
}