import { useCart } from "../context/CartContext";
import { Button } from "./Button";

export const ProductCartCard = ({ product }) => {
    const { name, price, thumbnail } = product;
    const { removeFromCart } = useCart();

    return (
        <div className="p-4 mb-8 flex flex-wrap items-center justify-between bg-white border border-gray-200 rounded-lg shadow">
            <div className="p-4 mb-4 h-[100px] flex items-center overflow-hidden">
                <img
                    className="rounded-t-lg bg-cover mx-auto"
                    src={thumbnail}
                    alt={name}
                    width={110}
                />
            </div>
            <p>{name}</p>
            <p>{"$ " + price}</p>
            <Button
                variant="remove"
                color="red"
                onClick={() => removeFromCart(product)}
            >
                Remove
            </Button>
        </div>
    );
};
