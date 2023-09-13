const { scoreProduct, scoreProducts } = require('../../../context/synapse/blog_brain');
const { sample_data: blog_data } = require('../../../data/sample_data/sample_blog');

const {
  sample_arr_data: products_data,
} = require('../../../data/sample_data/sample_products');

describe('Testing product scoring and selection', () => {
  // ...

  it('should score products correctly', () => {
    const scoredProducts = scoreProducts(blog_data[0], products_data);
    expect(scoredProducts[0].product).toEqual(products_data[0]);
    expect(scoredProducts[0].score).toBe(3);
    expect(scoredProducts[1].product).toEqual(products_data[1]);
    expect(scoredProducts[1].score).toBe(1);
  });
});
