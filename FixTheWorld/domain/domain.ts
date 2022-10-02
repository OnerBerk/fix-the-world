// Generated using typescript-generator version 2.0.400 on 2022-10-02 18:42:15.

export class User {
    id: number;
    version: number;
    userFirstname: string;
    userLastname: string;
    userNickname: string;
    userEmail: string;
    userPassword: string;
    createdAt: Date;
    updatedAt: Date;
    roles: Role[];
}

export class Role {
    id: number;
    name: string;
}
