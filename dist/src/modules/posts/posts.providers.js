"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsProviders = void 0;
const post_entity_1 = require("./post.entity");
const constant_1 = require("../../../constant");
exports.postsProviders = [{
        provide: constant_1.POST_REPOSITORY,
        useValue: post_entity_1.Post,
    }];
//# sourceMappingURL=posts.providers.js.map