import ProductsContainer from '@/components/products/ProductsContainer';

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) => {
  // Get search params with defaults
  const params = await searchParams;
  const layout = params.layout || 'grid';
  const search = params.search || '';

  return <ProductsContainer layout={layout} search={search} />;
};
export default ProductsPage;
