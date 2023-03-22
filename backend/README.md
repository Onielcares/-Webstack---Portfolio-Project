# EasyShop App API

## Introduction

This API allows you manage a pool of products, categories, and stores for a EasyShop App.

<br/>

## Getting Started
This API is currently  deployed to a remote server

**BASE URL**: `https://findmystore.onrender.com`

<br/>

## Error Handling

### Response Object

Errors are returned as JSON in the following format:

```
{
  status: 'error',
  code: 404,
  message: 'The requested resource was not found'
}
```
<br/>

### Response Keys

`status` - Status of the request. <br>
`code` - Status code of the error that occurred. <br>
`message` - Accompanying error message.

<br/>

## Endpoint Library

### Categories

#### `GET /api/v1/categories/base`

This fetches all the parent/base categories.

#### Query Parameters

This endpoint takes in no query parameter.

#### Request Body

This endpoint doesn't require a request body.

#### Sample Request

`curl https://findmystore.onrender.com/api/v1/categories/base`

#### Sample Response

```
{
    "status": "Success",
    "code": 201,
    "data": [
        {
            "_id": "64101ba48b2ea35f749936b8",
            "name": "Grocery",
            "parentId": null,
            "createdAt": "2023-03-14T07:00:52.801Z",
            "__v": 0
        },
        {
            "_id": "64101c51800e5bfc6f641d23",
            "name": "Computing",
            "parentId": null,
            "createdAt": "2023-03-14T07:03:45.734Z",
            "__v": 0
        },
        {
            "_id": "641054beec060519d7705701",
            "name": "Health & Beauty",
            "parentId": null,
            "createdAt": "2023-03-14T11:04:30.922Z",
            "__v": 0
        },
        {
            "_id": "64105619ec060519d7705708",
            "name": "Home & Office",
            "parentId": null,
            "createdAt": "2023-03-14T11:10:17.003Z",
            "__v": 0
        },
        {
            "_id": "6410562dec060519d770570a",
            "name": "Phones & Tablets",
            "parentId": null,
            "createdAt": "2023-03-14T11:10:37.599Z",
            "__v": 0
        },
        {
            "_id": "64105670ec060519d770570c",
            "name": "Electronics",
            "parentId": null,
            "createdAt": "2023-03-14T11:11:44.826Z",
            "__v": 0
        },
        {
            "_id": "64105684ec060519d770570e",
            "name": "Fashion",
            "parentId": null,
            "createdAt": "2023-03-14T11:12:04.955Z",
            "__v": 0
        },
        {
            "_id": "64105698ec060519d7705710",
            "name": "Baby Products",
            "parentId": null,
            "createdAt": "2023-03-14T11:12:24.431Z",
            "__v": 0
        },
        {
            "_id": "641056aeec060519d7705712",
            "name": "Gaming",
            "parentId": null,
            "createdAt": "2023-03-14T11:12:46.191Z",
            "__v": 0
        },
        {
            "_id": "641056c3ec060519d7705714",
            "name": "Sporting Goods",
            "parentId": null,
            "createdAt": "2023-03-14T11:13:07.665Z",
            "__v": 0
        },
        {
            "_id": "641056ddec060519d7705716",
            "name": "Automobile",
            "parentId": null,
            "createdAt": "2023-03-14T11:13:33.659Z",
            "__v": 0
        },
        {
            "_id": "641056edec060519d7705718",
            "name": "Other categories",
            "parentId": null,
            "createdAt": "2023-03-14T11:13:49.797Z",
            "__v": 0
        },
        {
            "_id": "6411d16863ee804bfda3ebab",
            "name": "Testing",
            "parentId": null,
            "createdAt": "2023-03-15T14:08:40.099Z",
            "__v": 0
        }
    ]
}
```

### Stores

#### `GET /api/v1/stores`

This fetches all the stores.

#### Query Parameters

This endpoint takes in no query parameter.

#### Request Body

This endpoint doesn't require a request body.

#### Sample Request

`curl https://findmystore.onrender.com/api/v1/stores`

#### Sample Response

```
{
    "status": "Success",
    "code": 200,
    "data": [
        {
            "_id": "6416d0331e2c9681fa030161",
            "name": "Jumia",
            "url": "https://www.jumia.com.ng",
            "createdAt": "2023-03-19T09:04:51.665Z",
            "__v": 0
        },
        {
            "_id": "6416e5ed1d7387e46e76e8f4",
            "name": "Konga",
            "url": "https://www.konga.com",
            "createdAt": "2023-03-19T10:37:33.907Z",
            "__v": 0
        },
        {
            "_id": "641739da63cc591a769380df",
            "name": "Kara",
            "url": "https://kara.com.ng",
            "createdAt": "2023-03-19T16:35:39.797Z",
            "__v": 0
        },
        {
            "_id": "64173a0b63cc591a769380e1",
            "name": "Slot",
            "url": "https://slot.ng",
            "createdAt": "2023-03-19T16:36:27.226Z",
            "__v": 0
        },
        {
            "_id": "64173aca63cc591a769380e5",
            "name": "Jiji",
            "url": "https://jiji.ng",
            "createdAt": "2023-03-19T16:39:38.955Z",
            "__v": 0
        },
        {
            "_id": "64173c1d63cc591a769380ea",
            "name": "Ajebomarket",
            "url": "https://www.ajebomarket.com",
            "createdAt": "2023-03-19T16:45:17.916Z",
            "__v": 0
        },
        {
            "_id": "641755eb2d98fe508fc08eba",
            "name": "Fouani",
            "url": "https://www.fouanistore.com/ng/en",
            "createdAt": "2023-03-19T18:35:23.614Z",
            "__v": 0
        },
        {
            "_id": "641762bb2d98fe508fc08ebd",
            "name": "Payporte",
            "url": "https://www.payporte.com",
            "createdAt": "2023-03-19T19:30:03.678Z",
            "__v": 0
        },
        {
            "_id": "641763272d98fe508fc08ebf",
            "name": "Autochek",
            "url": "https://www.autochek.africa/ng",
            "createdAt": "2023-03-19T19:31:51.989Z",
            "__v": 0
        },
        {
            "_id": "64176ab12d98fe508fc08ec2",
            "name": "Cars45",
            "url": "https://www.cars45.com/",
            "createdAt": "2023-03-19T20:04:01.419Z",
            "__v": 0
        }
    ]
}
```

### Products

#### `GET /api/v1/products`

This fetches all the products and return the first 10 products

#### Query Parameters

This endpoint takes in no query parameter.

#### Request Body

This endpoint doesn't require a request body.

#### Sample Request

`curl https://findmystore.onrender.com/api/v1/products`

#### Sample Response

```
{
    "status": "Success",
    "code": 200,
    "data": [
        {
            "_id": "6418969390592e0daf7959ba",
            "name": "ADIDAS Sports Performance Socks Light Nosh 3Pp",
            "categories": [
                "6411acf663ee804bfda3eb0b",
                "64105684ec060519d770570e"
            ],
            "stores": [
                "6416d0331e2c9681fa030161",
                "64173c1d63cc591a769380ea",
                "6416e5ed1d7387e46e76e8f4"
            ],
            "createdAt": "2023-03-20T17:23:31.909Z",
            "__v": 0
        },
        {
            "_id": "6418969390592e0daf7959bc",
            "name": "Danami Throne Of Grace Printed Hoodie- Light Grey",
            "categories": [
                "6411acf663ee804bfda3eb0b",
                "64105684ec060519d770570e"
            ],
            "stores": [
                "6416d0331e2c9681fa030161",
                "64173c1d63cc591a769380ea",
                "6416e5ed1d7387e46e76e8f4"
            ],
            "createdAt": "2023-03-20T17:23:31.934Z",
            "__v": 0
        },
        {
            "_id": "6418969390592e0daf7959be",
            "name": "ADIDAS Performance Football Shoes Predator 19.4 Tf",
            "categories": [
                "6411acf663ee804bfda3eb0b",
                "64105684ec060519d770570e"
            ],
            "stores": [
                "6416d0331e2c9681fa030161",
                "64173c1d63cc591a769380ea",
                "6416e5ed1d7387e46e76e8f4"
            ],
            "createdAt": "2023-03-20T17:23:31.942Z",
            "__v": 0
        },
        {
            "_id": "6418969390592e0daf7959c0",
            "name": "Mens Comfortable Loafers Soft Leather Slip On Shoes-Black",
            "categories": [
                "6411acf663ee804bfda3eb0b",
                "64105684ec060519d770570e"
            ],
            "stores": [
                "6416d0331e2c9681fa030161",
                "64173c1d63cc591a769380ea",
                "6416e5ed1d7387e46e76e8f4"
            ],
            "createdAt": "2023-03-20T17:23:31.947Z",
            "__v": 0
        },
        {
            "_id": "6418969390592e0daf7959c6",
            "name": "12 Pieces Of Men's Boxers - Color",
            "categories": [
                "6411acf663ee804bfda3eb0b",
                "64105684ec060519d770570e"
            ],
            "stores": [
                "6416d0331e2c9681fa030161",
                "64173c1d63cc591a769380ea",
                "6416e5ed1d7387e46e76e8f4"
            ],
            "createdAt": "2023-03-20T17:23:31.971Z",
            "__v": 0
        },
        {
            "_id": "6418969390592e0daf7959ce",
            "name": "Casual Flannel Men's Shirt",
            "categories": [
                "6411acf663ee804bfda3eb0b",
                "64105684ec060519d770570e"
            ],
            "stores": [
                "6416d0331e2c9681fa030161",
                "64173c1d63cc591a769380ea",
                "6416e5ed1d7387e46e76e8f4"
            ],
            "createdAt": "2023-03-20T17:23:31.990Z",
            "__v": 0
        },
        {
            "_id": "6418969390592e0daf7959d0",
            "name": "Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set - Blue",
            "categories": [
                "6411acf663ee804bfda3eb0b",
                "64105684ec060519d770570e"
            ],
            "stores": [
                "6416d0331e2c9681fa030161",
                "64173c1d63cc591a769380ea",
                "6416e5ed1d7387e46e76e8f4"
            ],
            "createdAt": "2023-03-20T17:23:31.993Z",
            "__v": 0
        },
        {
            "_id": "64189858a29e70bf96583a6c",
            "name": "Apple MacBook Air - 13.6\" - 8GB - 256GB - M2 - MIDNIGHT - 2022",
            "categories": [
                "64101c51800e5bfc6f641d23",
                "6411ac3163ee804bfda3eaeb"
            ],
            "stores": [
                "6416d0331e2c9681fa030161",
                "6416e5ed1d7387e46e76e8f4",
                "641739da63cc591a769380df"
            ],
            "createdAt": "2023-03-20T17:31:04.527Z",
            "__v": 0
        },
        {
            "_id": "64189858a29e70bf96583a6e",
            "name": "Apple MacBook Pro 16.2\" - 32GB - 1TB - 10 Cores - M1 Max - Silver",
            "categories": [
                "64101c51800e5bfc6f641d23",
                "6411ac3163ee804bfda3eaeb"
            ],
            "stores": [
                "6416d0331e2c9681fa030161",
                "6416e5ed1d7387e46e76e8f4",
                "641739da63cc591a769380df"
            ],
            "createdAt": "2023-03-20T17:31:04.531Z",
            "__v": 0
        },
        {
            "_id": "64189858a29e70bf96583a8a",
            "name": "DELL CHROMEBOOK 11, 4GB RAM, 16GB SSD + 32GBFLASH",
            "categories": [
                "64101c51800e5bfc6f641d23",
                "6411ac3163ee804bfda3eaeb"
            ],
            "stores": [
                "6416d0331e2c9681fa030161",
                "6416e5ed1d7387e46e76e8f4",
                "641739da63cc591a769380df"
            ],
            "createdAt": "2023-03-20T17:31:04.588Z",
            "__v": 0
        }
    ]
}
```


### Search

#### `POST /api/v1/products/search`

This search for a product in the database and return every products that match the search keywords

#### Query Parameters

This endpoint takes in no query parameter.

#### Request Body

`name` : name of the product to search

#### Sample Request

`curl -X POST -H "Content-Type: application/json" -d '{ "name": "hp"}' https://findmystore.onrender.com/api/v1/products/`

#### Sample Response

```
{
    "status": "Success",
    "code": 200,
    "data": [
        {
            "product": "Hp Stream 11 Pro- Intel Celeron- Education Edition - 4GB RAM - 64GB HDD Windows 10 Pro+ BAG₦ 99,000₦ 170,00042%offers from4.1 out of 5(26)",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp 15 AMD - 12GB RAM 1TB HDD Windows 10 Pro- 2.3GHz To 3.2GHz₦ 252,000₦ 255,5001%4.7 out of 5(29)",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp CHROMEBOOK, INTEL CELERON, 4GB RAM,32GB EMMC WINS 10+BAG₦ 87,000",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp Notebook 11 - 256GB SSD Intel PENTIUM Q/C- TOUCH 4GB RAM Windows 10 Pro+ USB Light For Keyboard₦ 190,0004 out of 5(1)",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp EliteBook X360 1040 G8 Core I7 512GB SSD 16GB RAM 14\" TOUCHSCREEN WIN10 Pro BACKLIT Keyboard₦ 1,000,000₦ 1,658,00040%",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp Stream 11 Intel Celeron D/C  4GB RAM- 64GB HDD WIN 10+ BAG₦ 99,000₦ 150,75034%4.5 out of 5(6)",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp ProBook 11 X360- TOUCH Intel Celeron 128GB 4GB RAM WIN10 Pro₦ 140,000₦ 175,00020%4.8 out of 5(4)",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp ProBook 11 X360- 128GB SSD TOUCHSCREEN Intel PENTIUM -4GB RAM WIN10 Pro +32GB FLASH₦ 174,000₦ 175,0001%offers from4.5 out of 5(23)",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp Stream 11 Intel Celeron D/C  4GB RAM- 64GB HDD WIN 10+ USD LED LIGHT & POUCH₦ 129,000₦ 284,00055%",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp Notebook 15 AMD Athlon Gold 16GB RAM 2.4GHz To 3.3GHz 1TB HDD Windows 10 Pro+USB Light For Keyboard₦ 210,000₦ 250,00016%5 out of 5(3)",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp Laptop 15 Inch AMD RYZEN 3- 12GB RAM - 2.6GHz - 3.5GHz -1TB HDD Windows 11+ USB Light For Keyboard₦ 247,000₦ 388,00036%offers from3.6 out of 5(14)",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp Laptop 15 Inch AMD RYZEN 3- 16GB RAM - 2.6GHz - 3.5GHz -1TB HDD Windows 10+ HP MOUSE₦ 260,000",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp Notebook 15 AMD Athlon Gold 8GB RAM 2.4GHz To 3.3GHz 1TB HDD Windows 11₦ 190,000₦ 259,00027%4.5 out of 5(18)",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp ProBook 11 X360- 512GB SSD TOUCHSCREEN Intel PENTIUM Q/C  4GB RAM WIN10 Pro+ USB Light For Keyboard₦ 155,990₦ 180,00013%",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp Stream 11 Intel Celeron D/C  4GB RAM- 64GB HDD WIN 10+ BAG₦ 99,000₦ 170,00042%4 out of 5(2)",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp Notebook 15 AMD Athlon Gold 16GB RAM 2.4GHz To 3.3GHz 1TB HDD Windows 11 + HP MOUSE₦ 210,000₦ 320,00034%",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp ProBook 11 X360- 512GB SSD  TOUCHSCREEN Intel PENTIUM 4GB RAM WIN10 Pro RED + 32GB FLASH₦ 169,000₦ 238,00029%",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp Notebook 15 AMD Athlon Gold 12GB RAM 2.4GHz To 3.3GHz 1TB HDD Windows 10 Pro+USB Light For Keyboard₦ 200,000₦ 260,00023%5 out of 5(1)",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp 15 Intel Celeron N4020 8GB RAM, 1TB HDD, Wins 10 + Bag₦ 188,000₦ 233,00019%",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp Notebook 15 AMD Athlon Gold 8GB RAM 2.4GHz To 3.3GHz 1TB HDD Windows 10 Pro+USB Light For Keyboard₦ 190,000₦ 195,0003%4.3 out of 5(3)",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp Stream 14 Intel Celeron - 64GB HDD- 4GB RAM Windows 10+ 32GB Flash₦ 129,000₦ 160,00019%",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp Pavilion 15 AMD RYZEN 3 -Keyboard Light- 2.6GHz - 3.5GHz - 8GB RAM- 1TB HDD Windows 10 + Mouse₦ 250,000₦ 300,00017%5 out of 5(2)",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp Notebook15 Intel Core I3 Touchscreen 16GB RAM/1TB HDD Win 10₦ 310,000₦ 390,00021%5 out of 5(1)",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "product": "Hp Laptop 15- AMD RYZEN 3-Keyboard Light -12GB RAM/1TB HDD 2.6GHz - 3.5GHz- Windows 11₦ 263,000₦ 265,2001%4.8 out of 5(5)",
            "categories": [
                {
                    "name": "Computing"
                },
                {
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        }
    ]
}
```
