# VTEX mock server

Back-end developed to simulate a [VTEX External Seller](https://developers.vtex.com/docs/guides/external-seller-integration-guide).
Used for analyzing external seller API behaviors with an API developed outside VTEX.

## Endpoints:
- Fulfilment Simulation (/pvt/orderForms/simulation)
- Order Cancel (/pvt/orders/:orderId/cancel)
- Order Dispatching (/pvt/orders/:orderId/fulfill)
- Order Placement (/pvt/order)

## Stack
- Node JS
- Express 4
- Heroku for deploy

## Installation

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js is required.

Install dependencies:

```console
$ npm install
```

Start the server:

```console
$ npm start
```


