

export const Customer = {
  list:
  [
    {
      "customerId": 94321,
      "firstName": "Aaron",
      "lastName": "Alexander",
      "customerType": 100,
      "addresses": [],
      "contacts": []
    },
    {
      "customerId": 4109,
      "firstName": "Aaron",
      "lastName": "Allen",
      "customerType": 104,
      "addresses": [],
      "contacts": []
    },
    {
      "customerId": 72061,
      "firstName": "Aaron",
      "lastName": "Alvarado",
      "customerType": 100,
      "addresses": [],
      "contacts": []
    },
    {
      "customerId": 31532,
      "firstName": "Aaron",
      "lastName": "Alvarez",
      "customerType": 101,
      "addresses": [],
      "contacts": []
    },
    {
      "customerId": 52742,
      "firstName": "Aaron",
      "lastName": "Anderson",
      "customerType": 101,
      "addresses": [],
      "contacts": []
    },
    {
      "customerId": 12093,
      "firstName": "Aaron",
      "lastName": "Anderson",
      "customerType": 102,
      "addresses": [],
      "contacts": []
    },
    {
      "customerId": 82746,
      "firstName": "Aaron",
      "lastName": "Anderson",
      "customerType": 102,
      "addresses": [],
      "contacts": []
    },
    {
      "customerId": 59087,
      "firstName": "Aaron",
      "lastName": "Anderson",
      "customerType": 104,
      "addresses": [],
      "contacts": []
    },
    {
      "customerId": 12139,
      "firstName": "Aaron",
      "lastName": "Armstrong",
      "customerType": 100,
      "addresses": [],
      "contacts": []
    },
    {
      "customerId": 20249,
      "firstName": "Aaron",
      "lastName": "Armstrong",
      "customerType": 100,
      "addresses": [],
      "contacts": []
    }
  ],
  detail: {
    "customerId": 4100,
    "firstName": "Aaron",
    "lastName": "Allen",
    "customerType": 104,
    "addresses": [
      {
        "addressId": 11,
        "street": "327 New Friends Colony",
        "city": "New Delhi",
        "stateId": 30,
        "country": "India",
        "zipCode": "110025",
        "isDefault": true,
        "state": {
          "stateId": 30,
          "stateName": "Delhi"
        }
      }
    ],
    "contacts": [
      {
        "contactId": 14,
        "phone": "2328727676",
        "email": "friends@yahoo.com",
        "isDefault": true,
        "customerId": 4100
      }
    ]
  }
}

export const Auth ={
  credential: {
    email: 'test@gmail.com',
    password: 'dummyPass',
    rememberMe: false
  },
  loginRespone: {
    id: 1,
    fullName: "Test User",
    email:"test@gmail.com",
    refreshToken:'reft-token',
    token:"eyJhbGciOiJIUJtg...ciOiJIUJ"
  }
}