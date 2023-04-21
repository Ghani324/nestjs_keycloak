"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatePipe = void 0;
const common_1 = require("@nestjs/common");
let ValidatePipe = class ValidatePipe {
    transform(value, metadata) {
        console.log("Inside Validate");
        console.log(value);
        const PriceAgeToInt = parseInt(value.price);
        if (isNaN(PriceAgeToInt)) {
            console.log("Its a not a number");
            throw new common_1.HttpException("Its not a valid number", common_1.HttpStatus.BAD_REQUEST);
        }
        console.log("Its a number");
        const result = Object.assign(Object.assign({}, value), { price: PriceAgeToInt });
        console.log(result);
        return result;
    }
};
ValidatePipe = __decorate([
    (0, common_1.Injectable)()
], ValidatePipe);
exports.ValidatePipe = ValidatePipe;
//# sourceMappingURL=validate.pipe.js.map