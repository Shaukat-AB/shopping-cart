import { ProductHomeCard as ProductCard } from "../components";
import WatchImg from "../assets/images/space gray apple watch with sports band.jpg";
import HeadphoneImg from "../assets/images/silver and black headphone.jpg";
import CameraImg from "../assets/images/one step two instant camera.jpg";
import AirpodsImg from "../assets/images/apple air pods.jpg";
import WirelessHeadphoneImg from "../assets/images/goldbeats wireless headphone.jpg";
import SeawatchImg from "../assets/images/sea apple watch.jpg";

const Products = [
    {
        id: 101,
        name: "Gray apple watch with sports band",
        price: 87.99,
        thumbnail: WatchImg,
    },
    {
        id: 102,
        name: "Silver and Black headphone",
        price: 28.77,
        thumbnail: HeadphoneImg,
    },
    {
        id: 106,
        name: "One step two instant camera",
        price: 110.98,
        thumbnail: CameraImg,
    },
    {
        id: 107,
        name: "Apple air pods",
        price: 15.44,
        thumbnail: AirpodsImg,
    },
    {
        id: 109,
        name: "Goldbeats wireless headphone",
        price: 30,
        thumbnail: WirelessHeadphoneImg,
    },
    {
        id: 111,
        name: "Sea apple watch",
        price: 92.33,
        thumbnail: SeawatchImg,
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
