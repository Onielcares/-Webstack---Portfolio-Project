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

#### `GET /categories`

This fetches all the categories including parent/base and children categories.

#### Query Parameters

This endpoint takes in no query parameter.

#### Request Body

This endpoint doesn't require a request body.

#### Sample Request

`curl https://findmystore.onrender.com/api/v1/categories`

#### Sample Response

```
{
    "status": "Success",
    "code": 200,
    "data": [
        {
            "parentId": null,
            "_id": "64101ba48b2ea35f749936b8",
            "name": "Grocery",
            "parent": null,
            "createdAt": "2023-03-14T07:00:52.801Z",
            "__v": 0
        },
        {
            "parentId": null,
            "_id": "64101c51800e5bfc6f641d23",
            "name": "Computing",
            "parent": null,
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
            "_id": "6410a4e62f1abdb92cea8462",
            "name": "Air Fresheners",
            "parentId": "64101ba48b2ea35f749936b8",
            "createdAt": "2023-03-14T16:46:30.334Z",
            "__v": 0
        },
        {
            "_id": "6410a57b2f1abdb92cea8465",
            "name": "Beer, Wine & Spirits",
            "parentId": "64101ba48b2ea35f749936b8",
            "createdAt": "2023-03-14T16:48:59.886Z",
            "__v": 0
        },
        {
            "_id": "6410a59a2f1abdb92cea8467",
            "name": "Beverages",
            "parentId": "64101ba48b2ea35f749936b8",
            "createdAt": "2023-03-14T16:49:30.824Z",
            "__v": 0
        },
        {
            "_id": "6410a5ae2f1abdb92cea8469",
            "name": "Breakfast Foods",
            "parentId": "64101ba48b2ea35f749936b8",
            "createdAt": "2023-03-14T16:49:50.985Z",
            "__v": 0
        },
        {
            "_id": "6410a5d22f1abdb92cea846b",
            "name": "Candy & Chocolate",
            "parentId": "64101ba48b2ea35f749936b8",
            "createdAt": "2023-03-14T16:50:26.824Z",
            "__v": 0
        },
        {
            "_id": "6410a6a72f1abdb92cea846d",
            "name": "Canned, Jarred & Packaged Foods",
            "parentId": "64101ba48b2ea35f749936b8",
            "createdAt": "2023-03-14T16:53:59.932Z",
            "__v": 0
        },
        {
            "_id": "6410a6c22f1abdb92cea846f",
            "name": "Cleaning Tools",
            "parentId": "64101ba48b2ea35f749936b8",
            "createdAt": "2023-03-14T16:54:26.160Z",
            "__v": 0
        },
        {
            "_id": "6411a9ea63ee804bfda3ead8",
            "name": "Car Care",
            "parentId": "641056ddec060519d7705716",
            "createdAt": "2023-03-15T11:20:10.593Z",
            "__v": 0
        },
        {
            "_id": "6411a9eb63ee804bfda3eade",
            "name": "Interior Accessories",
            "parentId": "641056ddec060519d7705716",
            "createdAt": "2023-03-15T11:20:11.079Z",
            "__v": 0
        },
        {
            "_id": "6411a9eb63ee804bfda3eae0",
            "name": "Lights & Lighting Accessories",
            "parentId": "641056ddec060519d7705716",
            "createdAt": "2023-03-15T11:20:11.083Z",
            "__v": 0
        },
        {
            "_id": "6411a9eb63ee804bfda3eae2",
            "name": "Motorcycle & Powersports",
            "parentId": "641056ddec060519d7705716",
            "createdAt": "2023-03-15T11:20:11.087Z",
            "__v": 0
        },
        {
            "_id": "6411a9eb63ee804bfda3eae4",
            "name": "Replacement Parts",
            "parentId": "641056ddec060519d7705716",
            "createdAt": "2023-03-15T11:20:11.091Z",
            "__v": 0
        },
        {
            "_id": "6411a9eb63ee804bfda3eae6",
            "name": "Tools & Equipment",
            "parentId": "641056ddec060519d7705716",
            "createdAt": "2023-03-15T11:20:11.095Z",
            "__v": 0
        },
        {
            "_id": "6411a9eb63ee804bfda3eadc",
            "name": "Exterior Accessories",
            "parentId": "641056ddec060519d7705716",
            "createdAt": "2023-03-15T11:20:11.075Z",
            "__v": 0
        },
        {
            "_id": "6411a9ea63ee804bfda3eada",
            "name": "Car Electronics & Accessories",
            "parentId": "641056ddec060519d7705716",
            "createdAt": "2023-03-15T11:20:10.950Z",
            "__v": 0
        },
        {
            "_id": "6411ac3163ee804bfda3eae9",
            "name": "Computer Accessories",
            "parentId": "64101c51800e5bfc6f641d23",
            "createdAt": "2023-03-15T11:29:53.401Z",
            "__v": 0
        },
        {
            "_id": "6411ac3163ee804bfda3eaeb",
            "name": "Computers",
            "parentId": "64101c51800e5bfc6f641d23",
            "createdAt": "2023-03-15T11:29:53.509Z",
            "__v": 0
        },
        {
            "_id": "6411ac3163ee804bfda3eaed",
            "name": "Software",
            "parentId": "64101c51800e5bfc6f641d23",
            "createdAt": "2023-03-15T11:29:53.568Z",
            "__v": 0
        },
        {
            "_id": "6411ac5d63ee804bfda3eaef",
            "name": "Accessories & Supplies",
            "parentId": "64105670ec060519d770570c",
            "createdAt": "2023-03-15T11:30:37.224Z",
            "__v": 0
        },
        {
            "_id": "6411ac5d63ee804bfda3eaf3",
            "name": "Cameras",
            "parentId": "64105670ec060519d770570c",
            "createdAt": "2023-03-15T11:30:37.250Z",
            "__v": 0
        },
        {
            "_id": "6411ac5d63ee804bfda3eaf1",
            "name": "Camera & Photo",
            "parentId": "64105670ec060519d770570c",
            "createdAt": "2023-03-15T11:30:37.236Z",
            "__v": 0
        },
        {
            "_id": "6411ac5d63ee804bfda3eaf9",
            "name": "Home Audio",
            "parentId": "64105670ec060519d770570c",
            "createdAt": "2023-03-15T11:30:37.268Z",
            "__v": 0
        },
        {
            "_id": "6411ac5d63ee804bfda3eafb",
            "name": "Office Electronics",
            "parentId": "64105670ec060519d770570c",
            "createdAt": "2023-03-15T11:30:37.270Z",
            "__v": 0
        },
        {
            "_id": "6411ac5d63ee804bfda3eafd",
            "name": "Portable Audio & Recorders",
            "parentId": "64105670ec060519d770570c",
            "createdAt": "2023-03-15T11:30:37.272Z",
            "__v": 0
        },
        {
            "_id": "6411ac5d63ee804bfda3eaff",
            "name": "Radios & Transceivers",
            "parentId": "64105670ec060519d770570c",
            "createdAt": "2023-03-15T11:30:37.274Z",
            "__v": 0
        },
        {
            "_id": "6411ac5d63ee804bfda3eb01",
            "name": "Security & Surveillance",
            "parentId": "64105670ec060519d770570c",
            "createdAt": "2023-03-15T11:30:37.281Z",
            "__v": 0
        },
        {
            "_id": "6411ac5d63ee804bfda3eb03",
            "name": "Television & Video",
            "parentId": "64105670ec060519d770570c",
            "createdAt": "2023-03-15T11:30:37.283Z",
            "__v": 0
        },
        {
            "_id": "6411ac5d63ee804bfda3eb05",
            "name": "Wearable Technology",
            "parentId": "64105670ec060519d770570c",
            "createdAt": "2023-03-15T11:30:37.285Z",
            "__v": 0
        },
        {
            "_id": "6411ac5d63ee804bfda3eaf5",
            "name": "eBook Readers & Accessories",
            "parentId": "64105670ec060519d770570c",
            "createdAt": "2023-03-15T11:30:37.255Z",
            "__v": 0
        },
        {
            "_id": "6411ac5d63ee804bfda3eaf7",
            "name": "GPS & Navigation",
            "parentId": "64105670ec060519d770570c",
            "createdAt": "2023-03-15T11:30:37.263Z",
            "__v": 0
        },
        {
            "_id": "6411acf663ee804bfda3eb0d",
            "name": "Shoe, Jewelry & Watch Accessories",
            "parentId": "64105684ec060519d770570e",
            "createdAt": "2023-03-15T11:33:10.176Z",
            "__v": 0
        },
        {
            "_id": "6411acf663ee804bfda3eb09",
            "name": "Luggage & Travel Gear",
            "parentId": "64105684ec060519d770570e",
            "createdAt": "2023-03-15T11:33:10.165Z",
            "__v": 0
        },
        {
            "_id": "6411acf663ee804bfda3eb07",
            "name": "Kid's Fashion",
            "parentId": "64105684ec060519d770570e",
            "createdAt": "2023-03-15T11:33:10.158Z",
            "__v": 0
        },
        {
            "_id": "6411acf663ee804bfda3eb0b",
            "name": "Men's Fashion",
            "parentId": "64105684ec060519d770570e",
            "createdAt": "2023-03-15T11:33:10.170Z",
            "__v": 0
        },
        {
            "_id": "6411acf663ee804bfda3eb0f",
            "name": "Watches",
            "parentId": "64105684ec060519d770570e",
            "createdAt": "2023-03-15T11:33:10.197Z",
            "__v": 0
        },
        {
            "_id": "6411acf663ee804bfda3eb13",
            "name": "Women's Fashion",
            "parentId": "64105684ec060519d770570e",
            "createdAt": "2023-03-15T11:33:10.217Z",
            "__v": 0
        },
        {
            "_id": "6411acf663ee804bfda3eb11",
            "name": "Weddings",
            "parentId": "64105684ec060519d770570e",
            "createdAt": "2023-03-15T11:33:10.201Z",
            "__v": 0
        },
        {
            "_id": "6411ad6063ee804bfda3eb19",
            "name": "Bathing & Skin Care",
            "parentId": "64105698ec060519d7705710",
            "createdAt": "2023-03-15T11:34:56.915Z",
            "__v": 0
        },
        {
            "_id": "6411ad6063ee804bfda3eb15",
            "name": "Apparel & Accessories",
            "parentId": "64105698ec060519d7705710",
            "createdAt": "2023-03-15T11:34:56.903Z",
            "__v": 0
        },
        {
            "_id": "6411ad6063ee804bfda3eb17",
            "name": "Baby & Toddler Toys",
            "parentId": "64105698ec060519d7705710",
            "createdAt": "2023-03-15T11:34:56.910Z",
            "__v": 0
        },
        {
            "_id": "6411ad6063ee804bfda3eb1f",
            "name": "Feeding",
            "parentId": "64105698ec060519d7705710",
            "createdAt": "2023-03-15T11:34:56.932Z",
            "__v": 0
        },
        {
            "_id": "6411ad6063ee804bfda3eb1d",
            "name": "Diapering",
            "parentId": "64105698ec060519d7705710",
            "createdAt": "2023-03-15T11:34:56.929Z",
            "__v": 0
        },
        {
            "_id": "6411ad6063ee804bfda3eb21",
            "name": "Gear",
            "parentId": "64105698ec060519d7705710",
            "createdAt": "2023-03-15T11:34:56.936Z",
            "__v": 0
        },
        {
            "_id": "6411ad6063ee804bfda3eb1b",
            "name": "Car Seats & Accessories",
            "parentId": "64105698ec060519d7705710",
            "createdAt": "2023-03-15T11:34:56.926Z",
            "__v": 0
        },
        {
            "_id": "6411ad6063ee804bfda3eb2b",
            "name": "Safety",
            "parentId": "64105698ec060519d7705710",
            "createdAt": "2023-03-15T11:34:56.960Z",
            "__v": 0
        },
        {
            "_id": "6411ad6063ee804bfda3eb27",
            "name": "Nursery",
            "parentId": "64105698ec060519d7705710",
            "createdAt": "2023-03-15T11:34:56.951Z",
            "__v": 0
        },
        {
            "_id": "6411ad6063ee804bfda3eb29",
            "name": "Potty Training",
            "parentId": "64105698ec060519d7705710",
            "createdAt": "2023-03-15T11:34:56.955Z",
            "__v": 0
        },
        {
            "_id": "6411ad6063ee804bfda3eb2d",
            "name": "Strollers & Accessories",
            "parentId": "64105698ec060519d7705710",
            "createdAt": "2023-03-15T11:34:56.965Z",
            "__v": 0
        },
        {
            "_id": "6411ad6063ee804bfda3eb25",
            "name": "Health & Baby Care",
            "parentId": "64105698ec060519d7705710",
            "createdAt": "2023-03-15T11:34:56.944Z",
            "__v": 0
        },
        {
            "_id": "6411ad6063ee804bfda3eb23",
            "name": "Gifts",
            "parentId": "64105698ec060519d7705710",
            "createdAt": "2023-03-15T11:34:56.939Z",
            "__v": 0
        },
        {
            "_id": "6411ad9f63ee804bfda3eb31",
            "name": "Other Gaming Systems",
            "parentId": "641056aeec060519d7705712",
            "createdAt": "2023-03-15T11:35:59.554Z",
            "__v": 0
        },
        {
            "_id": "6411ad9f63ee804bfda3eb37",
            "name": "Retro Gaming & Microconsoles",
            "parentId": "641056aeec060519d7705712",
            "createdAt": "2023-03-15T11:35:59.565Z",
            "__v": 0
        },
        {
            "_id": "6411ad9f63ee804bfda3eb39",
            "name": "Sony PSP",
            "parentId": "641056aeec060519d7705712",
            "createdAt": "2023-03-15T11:35:59.569Z",
            "__v": 0
        },
        {
            "_id": "6411ad9f63ee804bfda3eb3b",
            "name": "Xbox",
            "parentId": "641056aeec060519d7705712",
            "createdAt": "2023-03-15T11:35:59.573Z",
            "__v": 0
        },
        {
            "_id": "6411ad9f63ee804bfda3eb33",
            "name": "PC Gaming",
            "parentId": "641056aeec060519d7705712",
            "createdAt": "2023-03-15T11:35:59.558Z",
            "__v": 0
        },
        {
            "_id": "6411ad9f63ee804bfda3eb35",
            "name": "Playstation",
            "parentId": "641056aeec060519d7705712",
            "createdAt": "2023-03-15T11:35:59.562Z",
            "__v": 0
        },
        {
            "_id": "6411ad9f63ee804bfda3eb2f",
            "name": "Nintendo",
            "parentId": "641056aeec060519d7705712",
            "createdAt": "2023-03-15T11:35:59.548Z",
            "__v": 0
        },
        {
            "_id": "6411adf963ee804bfda3eb45",
            "name": "Vitamins & Dietary Supplements",
            "parentId": "641054beec060519d7705701",
            "createdAt": "2023-03-15T11:37:29.014Z",
            "__v": 0
        },
        {
            "_id": "6411adf963ee804bfda3eb41",
            "name": "Medical Supplies & Equipment",
            "parentId": "641054beec060519d7705701",
            "createdAt": "2023-03-15T11:37:29.007Z",
            "__v": 0
        },
        {
            "_id": "6411adf963ee804bfda3eb3f",
            "name": "Health Care",
            "parentId": "641054beec060519d7705701",
            "createdAt": "2023-03-15T11:37:29.003Z",
            "__v": 0
        },
        {
            "_id": "6411adf963ee804bfda3eb43",
            "name": "Sexual Wellness",
            "parentId": "641054beec060519d7705701",
            "createdAt": "2023-03-15T11:37:29.011Z",
            "__v": 0
        },
        {
            "_id": "6411adf963ee804bfda3eb47",
            "name": "Wellness & Relaxation",
            "parentId": "641054beec060519d7705701",
            "createdAt": "2023-03-15T11:37:29.023Z",
            "__v": 0
        },
        {
            "_id": "6411adf863ee804bfda3eb3d",
            "name": "Beauty & Personal Care",
            "parentId": "641054beec060519d7705701",
            "createdAt": "2023-03-15T11:37:28.999Z",
            "__v": 0
        },
        {
            "_id": "6411ae3163ee804bfda3eb4b",
            "name": "Outdoor Recreation",
            "parentId": "641056c3ec060519d7705714",
            "createdAt": "2023-03-15T11:38:25.372Z",
            "__v": 0
        },
        {
            "_id": "6411ae3163ee804bfda3eb4d",
            "name": "Sports & Fitness",
            "parentId": "641056c3ec060519d7705714",
            "createdAt": "2023-03-15T11:38:25.376Z",
            "__v": 0
        },
        {
            "_id": "6411ae3163ee804bfda3eb49",
            "name": "Outdoor & Adventure",
            "parentId": "641056c3ec060519d7705714",
            "createdAt": "2023-03-15T11:38:25.362Z",
            "__v": 0
        },
        {
            "_id": "6411ae8163ee804bfda3eb55",
            "name": "Office Products",
            "parentId": "64105619ec060519d7705708",
            "createdAt": "2023-03-15T11:39:45.554Z",
            "__v": 0
        },
        {
            "_id": "6411ae8163ee804bfda3eb57",
            "name": "Large Appliances & Home Improvement",
            "parentId": "64105619ec060519d7705708",
            "createdAt": "2023-03-15T11:39:45.558Z",
            "__v": 0
        },
        {
            "_id": "6411ae8163ee804bfda3eb4f",
            "name": "Arts, Crafts & Sewing",
            "parentId": "64105619ec060519d7705708",
            "createdAt": "2023-03-15T11:39:45.530Z",
            "__v": 0
        },
        {
            "_id": "6411ae8163ee804bfda3eb53",
            "name": "Home & Kitchen",
            "parentId": "64105619ec060519d7705708",
            "createdAt": "2023-03-15T11:39:45.547Z",
            "__v": 0
        },
        {
            "_id": "6411ae8163ee804bfda3eb51",
            "name": "Home & Office Furniture",
            "parentId": "64105619ec060519d7705708",
            "createdAt": "2023-03-15T11:39:45.544Z",
            "__v": 0
        },
        {
            "_id": "6411aecc63ee804bfda3eb67",
            "name": "Cooking & Baking",
            "parentId": "64101ba48b2ea35f749936b8",
            "createdAt": "2023-03-15T11:41:00.541Z",
            "__v": 0
        },
        {
            "_id": "6411aecc63ee804bfda3eb69",
            "name": "Dairy, Cheese & Eggs",
            "parentId": "64101ba48b2ea35f749936b8",
            "createdAt": "2023-03-15T11:41:00.543Z",
            "__v": 0
        },
        {
            "_id": "6411aecc63ee804bfda3eb6f",
            "name": "Food Cupboard",
            "parentId": "64101ba48b2ea35f749936b8",
            "createdAt": "2023-03-15T11:41:00.622Z",
            "__v": 0
        },
        {
            "_id": "6411aecc63ee804bfda3eb73",
            "name": "Household Cleaning",
            "parentId": "64101ba48b2ea35f749936b8",
            "createdAt": "2023-03-15T11:41:00.637Z",
            "__v": 0
        },
        {
            "_id": "6411aecc63ee804bfda3eb79",
            "name": "Paper & Plastic",
            "parentId": "64101ba48b2ea35f749936b8",
            "createdAt": "2023-03-15T11:41:00.649Z",
            "__v": 0
        },
        {
            "_id": "6411aecc63ee804bfda3eb75",
            "name": "Household Supplies",
            "parentId": "64101ba48b2ea35f749936b8",
            "createdAt": "2023-03-15T11:41:00.640Z",
            "__v": 0
        },
        {
            "_id": "6411aecc63ee804bfda3eb71",
            "name": "Herbs, Spices & Seasonings",
            "parentId": "64101ba48b2ea35f749936b8",
            "createdAt": "2023-03-15T11:41:00.633Z",
            "__v": 0
        },
        {
            "_id": "6411aecc63ee804bfda3eb77",
            "name": "Laundry",
            "parentId": "64101ba48b2ea35f749936b8",
            "createdAt": "2023-03-15T11:41:00.643Z",
            "__v": 0
        },
        {
            "_id": "6411aecc63ee804bfda3eb7b",
            "name": "Tobacco-Related Products",
            "parentId": "64101ba48b2ea35f749936b8",
            "createdAt": "2023-03-15T11:41:00.652Z",
            "__v": 0
        },
        {
            "_id": "6411aecc63ee804bfda3eb6d",
            "name": "Drinks",
            "parentId": "64101ba48b2ea35f749936b8",
            "createdAt": "2023-03-15T11:41:00.617Z",
            "__v": 0
        },
        {
            "_id": "6411aecc63ee804bfda3eb6b",
            "name": "Dishwashing",
            "parentId": "64101ba48b2ea35f749936b8",
            "createdAt": "2023-03-15T11:41:00.613Z",
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



