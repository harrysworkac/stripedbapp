import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {StripeService} from './services/stripe.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as entities from './entities/index'
import * as services from './services/index'

@Module({
  imports: [
    TypeOrmModule.forRoot({
    host: 'localhost',
    port: 3306,
    type: 'mysql',
    username: 'root',
    password: 'password',
    entities:[...Object.values(entities)],
    database: 'stripe',
    synchronize: true
  }),
  TypeOrmModule.forFeature([...Object.values(entities)])
],
  controllers: [AppController],
  providers: [AppService, ...Object.values(services)],
})
export class AppModule {}
