export const Button = ({
    variant = "default",
    color = "main",
    onClick = () => null,
    className = "",
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

    const common =
        "transition-colors focus:ring-4 focus:outline-none font-medium border text-sm";

    const variants = {
        default: `${common} text-white border-transparent rounded-lg px-5 py-2.5`,
        outlined: `${common} hover:text-white rounded-lg px-5 py-2.5`,
        icon: `${common} hover:text-white rounded-full px-2 py-2 disabled:bg-gray-100 disabled:text-gray-900 disabled:hover:text-gray-900 disabled:border-gray-100`,
    };

    const finalStyle = (() => {
        const outlined = `${colors[color + "outlined"]} ${className}`;
        switch (variant) {
            case "outlined":
                return `${variants["outlined"]} ${outlined}`;
            case "icon":
                return `${variants["icon"]} ${outlined}`;
            default:
                return `${variants["default"]} ${colors[color]} ${className}`;
        }
    })();

    return (
        <button className={finalStyle} onClick={() => onClick()} {...btnProps}>
            {children}
        </button>
    );
};
