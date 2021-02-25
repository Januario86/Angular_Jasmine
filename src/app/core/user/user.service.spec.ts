import { TestBed } from "@angular/core/testing";
import { TokenService } from "../token/token.service";
import { UserService } from "./user.service"

describe('O serviço UserService', () => {
    let service: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserService]
        });
        service = TestBed.get(UserService);
    })

    it('deve ser instanciado', () => {
        expect(service).toBeTruthy();
    });

    it('deve, através de um token, recuperar as informações do usuário', () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTYxNDI2MzA1MiwiZXhwIjoxNjE0MzQ5NDUyfQ.BvUdfYT5VR6Q4BM0JNqhTIH8oMzuAuQn6ua5VfxcI1Y";
        service.setToken(token);
        expect(service.isLogged).toBeTruthy();
        service.getUser().subscribe(user => {
            expect(user.name).toBe("flavio");
        });
    });

    it('deve limpar as informações no logout', () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTYxNDI2MzA1MiwiZXhwIjoxNjE0MzQ5NDUyfQ.BvUdfYT5VR6Q4BM0JNqhTIH8oMzuAuQn6ua5VfxcI1Y";
        service.setToken(token);
        service.logout();
        expect(service.isLogged()).toBeFalsy();
        expect(service.getUserName()).toBe("");
    })
});