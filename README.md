# CDK TypeScript project:
## aws-server-less-ecommerce-transactions-microservice
node js
AWS serverles
stripe

## Useful commands

- `npm run build`
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
- `deploy` cdk deploy
- `desroy` cdk desroy
- `aws` aws configure
- `dev` cdk synth && sam local start-api -t cdk.out/TransactionsMicroserviceStack.template.json

## AWS Services

- `API Gateway`
- `CDK`
- `SNS`
- `SQS`
- `Dynamo DB`
- `S3 bucket`

### API Gateway

- `get orders`
- `get transactions`

### ENV

- STRIPE_PUBLISHABLE_KEY=****\*\*****
- STRIPE_SECRET_KEY=****\*\*****
- SNS_TOPIC=order_consume-Topic
- SNS_TOPIC_ARN=customer-topic

### Handlers

- `Create orders`  
   This property allows the backend to create new orders when customers make purchases on the frontend.It should support features like adding products to the order, specifying quantities, calculating prices, and handling the order's state (e.g., pending, processing, shipped).

- `Get orders`  
   This property enables the backend to retrieve a list of orders based on various parameters such as order status, customer ID, date, and more.
   It is essential for store administrators and customers to view and manage their orders.

- `Get order`
   This feature allows the backend to retrieve detailed information about a specific order. This can include the list of products in the order, order status, customer details, and transaction information.

- `Get tranactions`
   This property enables the backend to fetch transaction records associated with orders.
   It's crucial for tracking payment information, such as payment method, transaction ID, and transaction status.

- `db-connections`
   Maintaining efficient and secure database connections is a critical property for an e-commerce backend.
   It should include features like connection pooling to manage database connections efficiently and securely, as well as handling  database queries and data retrieval.

### Utilities

- `Database client (sql)` Dynamo DB
