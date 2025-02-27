import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;

  @IsUUID('4', { each: true })
  @Field((type) => [ID], { defaultValue: [] })
  students: string[];
}
