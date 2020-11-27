import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class UserCreateArgs {
  @Field()
  username: string;

  @Field(type => Int)
  pin: number;
}
