import { ArgumentMetadata, HttpException, HttpStatus, Injectable, ParseIntPipe, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("Inside Validate")
    console.log(value)
  const PriceAgeToInt=parseInt(value.price)
  if(isNaN(PriceAgeToInt)){
    console.log("Its a not a number")
    throw new HttpException("Its not a valid number",HttpStatus.BAD_REQUEST)
    
  }
  console.log("Its a number")
    const result={...value,price:PriceAgeToInt}
    console.log(result)
    return result
  }
}
