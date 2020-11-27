import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema({ timestamps: true })
export class Users {
  @Prop()
  username: String;

  @Prop()
  pin: Number;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
