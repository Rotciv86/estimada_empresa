import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Producte, ProducteRelations} from '../models';

export class ProducteRepository extends DefaultCrudRepository<
  Producte,
  typeof Producte.prototype.id,
  ProducteRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Producte, dataSource);
  }
}
