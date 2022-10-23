
export const constants = {
    'baseApiUrl': "https://localhost:44330/api/",
    'pageSize': 10,
    Urls : {
        customer: {
            searh: 'https://localhost:44330/api/Customer/SearchCustomers',
            byId: 'https://localhost:44330/api/Customer/getCustomerById'
        },
        authentication: {
            login: 'https://localhost:44330/api/Authentication/login',
            register: 'https://localhost:44330/api/Authentication/register',
            refreshToken: 'https://localhost:44330/api/Authentication/refreshToken'
        }
        
    }
}