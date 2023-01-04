import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product]),
  ClientsModule.register([
    {
      name: 'PRODUCT_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://sqlkbvwz:Hn2MV2mAPtyE_XXB-G5e4cb3pYy6_pGk@gerbil.rmq.cloudamqp.com/sqlkbvwz'],
        queue: 'main_queue',
        queueOptions: {
          durable: false
        },
      },
    },
  ]),
],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {

}
