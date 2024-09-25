import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'estimada_empresa', table: 'client'}}
})
export class Client extends Entity {
  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 15,
    generated: false,
    mysql: {columnName: 'ciutat', dataType: 'varchar', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  ciutat?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 15,
    generated: false,
    mysql: {columnName: 'codi_postal', dataType: 'varchar', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  codiPostal?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 60,
    generated: false,
    mysql: {columnName: 'direccio', dataType: 'varchar', dataLength: 60, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  direccio?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: 1,
    id: 1,
    mysql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: 1},
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 50,
    generated: false,
    mysql: {columnName: 'nom', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N', generated: false},
  })
  nom: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 15,
    generated: false,
    mysql: {columnName: 'pais', dataType: 'varchar', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  pais?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Client>) {
    super(data);
  }
}

export interface ClientRelations {
  // describe navigational properties here
}

export type ClientWithRelations = Client & ClientRelations;
