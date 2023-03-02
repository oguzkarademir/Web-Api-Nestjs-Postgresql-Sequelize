import { Post } from 'src/modules/posts/post.entity';
import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/modules/users/user.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../../../constant';
import { databaseConfig } from './database.config';

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
           config = databaseConfig.development;
           break;
        case TEST:
           config = databaseConfig.test;
           break;
        case PRODUCTION:
           config = databaseConfig.production;
           break;
        default:
           config = databaseConfig.development;
           console.log('sdsdf')
        }
        console.log(config)

        const sequelize = new Sequelize({
         username: 'admin',
         password: 'admin',
         database: 'nestjs',
         host: 'localhost',
         port: 5432,
         dialect: 'postgres',
        });
        sequelize.addModels([User, Post]);
        await sequelize.sync();
        return sequelize;
    },
}];