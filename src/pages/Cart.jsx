import { ProductCartCard as ProductCard } from "../components";
import { useCart } from "../context/CartContext";

export const Cart = () => {
    const { total, cartList } = useCart();

    return (
        <>
            <h1 className="text-3xl font-semibold text-center mb-8">
                {total < 1 ? "Your cart is empty!" : "Total: $ " + total}
            </h1>
            <section>
                {cartList.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </>
    );
};
