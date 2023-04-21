import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
//Reactive X
@Injectable()
export class AuthService {
  private testData = {
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
  constructor(private http: HttpService) {}

  async login(username: string, password: string) {
    // console.log('got here')
    const { data } = await firstValueFrom(
      this.http.post(
        'http://127.0.0.1:8080/realms/myrealm/protocol/openid-connect/token',
        new URLSearchParams({
          client_id: 'myclient',
          client_secret: 'FxbXv9UrsxcN1aF54QoIaKbYUVnoxJkY',
          grant_type:'password', 
          username,
          password
        }),
      ),
    );
    console.log("access_token",data.access_token)
    return data;
  }

async test(email:string){
  console.log("data",this.testData[email])
return this.testData[email];
}

}
//auth0 - jsonwebtoken

// client_id=nest
// &client_secret=625baf8d-2be8-4850-95cc-ec19c0be2752
// &grant_type=password
// &username=user1@user.com
// &password=123456
