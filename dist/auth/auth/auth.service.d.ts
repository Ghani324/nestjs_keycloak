import { HttpService } from '@nestjs/axios';
export declare class AuthService {
    private http;
    private testData;
    constructor(http: HttpService);
    login(username: string, password: string): Promise<any>;
    test(email: string): Promise<any>;
}
