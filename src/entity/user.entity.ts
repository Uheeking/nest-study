import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Unique,
  } from 'typeorm';
  
  @Entity({ name: 'user' })
  @Unique(['user_id'])
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 100, comment: '유저 아이디' })
    user_id: string;
  
    @Column({ type: 'varchar', length: 100, comment: '유저 비밀번호' })
    password: string;
  
    @Column({ type: 'varchar', length: 100, comment: '유저 이름' })
    name: string;
  
    @Column({ type: 'varchar', length: 100, comment: '유저 이메일' })
    email: string;
  
    @CreateDateColumn({ name: 'create_at', comment: '생성일' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
    updatedAt: Date;

  }