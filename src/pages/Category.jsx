import Layout from '../components/Layout';
import products from '../utils/products.json';
import { useParams } from 'react-router-dom';

function Category() {
  const { categoryName } = useParams();
  const category = products[categoryName] || {};
  const routeParams=useParams();
  console.log('routeParams:', routeParams);
  // console.log('categoryName:', category);
  // console.log('products:', products);
  // console.log('category:', category);

  return (
    <Layout>
      <div className="container-fluid container-min-max-width">
        <h2>{category?.name}</h2>
      </div>
    </Layout>
  );
}

export default Category;