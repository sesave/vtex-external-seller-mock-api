module.exports = (req, res) => {
    res.json({
        date: (new Date()).toISOString(),
        marketplaceOrderId: req.body.marketplaceOrderId,
        orderId: req.params.orderId,
        receipt: null
    });
}
