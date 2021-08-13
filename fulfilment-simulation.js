const getDefaultOutput = () => {
    return {
        items: [
            {
                requestIndex: 0,
                attachmentOfferings: [],
                id: "9999",
                listPrice: 150000,
                offerings: [],
                price: 150000,
                priceValidUntil: null,
                quantity: 1,
                seller: 1,
            },
            {
                requestIndex: 0,
                attachmentOfferings: [],
                id: "9999",
                listPrice: 140000,
                offerings: [],
                price: 140000,
                priceValidUntil: null,
                quantity: 1,
                seller: 1,
            },
        ],
        logisticsInfo: [
            {
                itemIndex: 0,
                quantity: 1024,
                shipsTo: ["BRA"],
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
                        id: "petrobras-pickup",
                        deliveryChannel: "pickup-in-point",
                        name: "Petrobras Pickup",
                        shippingEstimate: "3bd",
                        price: 0,
                        availableDeliveryWindows: [],
                        pickupStoreInfo: {
                            isPickupStore: true,
                            friendlyName: "Petrobras Pickup",
                            address: {
                                addressType: "pickup",
                                receiverName: null,
                                addressId:
                                    "548304ed-dd40-4416-b12b-4b32bfa7b1e0",
                                postalCode: "04626-911",
                                city: "São Paulo",
                                state: "SP",
                                country: "BRA",
                                street: "",
                                number: "",
                                neighborhood: "",
                                complement: "",
                                reference: null,
                                geoCoordinates: [
                                    -23.628699633226937, -46.65713825400928,
                                ],
                            },
                            additionalInfo: "",
                        },
                    },
                    {
                        id: "tata-express",
                        deliveryChannel: "pickup-in-point",
                        name: "Ta-Ta Express",
                        shippingEstimate: "2bd",
                        price: 0,
                        availableDeliveryWindows: [],
                        pickupStoreInfo: {
                            isPickupStore: true,
                            friendlyName: "Ta-Ta Express",
                            address: {
                                addressType: "pickup",
                                receiverName: null,
                                addressId:
                                    "548304ed-dd40-4416-b12b-4b32bfa7b1e0",
                                postalCode: "01003-000",
                                city: "São Paulo",
                                state: "SP",
                                country: "BRA",
                                street: "",
                                number: "",
                                neighborhood: "",
                                complement: "",
                                reference: null,
                                geoCoordinates: [-46.63686, -23.54889],
                            },
                            additionalInfo: "",
                        },
                    },
                    {
                        id: "tata-express-montevideo",
                        deliveryChannel: "pickup-in-point",
                        name: "Ta-Ta Express Montevideo",
                        shippingEstimate: "2bd",
                        price: 0,
                        availableDeliveryWindows: [],
                        pickupStoreInfo: {
                            isPickupStore: true,
                            friendlyName: "Ta-Ta Express Montevideo",
                            address: {
                                addressType: "pickup",
                                receiverName: null,
                                addressId: "dGEtdGFleHByZXNz",
                                postalCode: "01508-020",
                                city: "São Paulo",
                                state: "SP",
                                country: "BRA",
                                street: "",
                                number: "",
                                neighborhood: "",
                                complement: "",
                                reference: null,
                                geoCoordinates: [
                                    -46.637659757671294, -23.562553033977235
                                ],
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
