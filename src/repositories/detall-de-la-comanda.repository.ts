import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {DetallDeLaComanda, DetallDeLaComandaRelations} from '../models';

export class DetallDeLaComandaRepository extends DefaultCrudRepository<
  DetallDeLaComanda,
  typeof DetallDeLaComanda.prototype.id,
  DetallDeLaComandaRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(DetallDeLaComanda, dataSource);
  }
}
