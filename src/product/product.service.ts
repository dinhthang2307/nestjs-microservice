import { Injectable } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>
    ){
        
    }

    @EventPattern('hello')
   async hello(data:string) {
    console.log(data)
   }

    async all(): Promise<Product[]> {
        
        return this.productRepository.find();       
    }

    async create(data): Promise<Product>{
        return this.productRepository.save(data);
    }

    async get(id: number) : Promise<Product>{
        return this.productRepository.findOneBy({id});
    }

   async update(id: number, data) : Promise<any> {
    return this.productRepository.update(id, data);
   }

  async delete(id:number) : Promise<any> {
    return this.productRepository.delete(id);
  }
}
