interface PlaygroundTab {
  name?: string;
  endpoint: string;
  query: string;
  variables?: string;
  headers?: Record<string, string>;
}

const tabs: PlaygroundTab[] = [
  {
    name: 'Register user',
    endpoint: '/graphql',
    query: `mutation CreateUser($data: UserCreateInput!) {
  createOneUser(data: $data) {
    id
    email
    name
  }
}`,
    variables: JSON.stringify({
      data: {
        email: 'alice@example.com',
        name: 'Alice',
        password: 'secret123',
      },
    }, null, 2),
  },
  {
    name: 'Login',
    endpoint: '/graphql',
    query: `mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user { id email name }
  }
}`,
    variables: JSON.stringify({
      email: 'alice@example.com',
      password: 'secret123',
    }, null, 2),
  },
  {
    name: 'My user',
    endpoint: '/graphql',
    headers: { Authorization: 'Bearer <token>' },
    query: `query MyUser {
  myUser {
    id
    email
    name
  }
}`,
  },
  {
    name: 'Create portfolio',
    endpoint: '/graphql',
    headers: { Authorization: 'Bearer <token>' },
    query: `mutation CreatePortfolio($data: PortfolioCreateInput!) {
  createOnePortfolio(data: $data) {
    id
    name
    description
  }
}`,
    variables: JSON.stringify(
      {
        data: {
          name: 'Main Portfolio',
          description: 'Primary account',
          owner: { connect: { id: 1 } },
        },
      },
      null,
      2,
    ),
  },
  {
    name: 'My portfolios',
    endpoint: '/graphql',
    headers: { Authorization: 'Bearer <token>' },
    query: `query MyPortfolios {
  myPortfolios {
    id
    name
    description
    assetQuantity
  }
}`,
  },
  {
    name: 'Create public asset',
    endpoint: '/graphql',
    headers: { Authorization: 'Bearer <token>' },
    query: `mutation CreatePublicAsset($data: PublicAssetCreateInput!) {
  createOnePublicAsset(data: $data) {
    id
    symbol
    market
    baseAsset {
      id
      name
      quantity
      portfolioId
    }
  }
}`,
    variables: JSON.stringify(
      {
        data: {
          symbol: 'AAPL',
          market: 'NASDAQ',
          baseAsset: {
            create: {
              name: 'Apple Stock',
              quantity: 0,
              portfolio: { connect: { id: 1 } },
            },
          },
        },
      },
      null,
      2,
    ),
  },
  {
    name: 'Make transaction',
    endpoint: '/graphql',
    headers: { Authorization: 'Bearer <token>' },
    query: `mutation MakeTransaction($data: TransactionCreateInput!) {
  makeTransaction(data: $data) {
    id
    transactionType
    assetQuantity
    unitPrice
    totalPrice
    assetId
  }
}`,
    variables: JSON.stringify(
      {
        data: {
          assetId: 1,
          transactionType: 'buy',
          assetQuantity: 10,
          currency: 'USD',
          unitPrice: 100,
        },
      },
      null,
      2,
    ),
  },
];

export default tabs;
