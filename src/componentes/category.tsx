
import { categories } from "../data/products"

interface CategoryProps {
    setSelectedCategory: (category: string) => void;
}

export default function Category({ setSelectedCategory }: CategoryProps) {

    return (
        <div className="flex flex-col items-center justify-center gap-7 relative top-36">
            <div className="flex  items-center justify-center gap-16 flex-wrap">
                {categories.map((item, index) => {
                    return (
                       
                        <button className="flex flex-col items-center justify-center gap-2" key={index}
                            onClick={() => setSelectedCategory(item.name)}
                        >
                            <img className="w-40  cursor-pointer  transition-transform duration-300 ease-in-out hover:scale-110" src={item.image} alt="" />
                            {item.name}
                        </button>
                    );
                })}

            </div>
        </div>
    )
}
