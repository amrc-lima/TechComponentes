import { products } from '@/data/products';
import ProductDetail from './ProductDetail';

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default function ProductDetailPage() {
  return <ProductDetail />;
}
