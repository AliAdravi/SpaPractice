
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
    id: Number;
    email: string;
    fullName: string;
    password: string;
    status: string;
    token: string;
    refreshToken: string;
}
