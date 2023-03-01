import { Sequelize } from "sequelize-typescript";
export declare const databaseProviders: {
    provide: any;
    useFactory: () => Promise<Sequelize>;
}[];
