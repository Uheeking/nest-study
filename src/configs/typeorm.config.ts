import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql', //Database 설정
  host: '3.37.192.51',
  port: 3306,
  username: 'uhee',
  password: '1234',
  database: 'hello',
  entities: ['dist/**/*.entity.{ts,js}'], // Entity 연결
  synchronize: true, 
};