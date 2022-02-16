import { Employee } from "types";

export const getEmployeesByCompany = {
    async get(company: string): Promise<Employee[]> {
        return fetch(`https://api.github.com/orgs/${company}/members`)
            .then(r => r.json());
    }
}

export const getEmployeeByLogin = {
    async get(login: string): Promise<Employee> {
        return fetch(`https://api.github.com/users/${login}`)
            .then(r => r.json())

    }
}