
export interface ICredential {
    email: string;
    password: string;
}

export interface IAuthData {
    id: number;
    name: string;
    token: string;
    refreshToken: string;
}

export interface IUser {
    id: number;
    email: string;
    fullName: string;
    password: string;
    status: number;
    token: string;
    refreshToken: string;
}
