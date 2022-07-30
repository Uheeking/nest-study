import { Module } from '@nestjs/common';
import { typeORMConfig } from './configs/typeorm.config';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
