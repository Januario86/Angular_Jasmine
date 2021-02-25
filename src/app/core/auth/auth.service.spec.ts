import { TestBed } from "@angular/core/testing";
import { UserService } from "../user/user.service";
import { AuthService } from "./auth.service";
import {HttpClientModule} from "@angular/common/http";

describe('O serviço AuthService',()=>{
    let service : AuthService;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [AuthService]
        });
        service = TestBed.get(AuthService);
    });

    it('deve ser instanciado',()=>{
        expect(service).toBeTruthy();
    });
})