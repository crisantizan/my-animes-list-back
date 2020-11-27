import { Injectable } from '@nestjs/common';
import { Args, Mutation } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from 'src/schemas/users.schemas';
import { UserCreateArgs } from './dto/user.args';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name)
    private readonly _usersModel: Model<UsersDocument>,
  ) {}

  async create(data: UserCreateArgs): Promise<Users> {
    const user = new this._usersModel(data);
    return user.save();
  }

  async findAll(): Promise<Users[]> {
    return this._usersModel.find().exec();
  }
}
