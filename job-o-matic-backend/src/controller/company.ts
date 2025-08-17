import { getAll, getOneById } from "../db/company";

export async function getAllCompanies(){
    const companies = await getAll();
    return companies;
}

export async function getCompanyById(id: number){
    const company = await getOneById(id);
    return company;
}