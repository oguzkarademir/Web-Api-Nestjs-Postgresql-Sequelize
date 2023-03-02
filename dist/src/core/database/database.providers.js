"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const post_entity_1 = require("../../modules/posts/post.entity");
const sequelize_typescript_1 = require("sequelize-typescript");
const user_entity_1 = require("../../modules/users/user.entity");
const constant_1 = require("../../../constant");
const database_config_1 = require("./database.config");
exports.databaseProviders = [{
        provide: constant_1.SEQUELIZE,
        useFactory: async () => {
            let config;
            switch (process.env.NODE_ENV) {
                case constant_1.DEVELOPMENT:
                    config = database_config_1.databaseConfig.development;
                    break;
                case constant_1.TEST:
                    config = database_config_1.databaseConfig.test;
                    break;
                case constant_1.PRODUCTION:
                    config = database_config_1.databaseConfig.production;
                    break;
                default:
                    config = database_config_1.databaseConfig.development;
                    console.log('sdsdf');
            }
            console.log(config);
            const sequelize = new sequelize_typescript_1.Sequelize({
                username: 'admin',
                password: 'admin',
                database: 'nestjs',
                host: 'localhost',
                port: 5432,
                dialect: 'postgres',
            });
            sequelize.addModels([user_entity_1.User, post_entity_1.Post]);
            await sequelize.sync();
            return sequelize;
        },
    }];
//# sourceMappingURL=database.providers.js.map