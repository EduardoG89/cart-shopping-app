import { useState,useEffect } from "react";


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

            products.slice(0, 20).map(product =>

                <li key={product.id}>
                    <div className="max-w-64 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800  dark:border-gray-700 mt-5">
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
        )
            :
            (
                <div role="status" className="flex flex-col items-center col-span-4 ">
                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Cargando...</span>
                </div>
            );



    return (
        <ul className="grid justify-items-center md:grid-cols-4 mt-20">
            {listProducts}
        </ul>
    );

}

export default CardShopping;