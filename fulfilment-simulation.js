const getDefaultOutput = () => {
    return {
        items: [
            {
                requestIndex: 0,
                attachmentOfferings: [],
                id: "9999",
                listPrice: 67203,
                offerings: [],
                price: 67203,
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
                        id: 1,
                        deliveryChannel: "delivery",
                        name: "LAB - Regular",
                        shippingEstimate: "1bd",
                        price: 846,
                        pickupStoreInfo: null,
                    },
                    {
                        id: 2,
                        deliveryChannel: "pickup-in-point",
                        name: "Curbside pickup",
                        shippingEstimate: "0bd",
                        price: 0,
                        availableDeliveryWindows: [
                            {
                                startDateUtc: "2021-08-11T08:00:00+00:00",
                                endDateUtc: "2021-12-12T13:00:00+00:00",
                                price: 0,
                            },
                        ],
                        pickupStoreInfo: {
                            isPickupStore: true,
                            friendlyName: "Shell Pickup Simulation",
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
                        id: "carrefourbrscanandgo_XSB",
                        deliveryChannel: "pickup-in-point",
                        name: "Ta-Ta Express",
                        shippingEstimate: "0bd",
                        price: 0,
                        availableDeliveryWindows: [
                            {
                                startDateUtc: "2021-08-12T08:00:00+00:00",
                                endDateUtc: "2021-08-21T17:00:00+00:00",
                                price: 0,
                            },
                        ],
                        distance: 0.313686341047287,
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
                            businessHours: [
                                {
                                    DayOfWeek: 0,
                                    OpeningTime: "09:00:00",
                                    ClosingTime: "16:00:00",
                                },
                                {
                                    DayOfWeek: 1,
                                    OpeningTime: "07:00:00",
                                    ClosingTime: "21:00:00",
                                },
                                {
                                    DayOfWeek: 2,
                                    OpeningTime: "07:00:00",
                                    ClosingTime: "21:00:00",
                                },
                                {
                                    DayOfWeek: 3,
                                    OpeningTime: "07:00:00",
                                    ClosingTime: "21:00:00",
                                },
                                {
                                    DayOfWeek: 4,
                                    OpeningTime: "07:00:00",
                                    ClosingTime: "21:00:00",
                                },
                                {
                                    DayOfWeek: 5,
                                    OpeningTime: "07:00:00",
                                    ClosingTime: "21:00:00",
                                },
                                {
                                    DayOfWeek: 6,
                                    OpeningTime: "07:00:00",
                                    ClosingTime: "21:00:00",
                                },
                            ],
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
