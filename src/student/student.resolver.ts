import { Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}
}
