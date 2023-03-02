"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersProviders = void 0;
const constant_1 = require("../../../constant");
const user_entity_1 = require("./user.entity");
exports.usersProviders = [{
        provide: constant_1.USER_REPOSITORY,
        useValue: user_entity_1.User
    }];
//# sourceMappingURL=users.providers.js.map