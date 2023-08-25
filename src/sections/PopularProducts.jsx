    import { products } from "../constants";
    import PopularProductCard from "../components/PopularProductCard";

    const PopularProducts = () => {
    return (
        <section id="products" className="max-container max-sm:mt-12 ">
            <div className="flex flex-col justify-start overflow-x-hidden gap-5">
                <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Trending</span> <span>Products</span></h2>
                <p className="text-xl lg:max-w-lg mt-2 font-montserrat text-slate-gray">
                    Discover the latest and most sought-after trends in the world of shopping with our curated collection of trending products. Our website brings you an exciting array of items that are currently making waves in the market. 
                </p>
            </div>

            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
                {products.map((product) => (
                    <PopularProductCard key={product.name} {...product} />
                ))}
            </div>
        </section>
    )
    }

    export default PopularProducts
