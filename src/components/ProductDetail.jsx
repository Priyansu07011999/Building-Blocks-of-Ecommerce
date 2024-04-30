import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    description: 'Description of Colors',
    rating: 4,
    reviews: [
      'I love the vibrant colors of this product! It looks even better in person than it does in the pictures.',
      'The quality of the product is excellent. It is well-made and durable.',
      'Great value for the price. I would highly recommend this product to anyone looking for colorful art.'
    ]
  },
  {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    description: 'Description of Black and white Colors',
    rating: 3,
    reviews: [
      'This product is decent, but I expected better quality for the price.',
      'The black and white color scheme is stylish and modern. It goes well with any decor.',
      'Overall, I\'m satisfied with my purchase, but I wish it was a bit cheaper.'
    ]
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    description: 'Description of Yellow and Black Colors',
    rating: 5,
    reviews: [
      'This product exceeded my expectations! The colors are vibrant and the quality is top-notch.',
      'I love the unique combination of yellow and black. It adds a pop of color to my room.',
      'I would give this product 10 stars if I could. Highly recommend!'
    ]
  },
  {
    id: 4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    description: 'Description of Blue Color',
    rating: 4,
    reviews: [
      'I\'m very happy with my purchase. The blue color is exactly what I was looking for.',
      'The product arrived quickly and was well-packaged. It was in perfect condition.',
      'Overall, I would definitely buy from this seller again. Great product and great service!'
    ]
  }
];

const ratingColors = {
  1: 'red',
  2: 'orange',
  3: 'yellow',
  4: 'blue',
  5: 'green',
};



const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(product => product.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.imageUrl} alt={product.title} className="rounded-lg mb-4 w-full" />
        </div>
        <div>
          <div className="mb-4">
            <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2" style={{ color: ratingColors[product.rating] }}>{'★'.repeat(product.rating)}</span>
              <span className="text-lg text-gray-600">{product.rating}/5</span>
            </div>
            <p className="text-lg text-gray-800 mb-4">{product.description}</p>
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold text-gray-800 mr-2">Price:</span>
              <span className="text-xl font-semibold text-gray-800">${product.price}</span>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={() => alert('Added to cart')}>Add to Cart</button>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Product Reviews:</h2>
            <ul>
              {product.reviews.map((review, index) => (
                <li key={index} className="mb-4">
                  <div className="bg-gray-100 rounded-md p-4">
                    <p className="text-gray-800">{review}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
