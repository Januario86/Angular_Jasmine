import { serialize } from "v8";
import { TokenService } from "./token.service"

describe('O serviço TokenService',()=>{
    it('deve ser instanciado',()=>{
        const service = new TokenService();
        expect(service).toBeTruthy();
    });

    it("de guardar um token",()=>{
        const token = "testetoken";
        const serviceToken = new TokenService();
        serviceToken.setToken(token);
        expect(serviceToken.hasToken()).toBeTruthy();
        expect(serviceToken.getToken()).toBe("testetoken");
    });
})