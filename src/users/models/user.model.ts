import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(type => ID)
  id: string;

  @Field()
  username: string;

  @Field(type => Int)
  pin: number;

  @Field(type => Date)
  createdAt: Date;

  @Field(type => Date)
  updatedAt: Date;
}
