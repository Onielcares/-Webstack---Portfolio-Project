/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies, node/no-unpublished-require
/* const axios = require('axios');

const populateCategory = () => {
  const Supermarket = [
    // 'Air Fresheners',
    // 'Beer, Wine & Spirits',
    // 'Beverages',
    // 'Breakfast Foods',
    // 'Candy & Chocolate',
    // 'Canned, Jarred & Packaged Foods',
    // 'Cleaning Tools',
    // 'Cooking & Baking',
    // 'Dairy, Cheese & Eggs',
    'Dishwashing',
    'Drinks',
    'Food Cupboard',
    'Herbs, Spices & Seasonings',
    'Household Cleaning',
    'Household Supplies',
    'Laundry',
    'Paper & Plastic',
    'Tobacco-Related Products'
  ];
  //
  const Health_Beauty = [
    'Beauty & Personal Care',
    'Health Care',
    'Medical Supplies & Equipment',
    'Sexual Wellness',
    'Vitamins & Dietary Supplements',
    'Wellness & Relaxation'
  ];

  const Home_Office = [
    'Arts, Crafts & Sewing',
    'Home & Office Furniture',
    'Home & Kitchen',
    'Office Products',
    'Large Appliances & Home Improvement'
  ];

  const Phones_Tablets = [
    'Mobile Phone Accessories',
    'Mobile Phones',
    'Tablet Accessories',
    'Tablets',
    'Telephones & Accessories'
  ];

  const Computing = ['Computer Accessories', 'Computers', 'Software'];
  //
  const Electronics = [
    'Accessories & Supplies',
    'Camera & Photo',
    'Cameras',
    'eBook Readers & Accessories',
    'GPS & Navigation',
    'Home Audio',
    'Office Electronics',
    'Portable Audio & Recorders',
    'Radios & Transceivers',
    'Security & Surveillance',
    'Television & Video',
    'Wearable Technology'
  ];

  const Fashion = [
    "Kid's Fashion",
    'Luggage & Travel Gear',
    "Men's Fashion",
    'Shoe, Jewelry & Watch Accessories',
    'Watches',
    'Weddings',
    "Women's Fashion"
  ];
  //
  const Baby_Products = [
    'Apparel & Accessories',
    'Baby & Toddler Toys',
    'Bathing & Skin Care',
    'Car Seats & Accessories',
    'Diapering',
    'Feeding',
    'Gear',
    'Gifts',
    'Health & Baby Care',
    'Nursery',
    'Potty Training',
    'Safety',
    'Strollers & Accessories'
  ];
  //
  const Gaming = [
    'Nintendo',
    'Other Gaming Systems',
    'PC Gaming',
    'Playstation',
    'Retro Gaming & Microconsoles',
    'Sony PSP',
    'Xbox'
  ];

  const Sporting_Goods = [
    'Outdoor & Adventure',
    'Outdoor Recreation',
    'Sports & Fitness'
  ];

  const Automobile = [
    'Car Care',
    'Car Electronics & Accessories',
    'Exterior Accessories',
    'Interior Accessories',
    'Lights & Lighting Accessories',
    'Motorcycle & Powersports',
    'Replacement Parts',
    'Tools & Equipment'
  ];

  const requests = Supermarket.map(item => {
    return axios.post('http://127.0.0.1:3000/api/v1/categories', {
      name: item,
      parentId: '64101ba48b2ea35f749936b8'
    });
  });
  Promise.all(requests)
    .then(responses => {
      responses.forEach(response => {
        // console.log(response.data);
      });
    })
    .catch(error => {
      // console.error(error);
    });
};

populateCategory();

module.exports = populateCategory;
 */

/* const axios = require('axios');

const populateProduct = () => {
  const computing1 = [
    'Hp 15 Intel Celeron N4020 8GB RAM 1TB HDD Windows 10 + Mouse',
    'Hp Stream 11 Intel Celeron 4GB RAM- 64GB HDD WIN 10+ USB LIGHT FOR KEYBOARD',
    'Hp Notebook 15 AMD Athlon Gold 8GB RAM 2.4GHz To 3.3GHz 1TB HDD Windows 10 Pro+USB Light For Keyboard',
    "Asus Mini Notebook Intel Celeron 4GB RAM 500GB HDD 11.6' Wins 10 + Mouse",
    'Lenovo Ideapad  Intel Celeron 1TB HDD 4GB RAM Win 10 PRO + 32GB Flash',
    'Hp Stream 11 Intel Celeron - 64GB SSD 4GB RAM Windows 10+ USB Light For Keyboard',
    "Asus E203NA Intel Celeron 4GB RAM 128GB 11.6' Windows 10",
    'Hp Notebook 15 AMD Athlon Gold 8GB RAM 2.4GHz To 3.3GHz 1TB HDD Windows 11 + HP MOUSE',
    'Hp Stream 11-Intel Celeron 64gb Ssd/4gb Ram+pouch Mouse',
    'Hp Stream 11 Intel Celeron Quad Core 4GB RAM / 64GB SSD Windows 10 + USD LIGHT & POUCH',
    'Hp 255 G8 AMD ATHLON 8GB RAM 1TB HDD 2.4 To 3.3ghz 15.6" HD WINS 10 +Free Bag And Mouse',
    'Lenovo AMD RYZEN 3 1TB 12GB RAM 1TB HDD 2.6 To 3.4ghz Win 10+ 32GB Flash',
    'Hp Notebook 15 AMD Athlon Gold 8GB RAM 2.4GHz To 3.3GHz 1TB HDD Win 11+ HP ',
    'Hp ProBook 11 X360- TOUCH Intel Pentium 128GB SSD- 4GB RAM WIN10 Pro',
    'Hp 15 Intel Pentium Gold 8GB RAM  1TB HDD Windows 10 + Free Mouse',
    'Hp CHROMEBOOK 14 X360,INTEL CELERON,4GB RAM,32GB SSD + BAG',
    'Hp Notebook 15- AMD RYZEN 3 - 16GB RAM/1TB HDD 2.6GHz - 3.5GHz- Windows 11',
    "Asus Vivobook Mini E203n Intel Celeron 4GB RAM 128GB EMMC 11.6'' - Wins 10 "
  ];

  const computing2 = [
    "Asus Intel Celeron 4GB RAM 128GB 11.6'Wins 10 Mini Laptop White",
    'DELL Latitude 3180 Intel Celeron 128GB SSD 4GB RAM Wins 10pro + Bag',
    'DELL Latitude 3180 Intel Celeron 128GB SSD 4GB RAM Wins 10pro + Bag',
    'DELL Latitude 3180, Intel Celeron, 128GB SSD 4GB, RAM Wins 10 + Bag',
    'Hp Notebook 15 AMD Athlon Gold 8GB RAM 2.4GHz To 3.3GHz 1TB HDD Windows 11',
    'Apple MacBook Air - 13.6" - 8GB - 256GB - M2 - MIDNIGHT - 2022',
    'Apple MacBook Pro 16.2" - 32GB - 1TB - 10 Cores - M1 Max - Silver',
    'Asus E203 Intel Celeron 4GB RAM 128GB 11.6 Windows 10 Mini Laptop',
    'Apple MacBook Pro 14" M1 Pro Chip 16GB RAM, 512GB (2021 Model)',
    'Lenovo V14 AMD RYZEN 3 3250U 1TB 8GB RAM 14.0"SCREEN WINS 10 +FREE Mouse',
    'DELL CHROMEBOOK 11, INTEL CELERON,4GB RAM,16GB SSD + Keyboard Flash Light',
    'Hp Laptop 15- AMD RYZEN 3 -16GB RAM/256GB SSD- 2.6GHz - 3.5GHz- Windows 10 PRO',
    'Glass Anti Blue Light Protective Eyeglasses For Computer And Phone',
    "Asus E203NAH Intel Celeron 4GB RAM 128GB EMMC 11.6' Win 10 Star Grey + Logitech Mouse + Headset",
    'Hp ProBook 11 X360- TOUCH Intel Pentium 128GB SSD- 4GB RAM WIN10 Pro+Flash',
    'Hp Notebook 15 AMD Athlon Gold 8GB RAM 2.4GHz To 3.3GHz 1TB HDD Windows 10 Pro+USB Light For Keyboard',
    'Apple MacBook Air 13" M1 Chip  8GB 256GB 2020 Model - Gray',
    'Hp 15 Touchscreen Intel Core™ I3-10110U,8GB,1TB HDD, Wins 10',
    'Asus VIVOBOOK 14 11TH GEN, INTEL CORE I5 8GB RAM, 256GB SSD 14" HD WINS 11',
    'Hp Pavilion 15 AMD RYZEN 3 -Keyboard Light- 2.6GHz - 3.5GHz - 8GB RAM- 1TB HDD Windows 10 + Mouse',
    'DELL CHROMEBOOK 11, 4GB RAM, 16GB SSD + 32GBFLASH'
  ];

  const computing = [
    {
      item:
        'DELL Vostro 3510, 11th Gen, Intel Core I3, 8GB RAM 256GB SSD 15.6" HD Win 11₦ 288,000₦ 300,0004%5 out of 5(1)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/7965412/1.jpg?2372'
    },
    {
      item:
        'Hp Stream 11 Pro- Intel Celeron- Education Edition - 4GB RAM - 64GB HDD Windows 10 Pro+ BAG₦ 99,000₦ 170,00042%offers from4.1 out of 5(26)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/243738/1.jpg?7257'
    },
    {
      item:
        'DELL Latitude 3189 X360 INTEL PENTIUM 256GB SSD 4GB WIN 10 Pro+pouch₦ 158,000₦ 160,0001%',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/18/3730402/1.jpg?4115'
    },
    {
      item:
        'Hp 15 AMD - 12GB RAM 1TB HDD Windows 10 Pro- 2.3GHz To 3.2GHz₦ 252,000₦ 255,5001%4.7 out of 5(29)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/045718/1.jpg?0894'
    },
    {
      item:
        'Hp CHROMEBOOK, INTEL CELERON, 4GB RAM,32GB EMMC WINS 10+BAG₦ 87,000',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/1727002/1.jpg?7575'
    },
    {
      item: 'itel Intel® Celeron™ 4GB RAM, 1TB HDD 14" Win10 + Mouse₦ 165,000',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/4934131/1.jpg?6366'
    },
    {
      item:
        'Hp Notebook 15 AMD Athlon Gold 8GB RAM 2.4GHz To 3.3GHz 1TB HDD Windows 11₦ 190,000₦ 259,00027%4.5 out of 5(18)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/943767/1.jpg?0200'
    },
    {
      item:
        'Hp Notebook 11 - 256GB SSD Intel PENTIUM Q/C- TOUCH 4GB RAM Windows 10 Pro+ USB Light For Keyboard₦ 190,0004 out of 5(1)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/5342611/1.jpg?1303'
    },
    {
      item:
        'Hp EliteBook X360 1040 G8 Core I7 512GB SSD 16GB RAM 14" TOUCHSCREEN WIN10 Pro BACKLIT Keyboard₦ 1,000,000₦ 1,658,00040%',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/7606612/1.jpg?0667'
    },
    {
      item:
        'Hp Stream 11 Intel Celeron D/C  4GB RAM- 64GB HDD WIN 10+ BAG₦ 99,000₦ 150,75034%4.5 out of 5(6)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/423997/1.jpg?9615'
    },
    {
      item:
        'Acer TRAVELMATE B3 TMB311 CELERON N4020 4GB RAM 64GB HDD₦ 119,048₦ 120,2501%',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/3434701/1.jpg?2140'
    },
    {
      item:
        'Hp ProBook 11 X360- TOUCH Intel Celeron 128GB 4GB RAM WIN10 Pro₦ 140,000₦ 175,00020%4.8 out of 5(4)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/560097/1.jpg?8920'
    },
    {
      item:
        'Asus Notebook 10th Gen, Intel Core I3 12GB RAM 1TB HDD, 2.1GHz Up To 4.1GHz 15.6" Wins 10+ Mouse₦ 246,000',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/8507612/1.jpg?9071'
    },
    {
      item:
        'Hp ProBook 11 X360- 128GB SSD TOUCHSCREEN Intel PENTIUM -4GB RAM WIN10 Pro +32GB FLASH₦ 174,000₦ 175,0001%offers from4.5 out of 5(23)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/668009/1.jpg?0321'
    },
    {
      item:
        'Hp Stream 11 Intel Celeron D/C  4GB RAM- 64GB HDD WIN 10+ USD LED LIGHT & POUCH₦ 129,000₦ 284,00055%',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/3285461/1.jpg?3155'
    },
    {
      item:
        'Asus Vivobook X515FA Intel Core I3 - 4GB RAM 1TB HDD Win 11₦ 188,640₦ 230,00018%',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/0951622/1.jpg?0985'
    },
    {
      item:
        'Hp Notebook 15 AMD Athlon Gold 16GB RAM 2.4GHz To 3.3GHz 1TB HDD Windows 10 Pro+USB Light For Keyboard₦ 210,000₦ 250,00016%5 out of 5(3)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/7593501/1.jpg?7208'
    },
    {
      item:
        'Hp Laptop 15 Inch AMD RYZEN 3- 12GB RAM - 2.6GHz - 3.5GHz -1TB HDD Windows 11+ USB Light For Keyboard₦ 247,000₦ 388,00036%offers from3.6 out of 5(14)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/731796/1.jpg?8383'
    },
    {
      item:
        'Apple MacBook Pro 14" M1 Pro Chip 16GB RAM, 512GB (2021 Model)₦ 1,340,000₦ 1,350,0001%offers from5 out of 5(3)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/300209/1.jpg?0441'
    },
    {
      item:
        'Apple MacBook Air 13" M1 Chip  8GB 256GB 2020 Model - Gray₦ 760,000₦ 800,0005%offers from5 out of 5(3)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/342027/1.jpg?0825'
    },
    {
      item:
        'Hp Laptop 15 Inch AMD RYZEN 3- 16GB RAM - 2.6GHz - 3.5GHz -1TB HDD Windows 10+ HP MOUSE₦ 260,000',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/2043331/1.jpg?3300'
    },
    {
      item:
        'Official StoreApple MacBook Air - 13.6" - 8GB - 256GB - M2 - MIDNIGHT - 2022₦ 899,999₦ 1,500,99940%',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/1080781/1.jpg?6049'
    },
    {
      item:
        "Asus E203NAH Intel Celeron 4GB RAM 128GB EMMC 11.6' Win 10 Star Grey + Logitech Mouse + Headset₦ 114,990₦ 126,9909%5 out of 5(2)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/5323591/1.jpg?7868'
    },
    {
      item:
        'Hp Laptop 15- AMD RYZEN 3-Keyboard Light -12GB RAM/1TB HDD 2.6GHz - 3.5GHz- Windows 11₦ 263,000₦ 265,2001%4.8 out of 5(5)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/722767/1.jpg?6140'
    },
    {
      item:
        'Hp ProBook 11 X360- 512GB SSD TOUCHSCREEN Intel PENTIUM Q/C  4GB RAM WIN10 Pro+ USB Light For Keyboard₦ 155,990₦ 180,00013%',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/896407/1.jpg?1013'
    },
    {
      item:
        'Hp Stream 11 Intel Celeron D/C  4GB RAM- 64GB HDD WIN 10+ BAG₦ 99,000₦ 170,00042%4 out of 5(2)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/229567/1.jpg?8497'
    },
    {
      item:
        'Hp Notebook 15 AMD Athlon Gold 16GB RAM 2.4GHz To 3.3GHz 1TB HDD Windows 11 + HP MOUSE₦ 210,000₦ 320,00034%',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/3914122/1.jpg?0682'
    },
    {
      item:
        'Lenovo IDEAPAD 15 Inch - 20GB RAM - INTEL CORE I3 - 1TB HDD- WINDOWS 10 PRO + USB LIGHT FOR KEYBOARD₦ 260,500₦ 270,0004%5 out of 5(2)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/4607501/1.jpg?3064'
    },
    {
      item:
        'Hp ProBook 11 X360- 512GB SSD  TOUCHSCREEN Intel PENTIUM 4GB RAM WIN10 Pro RED + 32GB FLASH₦ 169,000₦ 238,00029%',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/00/245127/1.jpg?0577'
    },
    {
      item:
        'Hp Notebook 15 AMD Athlon Gold 12GB RAM 2.4GHz To 3.3GHz 1TB HDD Windows 10 Pro+USB Light For Keyboard₦ 200,000₦ 260,00023%5 out of 5(1)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/970776/1.jpg?9629'
    },
    {
      item:
        'Official StoreApple MacBook Pro 16.2" - 32GB - 1TB - 10 Cores - M1 Max - Silver₦ 2,715,999₦ 5,999,99955%',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/6594051/1.jpg?4939'
    },
    {
      item:
        'Hp 15 Intel Celeron N4020 8GB RAM, 1TB HDD, Wins 10 + Bag₦ 188,000₦ 233,00019%',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/5541121/1.jpg?1334'
    },
    {
      item:
        'Hp Notebook 15 AMD Athlon Gold 8GB RAM 2.4GHz To 3.3GHz 1TB HDD Windows 10 Pro+USB Light For Keyboard₦ 190,000₦ 195,0003%4.3 out of 5(3)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/631119/1.jpg?2809'
    },
    {
      item:
        'Hp Stream 14 Intel Celeron - 64GB HDD- 4GB RAM Windows 10+ 32GB Flash₦ 129,000₦ 160,00019%',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/078817/1.jpg?9778'
    },
    {
      item:
        'Lenovo FLEX 5 X360 Convertible Core I3-11TH Gen- 8GB RAM 512GB SSD- FP Reader TOUCHSCREEN WINDOWS 11₦ 335,000₦ 380,00012%5 out of 5(1)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/961992/1.jpg?2407'
    },
    {
      item:
        'Hp Pavilion 15 AMD RYZEN 3 -Keyboard Light- 2.6GHz - 3.5GHz - 8GB RAM- 1TB HDD Windows 10 + Mouse₦ 250,000₦ 300,00017%5 out of 5(2)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/6480591/1.jpg?7063'
    },
    {
      item:
        'Hp Notebook15 Intel Core I3 Touchscreen 16GB RAM/1TB HDD Win 10₦ 310,000₦ 390,00021%5 out of 5(1)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/812817/1.jpg?5638'
    },
    {
      item:
        'Lenovo Ideapad V14 Intel Core I3 4GB RAM 1TB HDD 14.0 Inch Win 10₦ 181,330₦ 219,99018%5 out of 5(1)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/8689171/1.jpg?3761'
    },
    {
      item:
        'Lenovo IdeaPad 3 15" - Intel Core I3 -1005G1- 8GB RAM 256GB SSD - Platinum Grey₦ 245,000₦ 255,0004%5 out of 5(1)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/5511202/1.jpg?6181'
    },
    {
      item:
        'Asus E203 Intel Celeron 4GB RAM 128GB 11.6 Windows 10 Mini Laptop₦ 109,990₦ 139,99021%5 out of 5(1)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/4352231/1.jpg?7291'
    }
  ];

  const fashion = [
    {
      item: "Men's Sneakers Canvas-White₦ 8,000₦ 11,00027%4.7 out of 5(69)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/9765121/1.jpg?0266'
    },
    {
      item:
        'Six Pairs-in-1 Quality Ankle Socks₦ 1,600₦ 4,00060%4.1 out of 5(6608)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/332204/1.jpg?2782'
    },
    {
      item:
        'EILIFINTE B06 Casual Crossbody Shoulder Chest Bag-Grey₦ 1,920₦ 6,80072%3.7 out of 5(1413)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/5167301/1.jpg?7673'
    },
    {
      item:
        "100% Cotton T-shirt 4 Pcs Shirts Men's Fashion Short Sleeve₦ 7,900 - ₦ 8,500₦ 14,59346%3.9 out of 5(1833)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/25/461213/1.jpg?6331'
    },
    {
      item:
        'Jones Wears Marshmello Printed Hoodie -Black₦ 5,530 - ₦ 9,1303.9 out of 5(1339)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/257805/1.jpg?2972'
    },
    {
      item:
        'Printing Sports T-shirts+Pants Suit(SHANYES)₦ 3,900 - ₦ 4,500₦ 7,936 - ₦ 11,90067%3.8 out of 5(104)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/573717/1.jpg?7111'
    },
    {
      item:
        "2 In 1 Men's Short Sleeve Shorts Set - White₦ 3,000₦ 6,27552%3.8 out of 5(43)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/250077/1.jpg?0996'
    },
    {
      item:
        "VEJARO T09  Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set-Black₦ 3,980₦ 12,80069%3.6 out of 5(239)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/035059/1.jpg?8702'
    },
    {
      item:
        "T-Shirts +Shorts 100% Cotton Men's Short Sleeve Set₦ 4,900₦ 9,00046%3.5 out of 5(185)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/986649/1.jpg?6655'
    },
    {
      item:
        'Wlisth Luminous Tungsten Steel  Waterproof Fashion Couple Watch₦ 2,999₦ 5,68347%4 out of 5(41)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/2217071/1.jpg?0085'
    },
    {
      item:
        "2 In 1 Men's Short Sleeve Shorts Set - White₦ 3,000₦ 6,64455%3.6 out of 5(730)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/202776/1.jpg?0581'
    },
    {
      item:
        "2021 Men's Casual Board Running Sneakers - White/Black₦ 8,100₦ 15,88049%4.2 out of 5(82)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/5153201/1.jpg?5028'
    },
    {
      item: 'Mid-Sole Denim Sneakers - Sky Blue₦ 3,9904.1 out of 5(40)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/6390261/1.jpg?0608'
    },
    {
      item:
        "Men's Cotton Casual Short-sleeved T-shirt POLO Shirt -Red₦ 3,900₦ 7,93651%3.6 out of 5(1172)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/103846/1.jpg?3828'
    },
    {
      item:
        "Cotton 4 Pcs Shirts Men's Summer Short Sleeve Cartoon Printed Young Men T-shirt₦ 8,500 - ₦ 8,900₦ 16,275 - ₦ 17,29149%4.2 out of 5(356)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/368146/1.jpg?8863'
    },
    {
      item:
        "2022 Men's Casual Shoes Breathable Shoes Running Sneakers₦ 8,090₦ 11,50030%4.7 out of 5(95)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/3713221/1.jpg?3670'
    },
    {
      item:
        'MeiJieLuo Men Casual Outdoor Travel Crossbody Bag With USB Port₦ 2,050₦ 9,50078%3.5 out of 5(3892)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/78/155456/1.jpg?8470'
    },
    {
      item:
        "Straight Jeans Men's Pants Trousers 100% High-Quality₦ 4,900₦ 8,30641%3.6 out of 5(298)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/053149/1.jpg?1910'
    },
    {
      item:
        'Official StoreDefacto Man Shoes Shoes - Black₦ 9,055₦ 11,77223%4.3 out of 5(3)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/4389331/1.jpg?2705'
    },
    {
      item:
        "Fngeen 05 Calendar Sporty Waterproof Quartz Men's Watch/Black₦ 5,300₦ 28,00081%4.1 out of 5(1714)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/476218/1.jpg?8782'
    },
    {
      item:
        "Men's Sneakers Canvas-Black And White₦ 7,599₦ 11,00031%4 out of 5(11)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/3916721/1.jpg?1663'
    },
    {
      item:
        '2021 Mens Casual High-Top Shoes Running Sneakers - Beige₦ 8,999₦ 16,68046%4.3 out of 5(1319)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/042576/1.jpg?0343'
    },
    {
      item:
        'Men Athletic Sneaker Elastic Running Casual Shoes₦ 2,135₦ 4,18549%4 out of 5(75)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/160244/1.jpg?0532'
    },
    {
      item: "Men's Smart Fit Sneakers₦ 4,790 - ₦ 5,7904.2 out of 5(265)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/1960401/1.jpg?1681'
    },
    {
      item:
        "VEJARO U01 Men's Underwear Boxer Briefs Multicolor-4 In 1₦ 2,980₦ 9,80070%3.8 out of 5(292)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/4342311/1.jpg?4715'
    },
    {
      item:
        "VEJARO T12  Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set-Red₦ 3,800₦ 12,80070%3.9 out of 5(275)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/335059/1.jpg?6661'
    },
    {
      item:
        "2 In 1 Men's Short Sleeve Shorts Set - Yellow₦ 2,900₦ 7,25560%3.8 out of 5(4)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/18/217698/1.jpg?8070'
    },
    {
      item:
        'MURIOKI Mens Vintage Printing Ethnic Short Sleeve Shirt - Multi₦ 2,990₦ 15,00080%3.9 out of 5(278)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/669557/1.jpg?1986'
    },
    {
      item:
        '2021 Mens Casual Noble Shoes Running Sneakers - Black/Gold₦ 6,199₦ 13,88855%3.9 out of 5(1219)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/536976/1.jpg?9999'
    },
    {
      item:
        '5 Pcs Mens Cotton T-shirts Short Sleeve Tees₦ 9,900₦ 20,000 - ₦ 29,33366%3.9 out of 5(113)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/260328/1.jpg?9451'
    },
    {
      item:
        "Men's Waterproof Business Shoes - Black₦ 4,980₦ 6,00017%4.2 out of 5(13)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/5418041/1.jpg?3817'
    },
    {
      item:
        "Men's Fashion Sneakers Running Shoes₦ 6,495₦ 10,15036%4.5 out of 5(89)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/1083311/1.jpg?8105'
    },
    {
      item:
        "2 In 1 Men's Short Sleeve Shorts Set - White₦ 5,647₦ 10,06544%3.6 out of 5(45)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/3206311/1.jpg?5363'
    },
    {
      item:
        "VEJARO T10  Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set- White₦ 3,800₦ 12,80070%3.8 out of 5(207)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/135059/1.jpg?9053'
    },
    {
      item: '2-Piece T-shirt And Short-Black₦ 3,000₦ 6,27552%3.3 out of 5(135)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/250077/1.jpg?2189'
    },
    {
      item:
        'Denim Jacket Korean Casual Jacket Youth Trend Hooded Couple-Light Blue₦ 7,950₦ 10,00021%4.8 out of 5(36)',
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/4052711/1.jpg?4729'
    },
    {
      item:
        "Casual Sweater Set Men's Long Sleeve Sweatshirt + Trousers₦ 4,650₦ 10,81557%4.2 out of 5(43)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/4387831/1.jpg?9917'
    },
    {
      item:
        "2021 Men's Casual Classic Shoes -Grey₦ 7,499₦ 16,00053%4.3 out of 5(171)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/538249/1.jpg?9115'
    },
    {
      item:
        "Men's Slip-on Walkabout Sports Shoes -bl02- Black₦ 2,990₦ 5,00040%3.8 out of 5(185)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/063597/1.jpg?6985'
    },
    {
      item:
        "Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set - Blue₦ 2,999₦ 6,97857%3.5 out of 5(1143)",
      image_url:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/090544/1.jpg?4946'
    }
  ];

  // const requests = fashion.map(item => {
  //   return axios.post('http://127.0.0.1:3000/api/v1/products', {
  //     name: item.item,
  //     imageUrl: item.image_url,
  //     categories: ['6411acf663ee804bfda3eb0b', '64105684ec060519d770570e'],
  //     stores: [
  //       '6416d0331e2c9681fa030161',
  //       '64173c1d63cc591a769380ea',
  //       '6416e5ed1d7387e46e76e8f4'
  //     ]
  //   });
  // });
  // const requests = fashion.map(item => {
  //   return axios.post('http://127.0.0.1:3000/api/v1/products', {
  //     name: item,
  //     categories: ['6411acf663ee804bfda3eb0b', '64105684ec060519d770570e'],
  //     stores: [
  //       '6416d0331e2c9681fa030161',
  //       '64173c1d63cc591a769380ea',
  //       '6416e5ed1d7387e46e76e8f4'
  //     ]
  //   });
  // });

  const requests = computing.map(item => {
    return axios.post('http://127.0.0.1:3000/api/v1/products', {
      name: item.item,
      imageUrl: item.image_url,
      categories: ['64101c51800e5bfc6f641d23', '6411ac3163ee804bfda3eaeb'],
      stores: [
        '6416d0331e2c9681fa030161',
        '6416e5ed1d7387e46e76e8f4',
        '641739da63cc591a769380df'
      ]
    });
  });


  Promise.all(requests)
    .then(responses => {
      responses.forEach(response => {
        console.log(response.data);
      });
    })
    .catch(error => {
      console.error(error);
    });
};

populateProduct();

module.exports = populateProduct;
 */
