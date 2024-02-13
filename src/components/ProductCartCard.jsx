import { useCart } from "../context/CartContext";
import { Button } from "./Button";
import { ProductPrice } from "./ProductHomeCard";
import { HiPlus, HiMinus } from "react-icons/hi2";

export const ProductCartCard = ({ product }) => {
    const { id, name, price, thumbnail, count } = product;
    const { removeFromCart, updateProductCount } = useCart();

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
            <FlexItem className="min-w-20 flex-col items-center">
                <p className="text-center">{name}</p>
                <ProductPrice price={price} />
            </FlexItem>
            <FlexItem className="items-center">
                <Button
                    variant="icon"
                    onClick={() => updateProductCount(id, -1)}
                    btnProps={{
                        disabled: count < 2,
                        "aria-label": "Decrease product count",
                    }}
                >
                    <HiMinus />
                </Button>
                <div className="min-w-7 flex items-center justify-center">
                    {count ?? 1}
                </div>
                <Button
                    variant="icon"
                    onClick={() => updateProductCount(id, 1)}
                    btnProps={{
                        disabled: count > 24,
                        "aria-label": "Decrease product count",
                    }}
                >
                    <HiPlus />
                </Button>
            </FlexItem>
            <FlexItem>
                <Button
                    variant="outlined"
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
            className={`min-w-20 flex justify-center flex-1 mx-auto ${className}`}
        >
            {children}
        </div>
    );
};
