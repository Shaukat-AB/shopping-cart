import { useCart } from "../context/CartContext";
import { Button } from "./Button";
import { ProductPrice } from "./ProductHomeCard";

export const ProductCartCard = ({ product }) => {
    const { name, price, thumbnail } = product;
    const { removeFromCart } = useCart();
    // price to string than split price's decimal part
    const [priceWhole, priceDecimal] = String(price).split(".");

    return (
        <div className="p-4 mb-8 flex gap-4 flex-wrap items-center justify-between bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex-1 min-w-20 p-4 pr-0 mb-4 h-[100px] flex items-center overflow-hidden">
                <img
                    className="rounded-t-lg bg-cover mx-auto"
                    src={thumbnail}
                    alt={name}
                    width={110}
                    loading="lazy"
                />
            </div>
            <FlexItem>
                <p className="text-center">{name}</p>
            </FlexItem>
            <FlexItem>
                <ProductPrice price={price} />
            </FlexItem>
            <FlexItem>
                <Button
                    variant="remove"
                    color="red"
                    onClick={() => removeFromCart(product)}
                >
                    Remove
                </Button>
            </FlexItem>
        </div>
    );
};

const FlexItem = ({ className = "", children }) => {
    return (
        <div
            className={`min-w-20 flex justify-center flex-1 mx-auto${className}`}
        >
            {children}
        </div>
    );
};
