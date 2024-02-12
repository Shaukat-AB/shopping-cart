import { useCart } from "../context/CartContext";
import { Button } from "./Button";

export const ProductHomeCard = ({ product }) => {
    const { id, name, price, thumbnail } = product;
    const { removeFromCart, addToCart, cartList } = useCart();
    // determine whether current product is already in 'cartList'.
    const inCart = cartList.some((cartItem) => cartItem.id === id);
    // price to string than split price's decimal part
    const [priceWhole, priceDecimal] = String(price).split(".");

    const onClick = () => {
        inCart ? removeFromCart(product) : addToCart(product);
    };

    return (
        <div className=" p-4 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div className="p-4 mb-4 h-[240px] overflow-hidden">
                <img
                    className="rounded-t-lg bg-cover mx-auto"
                    src={thumbnail}
                    alt={name}
                    loading="lazy"
                />
            </div>
            <h3 className="text-xl tracking-tight text-gray-900">{name}</h3>
            <div className="flex items-center justify-between my-4">
                <p className="text-xl font-semibold tracking-tight text-gray-900">
                    {"$ " + priceWhole}
                    <span className="text-sm text-gray-700">
                        .{ priceDecimal || ".00"}
                    </span>
                </p>
                <Button
                    variant={inCart ? "remove" : "default"}
                    color={inCart ? "red" : "main"}
                    onClick={() => onClick()}
                >
                    {inCart ? "Remove" : "Add To Cart"}
                </Button>
            </div>
        </div>
    );
};
