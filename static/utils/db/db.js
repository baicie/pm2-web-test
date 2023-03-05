"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var entity_1 = require("../../entity");
var connection = new typeorm_1.DataSource({
    type: 'sqlite',
    database: 'nodemon',
    logging: false,
    entities: [entity_1.User],
    synchronize: true,
});
exports.default = connection;
// connection.getRepository
