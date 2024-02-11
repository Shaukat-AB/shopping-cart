import { ProductHomeCard as ProductCard } from "../components";

const Products = [
    {
        id: 101,
        name: "Gray apple watch with sports band",
        price: 87,
        thumbnail:
            "src/assets/images/space gray apple watch with sports band.jpg",
    },
    {
        id: 102,
        name: "Silver and Black headphone",
        price: 28,
        thumbnail: "src/assets/images/silver and black headphone.jpg",
    },
    {
        id: 106,
        name: "One step two instant camera",
        price: 110,
        thumbnail: "src/assets/images/one step two instant camera.jpg",
    },
    {
        id: 107,
        name: "Apple air pods",
        price: 15,
        thumbnail: "src/assets/images/apple air pods.jpg",
    },
    {
        id: 109,
        name: "Goldbeats wireless headphone",
        price: 30,
        thumbnail: "src/assets/images/goldbeats wireless headphone.jpg",
    },
    {
        id: 111,
        name: "Sea apple watch",
        price: 92,
        thumbnail: "src/assets/images/sea apple watch.jpg",
    },
];

export const Home = () => {
    return (
        <>
            <section className="flex gap-8 flex-wrap items-center justify-center">
                {Products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </>
    );
};
