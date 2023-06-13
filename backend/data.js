import bcrypt from "bcryptjs"

const data = {

  users: [
    {
      name: "Ameya",
      email: "ameya@g.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true
    },
    {
      name: "user",
      email: "sample@g.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false
    }
  ],

  products: [
    {
      name: 'Mens Solid Slim Fit Cotton Casual Shirt',
      slug: 'Mens Solid Slim Fit Cotton Casual Shirt',
      category: 'Shirts',
      image: '/images/p2.jpg', // 679px × 829px
      price: 6.05,
      countInStock: 20,
      brand: 'Dennis Lingo',
      rating: 0,
      numReviews: 0,
      description: 'Care Instructions: Machine Wash Fit Type: Slim Fit 100% Premium Cotton, Pre-Washed for extremely soft finish and Rich look Stylish Slim collar casual Shirt for men Modern Slim Fit, Size chart - S-38, M-40, L-42, XL-44, XXL-46 Best for casual & smart casual wear',
    },
    {
      name: 'Formal Stretchable Pant Navy Pant',
      slug: 'Formal Stretchable Pant Navy Pant',
      category: 'Pants',
      image: '/images/p5-1.jpg',
      price: 12.12,
      countInStock: 15,
      brand: 'AdiJack and Jinidas',
      rating: 0,
      numReviews: 0,
      description: 'Care Instructions: Machine Wash FABRIC- These pants are made of soft, comfortable and high quality Cotton Material with 2% Spandex mixed fabric. It is wrinkle resistant, stains resistant, moisture wicking, making these the most hassle-free pants you have ever owned. FLEXIBLE - Waistband stretches upto 2 inches for ultimate comfort. Regular sizes are available. Wear it worry free as of its flexible cloth and heavy stitching. Don’t worry for sitting on back seat of bike or sitting on ground for rituals. It is stretchable.',
    },
    {
      name: 'Anlon Men Casual Half Sleeves Shirt',
      slug: 'Anlon Men Casual Half Sleeves Shirt',
      category: 'Shirts',
      image: '/images/p3-1.jpg',
      price: 4.02,
      countInStock: 10,
      brand: 'Anlon',
      rating: 0,
      numReviews: 0,
      description: 'Care Instructions: Dry Clean Only Fit Type: Regular Fit Stylish Half sleeve Casual Printed Shirts & Party Wear Casual shirts 100% Premium Cottton Blend, Pre Washed for an extremely soft finish and Rich look Breathable : Truly comfortable and easy to wear in every season it is insulating in winter and breathable in summer.',
    },
    {
      name: 'Mens Cotton Blend Solid Full Sleeve Shirt',
      slug: 'Mens Cotton Blend Solid Full Sleeve Shirt',
      category: 'Shirts',
      image: '/images/p4-1.jpg',
      price: 3.99,
      countInStock: 0,
      brand: 'LookMark',
      rating: 0,
      numReviews: 0,
      description: 'care Instructions: Machine Wash Fit Type: Regular Fit Stylish Full sleeve Casual Shirts & Office Wear Casual shirts 100% Cotton Blend, Pre Washed for an extremely soft finish and Rich look',
    },
    {
      name: 'Neostreak Mens Slim Fit Stretchable Jeans',
      slug: 'Neostreak Mens Slim Fit Stretchable Jeans',
      category: 'Pants',
      image: '/images/p8-1.jpg',
      price: 8.72,
      countInStock: 15,
      brand: 'Neostreak',
      rating: 0,
      numReviews: 0,
      description: 'Care Instructions: Machine Wash Fit Type: Slim Fit Color: Light Grey Material: Cotton Machine wash Made in India',
    },
    {
      name: 'Casual Shirt-Stylish Shirt-Printed Shirt',
      slug: 'Casual Shirt-Stylish Shirt-Printed Shirt',
      category: 'Shirts',
      image: '/images/p9-1.jpg',
      price: 4.48,
      countInStock: 12,
      brand: 'Lymio',
      rating: 0,
      numReviews: 0,
      description: 'Care Instructions: Machine Wash Fit Type: Regular Fit shirt for men || casual shirt for men || men stylish shirt Half Sleeve Style - Enhance your look by wearing this Casual Stylish Mens shirt, Team it with a pair of tapered denims Or Solid Chinos and Loafers for a fun Smart Casual look',
    },
  ],
  };
  export default data;