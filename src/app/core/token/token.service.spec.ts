import { serialize } from "v8";
import { TokenService } from "./token.service"

describe('O serviço TokenService',()=>{
    let token;
    let service;

    it('deve ser instanciado',()=>{
        const service = new TokenService();
        expect(service).toBeTruthy();
    });

    it('de guardar um token',()=>{
        const token = 'testetoken';
        const serviceToken = new TokenService();
        serviceToken.setToken(token);
        expect(serviceToken.hasToken()).toBeTruthy();
        expect(serviceToken.getToken()).toBe('testetoken');
    });

    it('deve remover um token',()=>{
        const token = 'testetoken';
        const service = new TokenService();
        service.setToken(token);
        service.removeToken();
        expect(service.hasToken()).toBeFalsy();
        expect(service.getToken()).toBeFalsy();
    });

    afterEach(() =>{
        localStorage.clear();
    })

    beforeEach(()=>{
        const token = 'testetoken';
        const service = new TokenService();
    })
});