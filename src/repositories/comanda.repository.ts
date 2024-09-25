import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Comanda, ComandaRelations} from '../models';

export class ComandaRepository extends DefaultCrudRepository<
  Comanda,
  typeof Comanda.prototype.id,
  ComandaRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Comanda, dataSource);
  }
}
