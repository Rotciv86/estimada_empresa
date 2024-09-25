import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Empleat} from '../models';
import {EmpleatRepository} from '../repositories';

export class EmpleatController {
  constructor(
    @repository(EmpleatRepository)
    public empleatRepository : EmpleatRepository,
  ) {}

  @post('/empleats')
  @response(200, {
    description: 'Empleat model instance',
    content: {'application/json': {schema: getModelSchemaRef(Empleat)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empleat, {
            title: 'NewEmpleat',
            exclude: ['id'],
          }),
        },
      },
    })
    empleat: Omit<Empleat, 'id'>,
  ): Promise<Empleat> {
    return this.empleatRepository.create(empleat);
  }

  @get('/empleats/count')
  @response(200, {
    description: 'Empleat model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Empleat) where?: Where<Empleat>,
  ): Promise<Count> {
    return this.empleatRepository.count(where);
  }

  @get('/empleats')
  @response(200, {
    description: 'Array of Empleat model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Empleat, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Empleat) filter?: Filter<Empleat>,
  ): Promise<Empleat[]> {
    return this.empleatRepository.find(filter);
  }

  @patch('/empleats')
  @response(200, {
    description: 'Empleat PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empleat, {partial: true}),
        },
      },
    })
    empleat: Empleat,
    @param.where(Empleat) where?: Where<Empleat>,
  ): Promise<Count> {
    return this.empleatRepository.updateAll(empleat, where);
  }

  @get('/empleats/{id}')
  @response(200, {
    description: 'Empleat model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Empleat, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Empleat, {exclude: 'where'}) filter?: FilterExcludingWhere<Empleat>
  ): Promise<Empleat> {
    return this.empleatRepository.findById(id, filter);
  }

  @patch('/empleats/{id}')
  @response(204, {
    description: 'Empleat PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empleat, {partial: true}),
        },
      },
    })
    empleat: Empleat,
  ): Promise<void> {
    await this.empleatRepository.updateById(id, empleat);
  }

  @put('/empleats/{id}')
  @response(204, {
    description: 'Empleat PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() empleat: Empleat,
  ): Promise<void> {
    await this.empleatRepository.replaceById(id, empleat);
  }

  @del('/empleats/{id}')
  @response(204, {
    description: 'Empleat DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.empleatRepository.deleteById(id);
  }
}
