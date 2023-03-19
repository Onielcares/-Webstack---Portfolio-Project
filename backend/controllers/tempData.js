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

  computing2 = [
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

  const fashion = [
    'ADIDAS Sports Performance Socks Light Nosh 3Pp',
    'Danami Throne Of Grace Printed Hoodie- Light Grey',
    'ADIDAS Performance Football Shoes Predator 19.4 Tf',
    'Mens Comfortable Loafers Soft Leather Slip On Shoes-Black',
    '5-In-1 Plain Unisex T-shirts Combo',
    'EILIFINTE B03 Ladies Casual Oxford Backpack - Black',
    "12 Pieces Of Men's Boxers - Color",
    'Danami Button Designed Long Sleeve T-Shirt- Yellow',
    'Plain Mens T-shirts Combo Of 3',
    "Men's Trendy Zipper Comfort Hoodie Jacket Sweatshirts - White",
    "Casual Flannel Men's Shirt",
    "Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set - Blue",
    'Jones Wears Marshmello Printed Hoodie -Black',
    'Danami Button Designed Long Sleeve T-Shirt- Light/Sky Blue',
    'Polo T-shirt Breathable Fashionable And Comfortable - White',
    'Mens Vintage Shirts Patterned Casual Short Sleeve',
    'Incerun Men Casual Stripe Print Round Neck Long Top-Green',
    "100% Cotton T-shirt 4 Pcs Shirts Men's Fashion Short Sleeve",
    "2 In 1 Men's Short Sleeve Shorts Set - Black",
    'Danami Long Sleeve T-Shirt- Black & Grey',
    "2 In 1 Men's Short Sleeve Shorts Set - White",
    "Men's Sneakers Lace-up Canvas Sneakers - Khaki",
    "ALagzi 2022 Men's Fashion Casual Shoes Sneakers - White",
    "2021 Men's Casual Board Running Sneakers - White/Black",
    'Trendy Causal Unisex Sneakers',
    'Latest Men Sneakers -Black',
    "Men's Sneakers Lace Up Shoes",
    '2022 Mens Casual Board Shoes Running Sneakers- White',
    '2022 Mens Casual Classic Shoes Running Sneakers - White',
    "2021 Men's Casual Classic Shoes -Grey",
    "2022 Men's Casual Running Sneakers - Khaki",
    "Men's Lace Up Canvas Shoes Fashion Sneakers -Grey",
    "Trendy Men's Lace-up Sneakers-White And Black",
    "Men's Slip-on Walkabout Sports Shoes -bl02- Black",
    "Men's Shoes Walking  Sports Shoes - Black",
    'Casual Sports Running Soft Soled Sneakers - Color Blocking',
    "Men's Sneakers Canvas-White",
    'Men Vintage Short Sleeve Stand Collar Shirt-Red',
    'Six Pairs-in-1 Quality Ankle Socks',
    'EILIFINTE B06 Casual Crossbody Shoulder Chest Bag-Grey',
    "VEJARO T09  Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set-Black",
    '2021 Mens Casual High-Top Shoes Running Sneakers - Beige',
    'Printing Sports T-shirts+Pants Suit(SHANYES)',
    "2022 Men's Casual Shoes Breathable Shoes Running Sneakers",
    "100% Cotton T-shirt 4 Pcs Shirts Men's Fashion Short Sleeve",
    'Jones Wears Marshmello Printed Hoodie -Black',
    "2021 Men's Casual Board Running Sneakers - White/Black",
    "2 In 1 Men's Short Sleeve Shorts Set - White",
    'Wlisth Luminous Tungsten Steel  Waterproof Fashion Couple Watch',
    'MeiJieLuo Men Casual Outdoor Travel Crossbody Bag With USB Port',
    "2 In 1 Men's Short Sleeve Shorts Set - White",
    "VEJARO U01 Men's Underwear Boxer Briefs Multicolor-4 In 1",
    "Straight Jeans Men's Pants Trousers 100% High-Quality",
    "Men's Cotton Casual Short-sleeved T-shirt POLO Shirt -Red",
    'Defacto Man Shoes Shoes - Black',
    "Men's Smart Fit Sneakers",
    "Cotton 4 Pcs Shirts Men's Summer Short Sleeve Cartoon Printed Young Men ",
    "Men's Sneakers Canvas-Black And White",
    '2021 Mens Casual Noble Shoes Running Sneakers - Black/Gold',
    "VEJARO T12  Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set-Red",
    '5 Pcs Mens Cotton T-shirts Short Sleeve Tees',
    "Fngeen 05 Calendar Sporty Waterproof Quartz Men's Watch/Black",
    'ADIDAS Adilette Aqua Slides Unisex',
    "Men's Fashion Sneakers Running Shoes",
    'Men Athletic Sneaker Elastic Running Casual Shoes',
    "Men's Loafers Slip On Sneakers Men's Leather Shoes",
    "VEJARO T10  Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set- White",
    "Men's Slip-on Walkabout Sports Shoes -bl02- Black",
    'VEJARO U04 Underwear Boxer Briefs Multicolor For Men-4 In 1',
    "VEJARO T11  Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set- Grey",
    'Mid-Sole Denim Sneakers - Sky Blue',
    "2021 Men's Casual Classic Shoes -Grey",
    '2PCS Mens Beach Floral Short Sleeve Shirt(BLUE/ORANGE)',
    '2-Piece T-shirt And Short-Black',
    "2 In 1 Men's Short Sleeve Shorts Set - White",
    "Men's Sports Running Shoes -White"
  ];

  const requests = fashion.map(item => {
    return axios.post('http://127.0.0.1:3000/api/v1/products', {
      name: item,
      category: '6411acf663ee804bfda3eb0b',
      stores: ['6416d0331e2c9681fa030161', '64173c1d63cc591a769380ea', '6416e5ed1d7387e46e76e8f4']
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
