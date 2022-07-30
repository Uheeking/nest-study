import { Module } from '@nestjs/common';
import { typeORMConfig } from './configs/typeorm.config';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
