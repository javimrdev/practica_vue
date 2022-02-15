import { Employee } from "../types/Employee";

export const getEmployeesByCompany = (company: string): Promise<Employee[]> => {
    return fetch(`https://api.github.com/orgs/${company}/members`)
        .then(r => r.json());
}