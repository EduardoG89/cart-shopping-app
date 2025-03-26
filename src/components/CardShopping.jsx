import { useState } from "react";
import { useEffect } from "react";


function CardShopping() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => console.error("Error al consumir el api", error));
    }, []);


    const listProducts =

        products.length > 0 ? (

            products.slice(0,50).map(product =>

                <li key={product.id}>
                    <div className="max-w-56 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-5 ml-5">
                        <a href="#">
                            <img className="rounded-t-lg" src={product.images?.[0]} alt={product.title} />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                            </a>
                            <div className="flex items-center justify-between">
                                <span className="tracking-tight text-gray-700 dark:text-gray-400">MX${product.price}</span>
                                <button type="button" className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.268 6A2 2 0 0 0 14 9h1v1a2 2 0 0 0 3.04 1.708l-.311 1.496a1 1 0 0 1-.979.796H8.605l.208 1H16a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L4.686 5H4a1 1 0 0 1 0-2h1.5a1 1 0 0 1 .979.796L6.939 6h5.329Z" />
                                        <path d="M18 4a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0V8h2a1 1 0 1 0 0-2h-2V4Z" />
                                    </svg>
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            )

        ) : (<p>Cargando..</p>);



    return (
        <ul className="grid w- gap-6  md:grid-cols-4">
            {listProducts}
        </ul>
    );

}

export default CardShopping;