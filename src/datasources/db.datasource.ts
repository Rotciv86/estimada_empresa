import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'mysql',
  url: 'mysql://avnadmin:AVNS_-iqFkN1uxH3XPhSpkC3@mysql-1f93d229-victor-recipes.l.aivencloud.com:20659/estimada_empresa?ssl-mode=REQUIRED',
  host: 'mysql-1f93d229-victor-recipes.l.aivencloud.com',
  port: 20659,
  user: 'avnadmin',
  password: 'AVNS_-iqFkN1uxH3XPhSpkC3',
  database: 'estimada_empresa'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
