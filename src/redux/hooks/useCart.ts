import { useNavigate } from "react-router";
import { useOrderMutation } from "../features/product/product.api";
interface AddToCartParams {
    productId: number | string;
    quantity: number;
}
export const useCart = () => {
    const [addtocart, { isLoading, error }] = useOrderMutation();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const navigate = useNavigate();

    const addToCart = async ({productId, quantity}:AddToCartParams) => {
        console.log(`Added product ID: ${productId} with quantity: ${quantity} to cart.`);

        const cartDetails = {
            productId: productId,
            quantity: quantity
        };
        try {
            const result = await addtocart(cartDetails).unwrap();
            console.log(result.message);

            return result;
            // navigate("/verify");
        } catch (error) {
            console.error('Error adding to cart:', error);
            throw error;
        }
    }
    return {
        addToCart,
        isLoading,
        error
    };
}