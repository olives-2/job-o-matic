export class Client {
    protected static url = import.meta.env.VITE_JOB_O_MATIC_HOST 
        + ":" 
        + import.meta.env.VITE_JOB_O_MATIC_PORT;
    protected endpoint: string;

    protected constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    protected getUrl(){
        return Client.url + "/" + this.endpoint
    }

    public async getAll() {
        const response = await fetch(`${this.getUrl()}`)
        return await response.json();
    }

    public async getOneById(id: number) {
        const response = await fetch(`${this.getUrl()}/${id}`)
        return await response.json();
    }
}