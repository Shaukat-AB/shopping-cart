import { useCart } from "../context/CartContext";
import { Button } from "./Button";

export const ProductCartCard = ({ product }) => {
    const { name, price, thumbnail } = product;
    const { removeFromCart } = useCart();
    // price to string than split price's decimal part
    const [priceWhole, priceDecimal] = String(price).split(".");

    return (
        <div className="p-4 mb-8 flex gap-4 flex-wrap items-center justify-between bg-white border border-gray-200 rounded-lg shadow">
            <div className="p-4 pr-0 mb-4 h-[100px] flex items-center overflow-hidden">
                <img
                    className="rounded-t-lg bg-cover mx-auto"
                    src={thumbnail}
                    alt={name}
                    width={110}
                    loading="lazy"
                />
            </div>
            <p>{name}</p>
            <p className="text-xl font-semibold tracking-tight text-gray-900">
                {"$ " + priceWhole}
                <span className="text-sm text-gray-700">
                .{ priceDecimal || ".00"}
                </span>
            </p>
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
