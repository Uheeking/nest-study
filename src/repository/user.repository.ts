import { CreateUserDto } from 'src/user/dto/user.dto';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async onCreate(createUserDto: CreateUserDto): Promise<boolean> {
        const { user_id, password, name, email } = createUserDto;
    
        const user = this.create({
            user_id,
            password,
            name,
            email
        })
    
        return user ? true : false;
      }

}