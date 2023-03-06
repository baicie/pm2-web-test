"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// server/app.ts
var import_express5 = __toESM(require("express"));
var import_reflect_metadata = require("reflect-metadata");

// server/utils/db/db.ts
var import_typeorm3 = require("typeorm");

// server/entity/Base.ts
var import_typeorm = require("typeorm");
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var Base = /* @__PURE__ */ __name(class Base2 {
}, "Base");
__decorate([
  (0, import_typeorm.PrimaryGeneratedColumn)(),
  __metadata("design:type", String)
], Base.prototype, "id", void 0);
__decorate([
  (0, import_typeorm.Column)(),
  __metadata("design:type", String)
], Base.prototype, "title", void 0);
__decorate([
  (0, import_typeorm.Column)(),
  __metadata("design:type", String)
], Base.prototype, "description", void 0);
__decorate([
  (0, import_typeorm.Column)(),
  __metadata("design:type", String)
], Base.prototype, "type", void 0);
__decorate([
  (0, import_typeorm.Column)(),
  __metadata("design:type", String)
], Base.prototype, "status", void 0);
__decorate([
  (0, import_typeorm.Column)(),
  __metadata("design:type", String)
], Base.prototype, "image", void 0);
__decorate([
  (0, import_typeorm.Column)(),
  __metadata("design:type", String)
], Base.prototype, "createTime", void 0);
__decorate([
  (0, import_typeorm.Column)(),
  __metadata("design:type", String)
], Base.prototype, "lable", void 0);
__decorate([
  (0, import_typeorm.Column)(),
  __metadata("design:type", String)
], Base.prototype, "range", void 0);
Base = __decorate([
  (0, import_typeorm.Entity)()
], Base);

// server/entity/User.ts
var import_typeorm2 = require("typeorm");
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata2 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var User = /* @__PURE__ */ __name(class User2 {
}, "User");
__decorate2([
  (0, import_typeorm2.PrimaryGeneratedColumn)("uuid"),
  __metadata2("design:type", String)
], User.prototype, "userid", void 0);
__decorate2([
  (0, import_typeorm2.Column)(),
  __metadata2("design:type", String)
], User.prototype, "role", void 0);
__decorate2([
  (0, import_typeorm2.Column)(),
  __metadata2("design:type", String)
], User.prototype, "username", void 0);
__decorate2([
  (0, import_typeorm2.Column)(),
  __metadata2("design:type", String)
], User.prototype, "password", void 0);
User = __decorate2([
  (0, import_typeorm2.Entity)()
], User);

// server/utils/db/db.ts
var connection = new import_typeorm3.DataSource({
  type: "sqlite",
  database: "pm2-web",
  logging: false,
  entities: [
    User
  ],
  synchronize: true
});
var db_default = connection;

// server/routes/index.ts
var import_express4 = require("express");

// server/routes/demo.ts
var import_express_validator2 = require("express-validator");
var import_express = require("express");

// server/utils/constant.ts
var CODE_ERROR = 400;
var CODE_SUCCESS = 200;
var PRIVATE_KEY = "PRIVATE_KEY";
var JWT_EXPIRED = 60 * 60 * 24;
var MESSAGE_SUCCESS = "success";

// server/servers/demoServers.ts
var import_boom = __toESM(require("@hapi/boom"));
var import_express_validator = require("express-validator");
var demoRepository = db_default.getRepository(Base);
function demo(req, res, next) {
  return __async(this, null, function* () {
    const err = (0, import_express_validator.validationResult)(req);
    if (!err.isEmpty()) {
      next(import_boom.default.badRequest("error", err.array()));
    } else {
      const result = yield demoRepository.findOneBy({
        id: "1"
      });
      res.json({
        code: CODE_ERROR,
        msg: "\u7528\u6237\u540D\u6216\u65E7\u5BC6\u7801\u9519\u8BEF",
        data: result
      });
    }
  });
}
__name(demo, "demo");

// server/routes/demo.ts
var router = (0, import_express.Router)();
var vaildator = [
  (0, import_express_validator2.body)("username").isString().withMessage("\u7528\u6237\u540D\u7C7B\u578B\u9519\u8BEF"),
  (0, import_express_validator2.body)("password").isString().withMessage("\u5BC6\u7801\u7C7B\u578B\u9519\u8BEF")
];
router.get("/index", vaildator, demo);
var demo_default = router;

// server/routes/pm2.ts
var import_express2 = require("express");
var import_express_validator4 = require("express-validator");

// server/servers/pm2Servers.ts
var import_boom2 = __toESM(require("@hapi/boom"));
var import_express_validator3 = require("express-validator");

// server/utils/error-handle.ts
function defaultErrorHandler(res, error) {
  if (error instanceof Error) {
    res.json({
      code: CODE_ERROR,
      msg: MESSAGE_SUCCESS,
      data: error.message
    });
  }
}
__name(defaultErrorHandler, "defaultErrorHandler");

// server/servers/pm2Servers.ts
var import_shelljs = __toESM(require("shelljs"));
var import_pm2 = __toESM(require("pm2"));

// server/utils/sucess-handle.ts
function defaultSucesshandler(res, data = null) {
  res.json({
    code: CODE_SUCCESS,
    msg: MESSAGE_SUCCESS,
    data
  });
}
__name(defaultSucesshandler, "defaultSucesshandler");

// server/servers/pm2Servers.ts
function pm2List(req, res) {
  return __async(this, null, function* () {
    try {
      import_pm2.default.list((error, list) => {
        defaultSucesshandler(res, list);
      });
    } catch (error) {
      defaultErrorHandler(res, error);
    }
  });
}
__name(pm2List, "pm2List");
function pm2Stop(req, res, next) {
  return __async(this, null, function* () {
    try {
      const err = (0, import_express_validator3.validationResult)(req);
      if (!err.isEmpty) {
        next(import_boom2.default.badRequest("error", err.array()));
      } else {
        const { id } = req.body;
        if (typeof id === "undefined")
          return;
        import_pm2.default.stop(id, (error) => {
          if (error) {
            defaultErrorHandler(res, error);
          } else {
            defaultSucesshandler(res, "success");
          }
        });
      }
    } catch (error) {
      defaultErrorHandler(res, error);
    }
  });
}
__name(pm2Stop, "pm2Stop");
function pm2Reload(req, res, next) {
  return __async(this, null, function* () {
    try {
      const err = (0, import_express_validator3.validationResult)(req);
      if (!err.isEmpty) {
        next(import_boom2.default.badRequest("error", err.array()));
      } else {
        const { id } = req.body;
        console.log("pm2Reload", req.body);
        if (typeof id === "undefined")
          return;
        import_pm2.default.reload(id, (error) => {
          if (error) {
            defaultErrorHandler(res, error);
          } else {
            defaultSucesshandler(res, "success");
          }
        });
      }
    } catch (error) {
      defaultErrorHandler(res, error);
    }
  });
}
__name(pm2Reload, "pm2Reload");
function pm2Delete(req, res, next) {
  return __async(this, null, function* () {
    try {
      const err = (0, import_express_validator3.validationResult)(req);
      if (!err.isEmpty) {
        next(import_boom2.default.badRequest("error", err.array()));
      } else {
        const { id } = req.body;
        if (typeof id === "undefined")
          return;
        import_pm2.default.delete(id, (error) => {
          if (error) {
            defaultErrorHandler(res, error);
          } else {
            defaultSucesshandler(res, "success");
          }
        });
      }
    } catch (error) {
      defaultErrorHandler(res, error);
    }
  });
}
__name(pm2Delete, "pm2Delete");

// server/routes/pm2.ts
var router2 = (0, import_express2.Router)();
router2.get("/list", pm2List);
var vaildatorId = [
  (0, import_express_validator4.body)("id").notEmpty().withMessage("\u7528\u6237\u540D\u7C7B\u578B\u9519\u8BEF")
];
router2.post("/stop", vaildatorId, pm2Stop);
router2.post("/reload", vaildatorId, pm2Reload);
router2.post("/delete", vaildatorId, pm2Delete);
var pm2_default = router2;

// server/routes/user.ts
var import_express3 = require("express");
var import_express_validator6 = require("express-validator");

// server/servers/userServers.ts
var import_boom3 = __toESM(require("@hapi/boom"));
var import_express_validator5 = require("express-validator");
var import_jsonwebtoken2 = __toESM(require("jsonwebtoken"));

// server/utils/user-jwt.ts
var import_express_jwt = require("express-jwt");
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var jwtAuth = (0, import_express_jwt.expressjwt)({
  // 设置密钥
  secret: PRIVATE_KEY,
  // 设置为true表示校验，false表示不校验
  credentialsRequired: true,
  algorithms: [
    "ES256"
  ],
  // 自定义获取token的函数
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  getToken: (req) => {
    if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
      return req.headers.authorization.split(" ")[1];
    } else if (req.headers && req.headers["token"]) {
      return req.headers["token"];
    }
    return void 0;
  }
}).unless({
  path: [
    "/",
    "/api/demo/index",
    "/api/user/has_admin",
    "/api/user/create_admin",
    "/api/user/login",
    "/api/user/logout",
    "/api/pm2/list",
    "/api/pm2/stop",
    "/api/pm2/reload",
    "/api/pm2/delete"
  ]
});

// server/servers/userServers.ts
var userRepository = db_default.getRepository(User);
function hasAdmin(req, res) {
  return __async(this, null, function* () {
    const result = yield userRepository.findOneBy({
      role: "admin"
    });
    res.json({
      code: CODE_SUCCESS,
      msg: MESSAGE_SUCCESS,
      data: Boolean(result)
    });
  });
}
__name(hasAdmin, "hasAdmin");
function createAdmin(req, res, next) {
  return __async(this, null, function* () {
    const err = (0, import_express_validator5.validationResult)(req);
    if (!err.isEmpty()) {
      next(import_boom3.default.badRequest("error", err.array()));
    } else {
      const { username, password } = req.body;
      try {
        const admin = yield userRepository.findOneBy({
          role: "admin",
          username
        });
        if (admin) {
          next(import_boom3.default.badRequest("error", res.__("user.admin.adminExistence")));
        } else {
          const result = userRepository.create({
            role: "admin",
            username,
            password
          });
          yield userRepository.save(result);
          defaultSucesshandler(res, res.__("user.admin.createSuccessMessage"));
        }
      } catch (error) {
        defaultErrorHandler(res, error);
      }
    }
  });
}
__name(createAdmin, "createAdmin");
function login(req, res, next) {
  return __async(this, null, function* () {
    const err = (0, import_express_validator5.validationResult)(req);
    if (!err.isEmpty()) {
      next(import_boom3.default.badRequest("error", err.array()));
    } else {
      const { username, password } = req.body;
      try {
        const user = yield userRepository.findOneBy({
          username,
          password
        });
        if (user) {
          const token = import_jsonwebtoken2.default.sign({
            userid: user.userid,
            role: user.role
          }, PRIVATE_KEY, {
            expiresIn: "1d"
          });
          const result = __spreadProps(__spreadValues({}, user), {
            password: "",
            token
          });
          res.json({
            code: CODE_SUCCESS,
            msg: MESSAGE_SUCCESS,
            data: result
          });
        } else {
          next(import_boom3.default.badRequest("error", res.__("user.admin.adminExistence")));
        }
      } catch (error) {
        console.log(error instanceof Error, error.message);
        defaultErrorHandler(res, error);
      }
    }
  });
}
__name(login, "login");

// server/utils/i18n-warpper.ts
function defaultI18nWarpper(i18nStr) {
  return (value, { req, location, path: path2 }) => {
    return req["__"](i18nStr, {
      value,
      location,
      path: path2
    });
  };
}
__name(defaultI18nWarpper, "defaultI18nWarpper");

// server/routes/user.ts
var router3 = (0, import_express3.Router)();
router3.get("/has_admin", hasAdmin);
var createAdminValidation = [
  (0, import_express_validator6.body)("username").notEmpty().withMessage(defaultI18nWarpper("user.admin.emptyUserNameMessage")).isString().withMessage(defaultI18nWarpper("user.admin.notStringUserNameMessage")),
  (0, import_express_validator6.body)("password").notEmpty().withMessage(defaultI18nWarpper("user.admin.emptyPasswordMessage")).isString().withMessage(defaultI18nWarpper("user.admin.notStringPasswordMessage"))
];
router3.post("/create_admin", createAdminValidation, createAdmin);
router3.post("/login", createAdminValidation, login);
var user_default = router3;

// server/routes/index.ts
var router4 = (0, import_express4.Router)();
router4.use("/demo", demo_default);
router4.use("/user", user_default);
router4.use("/pm2", pm2_default);
var routes_default = router4;

// server/app.ts
var import_body_parser = __toESM(require("body-parser"));
var import_i18n = __toESM(require("i18n"));
var import_cors = __toESM(require("cors"));
var import_path = __toESM(require("path"));
var import_connect_history_api_fallback = __toESM(require("connect-history-api-fallback"));
var import_fs_extra = __toESM(require("fs-extra"));
console.log("svg", process.argv[2]);
var isDev = process.argv[2] === "dev";
import_i18n.default.configure({
  locales: [
    "en",
    "zh-cn"
  ],
  directory: __dirname + "/languages",
  queryParameter: "lang",
  defaultLocale: "zh-cn",
  objectNotation: true
});
var app = (0, import_express5.default)();
app.use((0, import_connect_history_api_fallback.default)());
app.use(import_body_parser.default.json());
app.use(import_body_parser.default.urlencoded({
  extended: true
}));
app.use((0, import_cors.default)());
app.use(import_i18n.default.init);
app.use("/", (req, res, next) => {
  if (req.url.startsWith("/api")) {
    next();
  } else {
    let pathName = req.url;
    const url = pathName.split("/");
    if (pathName == "/client") {
      pathName = "/index.html";
    } else if (url.length > 2 && url[1] === "client") {
      pathName = url.join("/").replace("/client", "");
    }
    const extName = import_path.default.extname(pathName);
    import_fs_extra.default.readFile(`./static${pathName}`, function(err, data) {
      if (err) {
        console.error(err);
        res.status(400).json(err);
      } else {
        const ext = getExt(extName);
        res.writeHead(200, {
          "Content-Type": ext + "; charset=utf-8"
        });
        res.write(data);
      }
      res.end();
    });
  }
});
app.use("/api", routes_default);
var getExt = /* @__PURE__ */ __name((extName) => {
  switch (extName) {
    case ".html":
      return "text/html";
    case ".css":
      return "text/css";
    case ".js":
      return "application/javascript";
    case ".ico":
      return "image/x-icon";
    case ".png":
      return "image/png";
    default:
      return "text/html";
  }
}, "getExt");
db_default.initialize().then(() => {
  console.log(`typeorm has started `);
}).catch((error) => {
  console.error(`typeorm error:${error}`);
});
app.listen(6174, () => {
  console.log("Server is running at http://localhost:6174");
});
