import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { HiOutlineShoppingCart } from "react-icons/hi2";

export const Header = () => {
    const activeStyle =
        "w-fit p-5 py-3 font-medium text-gray-900 rounded-lg bg-gray-100";
    const inactiveStyle = "w-fit p-5 py-3 rounded-lg hover:bg-gray-100";
    const { cartList } = useCart();

    return (
        <header className="flex items-center justify-between gap-4 h-16 mb-12">
            <span>
                <img
                    src="src/assets/shopping-cart-logo.png"
                    width={100}
                    alt="shopping cart logo"
                    loading="lazy"
                />
            </span>
            <nav className="w-full">
                <ul className="flex items-center">
                    <li className="flex-1 text-center">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeStyle : inactiveStyle
                            }
                            to="/"
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? `${activeStyle} flex items-center justify-center h-12`
                                    : `${inactiveStyle} flex items-center justify-center h-12`
                            }
                            to="/cart"
                            aria-label="Cart Page"
                            title="Go to Cart"
                        >
                            <span className="relative inline-flex items-center p-2 rounded-lg">
                                <HiOutlineShoppingCart className="text-3xl" />
                                <span className="sr-only">Notifications</span>
                                <span
                                    className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-yellow-700 border-2 border-white rounded-full -top-0.5 end-2"
                                    aria-label="product count"
                                >
                                    {cartList.length}
                                </span>
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const NavItem = () => {
    return;
};
