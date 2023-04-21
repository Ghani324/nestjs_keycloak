"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.testData = {
            "peter@gmail.com": [
                "i am peter",
                "not my fault",
                "binance is bad",
                "kevin is my best friend",
            ],
            "mark@gmail.com": [
                "i am mark",
                "conforable with risk",
                "never lost a trade",
                "alameda rocks!",
            ],
        };
    }
    async login(username, password) {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.http.post('http://127.0.0.1:8080/realms/myrealm/protocol/openid-connect/token', new URLSearchParams({
            client_id: 'myclient',
            client_secret: 'FxbXv9UrsxcN1aF54QoIaKbYUVnoxJkY',
            grant_type: 'password',
            username,
            password
        })));
        console.log("access_token", data.access_token);
        return data;
    }
    async test(email) {
        console.log("data", this.testData[email]);
        return this.testData[email];
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map