module.exports = (req, res) => {
    const result = []
    for (const order of req.body) {
        result.push({
            orderId: Math.round(Math.random() * 100000000000) + "-A",
            followUpEmail: "gaetan.lemoing+clientfollowup@mirakl.com",
            ...order
        })
    }
    res.json(result)
}
