import { USER_REPOSITORY } from "constant";
import { User } from "./user.entity";

export const usersProviders = [{
    provide: USER_REPOSITORY,
    useValue: User
}]