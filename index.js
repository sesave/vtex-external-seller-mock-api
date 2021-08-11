const express = require('express')
const path = require('path')
const fulfilmentSimulationController = require("./fulfilment-simulation");
const orderPlacementController = require("./order-placement");
const orderDispatchingController = require("./order-dispatching");
const orderCancelController = require("./order-cancel");
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json())

// Logging
app.use((req, res, next) => {
    console.log("-------------------------");
    console.log("URL - " + req.method, req.originalUrl);
    console.log("HEADERS -", JSON.stringify(req.headers));
    console.log("BODY -", JSON.stringify(req.body));
    next();
});

// Routes
app.post('/pvt/orderForms/simulation', fulfilmentSimulationController);
app.post('/pvt/orders', orderPlacementController);
app.post('/pvt/orders/:orderId/fulfill', orderDispatchingController);
app.post('/pvt/orders/:orderId/cancel', orderCancelController);

// Run
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
