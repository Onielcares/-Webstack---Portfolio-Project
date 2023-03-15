// eslint-disable-next-line import/no-extraneous-dependencies, node/no-unpublished-require
const axios = require('axios');

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
        console.log(response.data);
      });
    })
    .catch(error => {
      console.error(error);
    });
};

populateCategory();

module.exports = populateCategory;
