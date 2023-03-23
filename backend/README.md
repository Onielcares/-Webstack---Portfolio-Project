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

`curl -X POST -H "Content-Type: application/json" -d '{ "name": "hp"}' https://findmystore.onrender.com/api/v1/products/search`

#### Sample Response

```
{
    "status": "Success",
    "code": 200,
    "data": [
        {
            "_id": "641b43a20ba3aa98b2dce11e",
            "product": "Hp Stream 11 Pro- Intel Celeron- Education Edition - 4GB RAM - 64GB HDD Windows 10 Pro+ BAG₦ 99,000₦ 170,00042%offers from4.1 out of 5(26)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/243738/1.jpg?7257",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a20ba3aa98b2dce122",
            "product": "Hp 15 AMD - 12GB RAM 1TB HDD Windows 10 Pro- 2.3GHz To 3.2GHz₦ 252,000₦ 255,5001%4.7 out of 5(29)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/045718/1.jpg?0894",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a20ba3aa98b2dce124",
            "product": "Hp CHROMEBOOK, INTEL CELERON, 4GB RAM,32GB EMMC WINS 10+BAG₦ 87,000",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/1727002/1.jpg?7575",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a20ba3aa98b2dce12a",
            "product": "Hp Notebook 11 - 256GB SSD Intel PENTIUM Q/C- TOUCH 4GB RAM Windows 10 Pro+ USB Light For Keyboard₦ 190,0004 out of 5(1)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/5342611/1.jpg?1303",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a20ba3aa98b2dce12c",
            "product": "Hp EliteBook X360 1040 G8 Core I7 512GB SSD 16GB RAM 14\" TOUCHSCREEN WIN10 Pro BACKLIT Keyboard₦ 1,000,000₦ 1,658,00040%",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/7606612/1.jpg?0667",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a20ba3aa98b2dce12e",
            "product": "Hp Stream 11 Intel Celeron D/C  4GB RAM- 64GB HDD WIN 10+ BAG₦ 99,000₦ 150,75034%4.5 out of 5(6)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/423997/1.jpg?9615",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a20ba3aa98b2dce132",
            "product": "Hp ProBook 11 X360- TOUCH Intel Celeron 128GB 4GB RAM WIN10 Pro₦ 140,000₦ 175,00020%4.8 out of 5(4)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/560097/1.jpg?8920",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a20ba3aa98b2dce136",
            "product": "Hp ProBook 11 X360- 128GB SSD TOUCHSCREEN Intel PENTIUM -4GB RAM WIN10 Pro +32GB FLASH₦ 174,000₦ 175,0001%offers from4.5 out of 5(23)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/668009/1.jpg?0321",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a20ba3aa98b2dce138",
            "product": "Hp Stream 11 Intel Celeron D/C  4GB RAM- 64GB HDD WIN 10+ USD LED LIGHT & POUCH₦ 129,000₦ 284,00055%",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/3285461/1.jpg?3155",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a20ba3aa98b2dce13c",
            "product": "Hp Notebook 15 AMD Athlon Gold 16GB RAM 2.4GHz To 3.3GHz 1TB HDD Windows 10 Pro+USB Light For Keyboard₦ 210,000₦ 250,00016%5 out of 5(3)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/7593501/1.jpg?7208",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a20ba3aa98b2dce13e",
            "product": "Hp Laptop 15 Inch AMD RYZEN 3- 12GB RAM - 2.6GHz - 3.5GHz -1TB HDD Windows 11+ USB Light For Keyboard₦ 247,000₦ 388,00036%offers from3.6 out of 5(14)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/731796/1.jpg?8383",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a30ba3aa98b2dce144",
            "product": "Hp Laptop 15 Inch AMD RYZEN 3- 16GB RAM - 2.6GHz - 3.5GHz -1TB HDD Windows 10+ HP MOUSE₦ 260,000",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/2043331/1.jpg?3300",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a20ba3aa98b2dce128",
            "product": "Hp Notebook 15 AMD Athlon Gold 8GB RAM 2.4GHz To 3.3GHz 1TB HDD Windows 11₦ 190,000₦ 259,00027%4.5 out of 5(18)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/943767/1.jpg?0200",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a30ba3aa98b2dce14c",
            "product": "Hp ProBook 11 X360- 512GB SSD TOUCHSCREEN Intel PENTIUM Q/C  4GB RAM WIN10 Pro+ USB Light For Keyboard₦ 155,990₦ 180,00013%",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/896407/1.jpg?1013",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a30ba3aa98b2dce14e",
            "product": "Hp Stream 11 Intel Celeron D/C  4GB RAM- 64GB HDD WIN 10+ BAG₦ 99,000₦ 170,00042%4 out of 5(2)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/229567/1.jpg?8497",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a30ba3aa98b2dce150",
            "product": "Hp Notebook 15 AMD Athlon Gold 16GB RAM 2.4GHz To 3.3GHz 1TB HDD Windows 11 + HP MOUSE₦ 210,000₦ 320,00034%",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/3914122/1.jpg?0682",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a30ba3aa98b2dce154",
            "product": "Hp ProBook 11 X360- 512GB SSD  TOUCHSCREEN Intel PENTIUM 4GB RAM WIN10 Pro RED + 32GB FLASH₦ 169,000₦ 238,00029%",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/00/245127/1.jpg?0577",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a30ba3aa98b2dce156",
            "product": "Hp Notebook 15 AMD Athlon Gold 12GB RAM 2.4GHz To 3.3GHz 1TB HDD Windows 10 Pro+USB Light For Keyboard₦ 200,000₦ 260,00023%5 out of 5(1)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/970776/1.jpg?9629",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a30ba3aa98b2dce15a",
            "product": "Hp 15 Intel Celeron N4020 8GB RAM, 1TB HDD, Wins 10 + Bag₦ 188,000₦ 233,00019%",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/5541121/1.jpg?1334",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a30ba3aa98b2dce15c",
            "product": "Hp Notebook 15 AMD Athlon Gold 8GB RAM 2.4GHz To 3.3GHz 1TB HDD Windows 10 Pro+USB Light For Keyboard₦ 190,000₦ 195,0003%4.3 out of 5(3)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/631119/1.jpg?2809",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a30ba3aa98b2dce15e",
            "product": "Hp Stream 14 Intel Celeron - 64GB HDD- 4GB RAM Windows 10+ 32GB Flash₦ 129,000₦ 160,00019%",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/078817/1.jpg?9778",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a30ba3aa98b2dce162",
            "product": "Hp Pavilion 15 AMD RYZEN 3 -Keyboard Light- 2.6GHz - 3.5GHz - 8GB RAM- 1TB HDD Windows 10 + Mouse₦ 250,000₦ 300,00017%5 out of 5(2)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/6480591/1.jpg?7063",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a30ba3aa98b2dce164",
            "product": "Hp Notebook15 Intel Core I3 Touchscreen 16GB RAM/1TB HDD Win 10₦ 310,000₦ 390,00021%5 out of 5(1)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/812817/1.jpg?5638",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        },
        {
            "_id": "641b43a30ba3aa98b2dce14a",
            "product": "Hp Laptop 15- AMD RYZEN 3-Keyboard Light -12GB RAM/1TB HDD 2.6GHz - 3.5GHz- Windows 11₦ 263,000₦ 265,2001%4.8 out of 5(5)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/722767/1.jpg?6140",
            "categories": [
                {
                    "_id": "64101c51800e5bfc6f641d23",
                    "name": "Computing"
                },
                {
                    "_id": "6411ac3163ee804bfda3eaeb",
                    "name": "Computers"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                },
                {
                    "_id": "641739da63cc591a769380df",
                    "name": "Kara",
                    "url": "https://kara.com.ng"
                }
            ]
        }
    ]
}
```

### Products
#### `GET /api/v1/categories/:id/products`

This fetches all the products in particular categoey using category id.

#### Query Parameters

This endpoint takes in no query parameter.

#### Request Body

This endpoint doesn't require a request body.

#### Sample Request

`curl https://findmystore.onrender.com/api/v1/categories/64105684ec060519d770570e/products`

#### Sample Response

```
{
    "status": "Success",
    "code": 200,
    "data": [
        {
            "_id": "641b3ee021f21f9e058e00c2",
            "product": "Men's Sneakers Canvas-White₦ 8,000₦ 11,00027%4.7 out of 5(69)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/9765121/1.jpg?0266",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00c4",
            "product": "Six Pairs-in-1 Quality Ankle Socks₦ 1,600₦ 4,00060%4.1 out of 5(6608)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/332204/1.jpg?2782",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00c6",
            "product": "EILIFINTE B06 Casual Crossbody Shoulder Chest Bag-Grey₦ 1,920₦ 6,80072%3.7 out of 5(1413)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/5167301/1.jpg?7673",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00c8",
            "product": "100% Cotton T-shirt 4 Pcs Shirts Men's Fashion Short Sleeve₦ 7,900 - ₦ 8,500₦ 14,59346%3.9 out of 5(1833)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/25/461213/1.jpg?6331",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00ce",
            "product": "2 In 1 Men's Short Sleeve Shorts Set - White₦ 3,000₦ 6,27552%3.8 out of 5(43)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/250077/1.jpg?0996",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00d0",
            "product": "VEJARO T09  Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set-Black₦ 3,980₦ 12,80069%3.6 out of 5(239)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/035059/1.jpg?8702",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00d2",
            "product": "T-Shirts +Shorts 100% Cotton Men's Short Sleeve Set₦ 4,900₦ 9,00046%3.5 out of 5(185)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/986649/1.jpg?6655",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00d4",
            "product": "Wlisth Luminous Tungsten Steel  Waterproof Fashion Couple Watch₦ 2,999₦ 5,68347%4 out of 5(41)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/2217071/1.jpg?0085",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00d6",
            "product": "2 In 1 Men's Short Sleeve Shorts Set - White₦ 3,000₦ 6,64455%3.6 out of 5(730)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/202776/1.jpg?0581",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00d8",
            "product": "2021 Men's Casual Board Running Sneakers - White/Black₦ 8,100₦ 15,88049%4.2 out of 5(82)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/5153201/1.jpg?5028",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00da",
            "product": "Mid-Sole Denim Sneakers - Sky Blue₦ 3,9904.1 out of 5(40)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/6390261/1.jpg?0608",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00dc",
            "product": "Men's Cotton Casual Short-sleeved T-shirt POLO Shirt -Red₦ 3,900₦ 7,93651%3.6 out of 5(1172)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/103846/1.jpg?3828",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00de",
            "product": "Cotton 4 Pcs Shirts Men's Summer Short Sleeve Cartoon Printed Young Men T-shirt₦ 8,500 - ₦ 8,900₦ 16,275 - ₦ 17,29149%4.2 out of 5(356)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/368146/1.jpg?8863",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00e0",
            "product": "2022 Men's Casual Shoes Breathable Shoes Running Sneakers₦ 8,090₦ 11,50030%4.7 out of 5(95)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/3713221/1.jpg?3670",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00e2",
            "product": "MeiJieLuo Men Casual Outdoor Travel Crossbody Bag With USB Port₦ 2,050₦ 9,50078%3.5 out of 5(3892)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/78/155456/1.jpg?8470",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00e4",
            "product": "Straight Jeans Men's Pants Trousers 100% High-Quality₦ 4,900₦ 8,30641%3.6 out of 5(298)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/053149/1.jpg?1910",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00e6",
            "product": "Official StoreDefacto Man Shoes Shoes - Black₦ 9,055₦ 11,77223%4.3 out of 5(3)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/4389331/1.jpg?2705",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00e8",
            "product": "Fngeen 05 Calendar Sporty Waterproof Quartz Men's Watch/Black₦ 5,300₦ 28,00081%4.1 out of 5(1714)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/476218/1.jpg?8782",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00ea",
            "product": "Men's Sneakers Canvas-Black And White₦ 7,599₦ 11,00031%4 out of 5(11)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/3916721/1.jpg?1663",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00ec",
            "product": "2021 Mens Casual High-Top Shoes Running Sneakers - Beige₦ 8,999₦ 16,68046%4.3 out of 5(1319)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/042576/1.jpg?0343",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00cc",
            "product": "Printing Sports T-shirts+Pants Suit(SHANYES)₦ 3,900 - ₦ 4,500₦ 7,936 - ₦ 11,90067%3.8 out of 5(104)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/573717/1.jpg?7111",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00ca",
            "product": "Jones Wears Marshmello Printed Hoodie -Black₦ 5,530 - ₦ 9,1303.9 out of 5(1339)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/257805/1.jpg?2972",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00f2",
            "product": "VEJARO U01 Men's Underwear Boxer Briefs Multicolor-4 In 1₦ 2,980₦ 9,80070%3.8 out of 5(292)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/4342311/1.jpg?4715",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00f4",
            "product": "VEJARO T12  Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set-Red₦ 3,800₦ 12,80070%3.9 out of 5(275)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/335059/1.jpg?6661",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00f6",
            "product": "2 In 1 Men's Short Sleeve Shorts Set - Yellow₦ 2,900₦ 7,25560%3.8 out of 5(4)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/18/217698/1.jpg?8070",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00f8",
            "product": "MURIOKI Mens Vintage Printing Ethnic Short Sleeve Shirt - Multi₦ 2,990₦ 15,00080%3.9 out of 5(278)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/669557/1.jpg?1986",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00fa",
            "product": "2021 Mens Casual Noble Shoes Running Sneakers - Black/Gold₦ 6,199₦ 13,88855%3.9 out of 5(1219)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/536976/1.jpg?9999",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00fc",
            "product": "5 Pcs Mens Cotton T-shirts Short Sleeve Tees₦ 9,900₦ 20,000 - ₦ 29,33366%3.9 out of 5(113)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/260328/1.jpg?9451",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00fe",
            "product": "Men's Waterproof Business Shoes - Black₦ 4,980₦ 6,00017%4.2 out of 5(13)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/5418041/1.jpg?3817",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e0100",
            "product": "Men's Fashion Sneakers Running Shoes₦ 6,495₦ 10,15036%4.5 out of 5(89)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/1083311/1.jpg?8105",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e0102",
            "product": "2 In 1 Men's Short Sleeve Shorts Set - White₦ 5,647₦ 10,06544%3.6 out of 5(45)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/3206311/1.jpg?5363",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e0104",
            "product": "VEJARO T10  Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set- White₦ 3,800₦ 12,80070%3.8 out of 5(207)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/135059/1.jpg?9053",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e0106",
            "product": "2-Piece T-shirt And Short-Black₦ 3,000₦ 6,27552%3.3 out of 5(135)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/250077/1.jpg?2189",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e0108",
            "product": "Denim Jacket Korean Casual Jacket Youth Trend Hooded Couple-Light Blue₦ 7,950₦ 10,00021%4.8 out of 5(36)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/4052711/1.jpg?4729",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e010a",
            "product": "Casual Sweater Set Men's Long Sleeve Sweatshirt + Trousers₦ 4,650₦ 10,81557%4.2 out of 5(43)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/4387831/1.jpg?9917",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e010c",
            "product": "2021 Men's Casual Classic Shoes -Grey₦ 7,499₦ 16,00053%4.3 out of 5(171)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/538249/1.jpg?9115",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e010e",
            "product": "Men's Slip-on Walkabout Sports Shoes -bl02- Black₦ 2,990₦ 5,00040%3.8 out of 5(185)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/063597/1.jpg?6985",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e0110",
            "product": "Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set - Blue₦ 2,999₦ 6,97857%3.5 out of 5(1143)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/090544/1.jpg?4946",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00ee",
            "product": "Men Athletic Sneaker Elastic Running Casual Shoes₦ 2,135₦ 4,18549%4 out of 5(75)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/160244/1.jpg?0532",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        },
        {
            "_id": "641b3ee021f21f9e058e00f0",
            "product": "Men's Smart Fit Sneakers₦ 4,790 - ₦ 5,7904.2 out of 5(265)",
            "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/1960401/1.jpg?1681",
            "categories": [
                {
                    "_id": "6411acf663ee804bfda3eb0b",
                    "name": "Men's Fashion"
                },
                {
                    "_id": "64105684ec060519d770570e",
                    "name": "Fashion"
                }
            ],
            "stores": [
                {
                    "_id": "6416d0331e2c9681fa030161",
                    "name": "Jumia",
                    "url": "https://www.jumia.com.ng"
                },
                {
                    "_id": "64173c1d63cc591a769380ea",
                    "name": "Ajebomarket",
                    "url": "https://www.ajebomarket.com"
                },
                {
                    "_id": "6416e5ed1d7387e46e76e8f4",
                    "name": "Konga",
                    "url": "https://www.konga.com"
                }
            ]
        }
    ]
}
```
