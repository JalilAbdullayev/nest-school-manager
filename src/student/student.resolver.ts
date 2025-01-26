import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query((returns) => StudentType)
  student(@Args('id') id: string): Promise<Student | null> {
    return this.studentService.getOne(id);
  }

  @Query((returns) => [StudentType])
  students(): Promise<Student[]> {
    return this.studentService.getAll();
  }

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    return this.studentService.createStudent(createStudentInput);
  }
}
