import { Client } from "./client";

class CompanyClient extends Client{

    static #instance: Client;

    public static get instance(): Client{
        if(!CompanyClient.#instance){
            CompanyClient.#instance = new CompanyClient();
        }
        return CompanyClient.#instance;
    }

    private constructor(){
        super("company");
    }
}

export default CompanyClient.instance as CompanyClient;