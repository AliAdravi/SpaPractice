
export interface ICustomer {
    customerId: number;
    firstName: String;
    lastName: String;
    customerType: number
    addresses: IAddress[];
    contacts: IContact[]
}

export interface IAddress {
    addressId: number;
    street: string;
    city: string;
    stateId: number;
    country: string;
    zipCode: string;
    isDefault: boolean;
    state: IState
}

export interface IContact {
    contactId : number;
    phone: string;
    email: string;
    isDefault: boolean;
    customerId: number;
}

export interface IState {
    stateId: number;
    stateName: string;
}