import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from 'src/schemas/users.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }])],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
