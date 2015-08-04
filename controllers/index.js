var indexController = {}

indexController.index = function(req, res, next){
    var resp_json = {
        results: [
            {
                BusCat01: "Household",
                City: "Orlando",
                CompanyDescription: "Household",
                CompanyName: "Bed & Bath Store",
                LatLong: "12.345,-54.321",
                Latitude: 12.345,
                Longitude: -54.321,
                MajorID: 33333,
                MinorID: 444,
                SalesPerson: "Robert",
                State: "FL",
                StreetAddress: "12 A Ave.",
                UUID: "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
                WebPageUrl: "http://www.Blah.com",
                createdAt: "2015-07-25T16:22:06.522Z",
                objectId: "Vq3lmoE0PA",
                updatedAt: "2015-07-27T19:03:57.808Z"
            },
            {
                BusCat01: "Household",
                City: "Orlando",
                CompanyDescription: "Household",
                CompanyName: "Bed & Bath Store",
                LatLong: "12.345,-54.321",
                Latitude: 12.345,
                Longitude: -54.321,
                MajorID: 33333,
                MinorID: 444,
                SalesPerson: "Robert",
                State: "FL",
                StreetAddress: "12 A Ave.",
                UUID: "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
                WebPageUrl: "http://www.Blah.com",
                createdAt: "2015-07-25T16:22:06.522Z",
                objectId: "Vq3lmoE0PA",
                updatedAt: "2015-07-27T19:03:57.808Z"
            }
        ]
    }
    res.status(200).json(resp_json);
}

module.exports = indexController;