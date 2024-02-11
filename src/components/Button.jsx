export const Button = ({
    variant = "default",
    color = "main",
    onClick = () => null,
    btnProps = {},
    children,
}) => {
    const colors = {
        main: "bg-amber-700 hover:bg-amber-800 focus:ring-amber-300",
        mainoutlined:
            "text-amber-700 border-amber-700 hover:bg-amber-800 focus:ring-amber-300",
        red: "bg-red-700 hover:bg-red-800 focus:ring-red-300",
        redoutlined:
            "text-red-700 border-red-700 hover:bg-red-800 focus:ring-red-300",
    };

    const variants = {
        default:
            "transition-colors text-white focus:ring-4 focus:outline-none font-medium border border-transparent rounded-lg text-sm px-5 py-2.5 me-2 mb-2",
        outlined:
            "transition-colors hover:text-white focus:ring-4 focus:outline-none font-medium border rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
    };
    const finalStyle = (() =>
        variant !== "remove"
            ? `${variants["default"]} ${colors[color]}`
            : `${variants["outlined"]} ${colors[color + "outlined"]}`)();

    return (
        <button className={finalStyle} onClick={() => onClick()} {...btnProps}>
            {children}
        </button>
    );
};
