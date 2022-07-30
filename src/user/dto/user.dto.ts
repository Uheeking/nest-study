import { IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    user_id: string; // 유저 고유 아이디

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(16)
    // 최소 8자 및 최대 16자, 하나 이상의 대문자, 하나의 소문자, 하나의 숫자 및 하나의 특수 문자
    @Matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
      {
        message: '비밀번호 양식에 맞게 작성하세요.',
      },
    )
    password: string; //유저 비밀번호
  
    @IsString()
    @IsNotEmpty()
    name: string; // 유저 이름
  
    @IsNumber()
    @IsNotEmpty()
    email: string; //유저 이메일
  }
  
  export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNumber()
    id: number;
  }