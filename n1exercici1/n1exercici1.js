var vendaUlleres01 = 
{
    "_id": 01,
    "ulleres": [
        {
            "ulleres_id": 11,
            "marca": "Rayban",
            "graduacio": {
                "esquerre": 1,
                "dret": 1.5,
            },
            "tipusMontura": "pasta",
            "color": {
                "montura": "negre",
                "esquerre": "transparent",
                "dret": "transparent"
            },
            "preu": 100,
        },

        {
            "ulleres_id": 121,
            "marca": "Emporio Armani",
            "graduacio": {
                "esquerre": 1,
                "dret": 1.5,
            },
            "tipusMontura": "pasta",
            "color": {
                "montura": "blau",
                "esquerre": "transparent",
                "dret": "transparent"
            },
            "preu": 120,
        }
    ],

    "proveidor": {
        "proveidor_id": 03,
        "nom": "Glassy S.L.",
        "adreça":{
            "carrer": "Av. 101",
            "numero": 44,
            "pis": "tercer",
            "porta": 2,
            "ciutat": "barcelona",
            "codiPostal": 08248,
            "pais": "Espanya"
        },
        "telefon": 932237691,
        "fax": 555545434,
        "nif": "64337357R"
    },

    "client":{
        "nom": "Albert",
        "adreça": "Av. 123, 15, 1, 3, 08472, Barcelona, Espanya",
        "telefon": 939483923,
        "email": "albgg@gmail.com",
        "dataRegistre": { "$date":"2013-09-11T00:00:00.000Z" },
        "clientRecom_id": 02,
        "empleat_id": 305, 
    }
}