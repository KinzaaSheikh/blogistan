import config from ".../config.js"

import { Client, Account, ID } from "appwrite"

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService()

export default authService