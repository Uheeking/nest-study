import { Module } from '@nestjs/common';
import { typeORMConfig } from './configs/typeorm.config';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig),UserModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
