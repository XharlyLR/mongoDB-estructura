var comanda01 = 
{
    "_id": 01,
    "data": { "$date":"2016-09-11T22:00:00.000Z" },
    "domicili": true,
    "quantProd": 2,
    "preuTotal": 17.5,

    "productes":[
        {
           "nom": "Pizza BBQ",
            "descripcio": "Pizza amb salsa barbacoa, baco, cheddar, vedella i ceba",
            "preu": 10.5,

            "categoria": {
                "categoria_id": 2,
                "nom": "Pizza especial"
            }
        },

        {
            "nom": "Hamburguesa completa",
             "descripcio": "Hamburguesa amb tomaquet, baco, formatge, ou i ceba",
             "preu": 7,
 
             "categoria": {
                 "categoria_id": 3,
                 "nom": "Hamburgueses"
             }
        }
    ],

    "client":{
        "nom": "Albert",
        "cognoms": "Garcia",
        "adreça":{
            "carrer": "Av. 101",
            "numero": 44,
            "pis": "tercer",
            "porta": 2,
            "codiPostal": 08248,

            "localitat": {
                "localitat_id": 1,
                "nom": "Barcelona",

                "provincia":{
                    "provincia_id": 1,
                    "nom": "Barcelona"
                }
            }
        },

        "telefon": 939483923,
    },

    "botiga": {
        "botiga_id": 1,
        "adreça":{
            "carrer": "Av. 10",
            "numero": 80,
            "codiPostal": 08721,

            "localitat": {
                "localitat_id": 1,
                "nom": "Barcelona",

                "provincia":{
                    "provincia_id": 1,
                    "nom": "Barcelona"
                }
            }
        },

        "empleat": {
            "empleat_id": 300,
            "nom": "Marc",
            "cognoms": "Gomez",
            "nif": "45658122D",
            "telefon": 953224564,

            "adreça":{
                "carrer": "Av. 11",
                "numero": 4,
                "pis": "segon",
                "porta": 2,
                "codiPostal": 08721,
    
                "localitat": {
                    "localitat_id": 1,
                    "nom": "Barcelona",
    
                    "provincia":{
                        "provincia_id": 1,
                        "nom": "Barcelona"
                    }
                }
            },

            "tipus": "repartidor"
        }
    }
}