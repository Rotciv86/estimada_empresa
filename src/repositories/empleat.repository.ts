import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Empleat, EmpleatRelations} from '../models';

export class EmpleatRepository extends DefaultCrudRepository<
  Empleat,
  typeof Empleat.prototype.id,
  EmpleatRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Empleat, dataSource);
  }
}
