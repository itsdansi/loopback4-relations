import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Users} from './users.model';

@model()
export class Orders extends Entity {

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'boolean',
    default: false,
  })
  isDelivered?: boolean;

  // @property({
  //   type: 'number',
  // })

  @belongsTo(() => Users, {keyFrom: 'userId'}, {name: 'user_id'})
  userId?: number;

  constructor(data?: Partial<Orders>) {
    super(data);
  }
}

export interface OrdersRelations {
  // describe navigational properties here
}

export type OrdersWithRelations = Orders & OrdersRelations;
