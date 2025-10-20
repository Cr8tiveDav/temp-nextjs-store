import { Button } from '../ui/button';

const AddToCart = ({ productId }: { productId: string }) => {
  return (
    <Button size='lg' className='capitalize mt-8 text-slate-50 cursor-pointer'>
      add to cart
    </Button>
  );
};
export default AddToCart;
