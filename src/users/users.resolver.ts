import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserCreateArgs } from './dto/user.args';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly _usersService: UsersService) {}

  @Query(() => String)
  async hello() {
    return 'Hello World';
  }

  @Query(returns => [User])
  async getAll() {
    return this._usersService.findAll();
  }

  @Mutation(returns => User)
  async create(@Args() args: UserCreateArgs) {
    return this._usersService.create(args);
  }
}
