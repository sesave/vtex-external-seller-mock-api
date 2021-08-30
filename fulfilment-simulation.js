const getDefaultOutput = () => {
    return {
        items: [
            {
                requestIndex: 0,
                attachmentOfferings: [],
                id: "9999",
                listPrice: 149000,
                offerings: [],
                price: 149000,
                priceValidUntil: null,
                quantity: 1,
                seller: 1,
            },
        ],
        logisticsInfo: [
            {
                itemIndex: 0,
                quantity: 1024,
                shipsTo: ["URY"],
                slas: [
                    {
                        id: "Standard",
                        deliveryChannel: "delivery",
                        name: "Standard",
                        shippingEstimate: "2bd",
                        price: 550,
                        pickupStoreInfo: null,
                    },
                    {
                        id: "Express",
                        deliveryChannel: "delivery",
                        name: "Express",
                        shippingEstimate: "4h",
                        price: 1050,
                        pickupStoreInfo: null,
                    },
                    {
                        id: "1 Day",
                        deliveryChannel: "delivery",
                        name: "1 Day",
                        shippingEstimate: "1bd",
                        price: 850,
                        pickupStoreInfo: null,
                    },
                    {
                        id: "ta-ta-carrasco",
                        deliveryChannel: "pickup-in-point",
                        name: "Ta-Ta Camino Carrasco",
                        shippingEstimate: "1bd",
                        price: 0,
                        availableDeliveryWindows: [],
                        pickupStoreInfo: {
                            isPickupStore: true,
                            friendlyName: "Ta-Ta Camino Carrasco",
                            address: {
                                addressType: "pickup",
                                receiverName: null,
                                addressId: "ta-ta-cavia",
                                postalCode: "11400",
                                city: "Montevideo",
                                state: "Montevideo",
                                country: "URY",
                                street: "Cno. Carrasco",
                                number: "4656",
                                neighborhood: null,
                                complement: "",
                                reference: null,
                                geoCoordinates: [
                                    -56.1204465289207,
                                    -34.71270478845907,
                                ],
                            },
                            additionalInfo: "",
                        },
                    },
                    {
                        id: "ta-ta-cavia",
                        deliveryChannel: "pickup-in-point",
                        name: "Ta-Ta Sucursal Cavia",
                        shippingEstimate: "2bd",
                        price: 0,
                        availableDeliveryWindows: [],
                        pickupStoreInfo: {
                            isPickupStore: true,
                            friendlyName: "Ta-Ta Sucursal Cavia",
                            address: {
                                addressType: "pickup",
                                receiverName: null,
                                addressId: "ta-ta-cavia",
                                postalCode: "11300",
                                city: "Montevideo",
                                state: "Montevideo",
                                country: "URY",
                                street: "Luis B. Cavia",
                                number: "2610",
                                neighborhood: null,
                                complement: "",
                                reference: null,
                                geoCoordinates: [-56.1577, -34.90799],
                            },
                            additionalInfo: "",
                        },
                    },
                ],
                stockBalance: 1024,
                deliveryChannels: [
                    {
                        id: "delivery",
                        stockBalance: 1000,
                    },
                    {
                        id: "pickup-in-point",
                        stockBalance: 24,
                    },
                ],
            },
        ],
        geoCoordinates: [],
        postalCode: null,
        country: null,
    };
};

module.exports = (req, res) => {
    const result = getDefaultOutput();
    const defaultItem = result.items[0];
    const defaultLogisticsInfo = result.logisticsInfo[0];

    result.items = [];
    result.logisticsInfo = [];
    for (let i = 0; i < req.body.items.length; i++) {
        result.items[i] = {
            ...defaultItem,
            requestIndex: i,
            seller: parseInt(req.body.items[i].seller),
            id: req.body.items[i].id,
            quantity: Math.min(req.body.items[i].quantity, 1024),
        };
        result.logisticsInfo[i] = {
            ...defaultLogisticsInfo,
            itemIndex: i,
        };
    }

    result.postalCode = req.body.postalCode || null;
    result.country = req.body.country || null;
    res.json(result);
};
