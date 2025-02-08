export interface RepositoryInterface<T> {
  create(entity: Partial<T>): T;
  findAll(): T[];
}
