import React from "react";

function Home(props)
{
    console.log('props', props);
    
    return <>
        <div class="container mx-auto p-4">
            <h1 class="text-3xl font-bold mb-4">Featured Products</h1>

            <div class="flex justify-end mb-4">  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Cart (0)  </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                <div class="bg-white rounded-lg shadow-md p-4">
                    <img src="https://www.alhadiexpress.com.bd/product_images/1702471044.jpg" alt="Product 1" class="w-full h-48 object-cover rounded-t-lg mb-2"/> <h2 class="text-lg font-semibold mb-2">Product Name 1</h2>
                    <p class="text-gray-600 mb-2">$19.99</p>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>props.addCartHandler({name:'Apple Watch', price:5000})}>
                        Add to Cart
                    </button>
                </div>


                <div class="bg-white rounded-lg shadow-md p-4">
                    <img src="https://www.alhadiexpress.com.bd/product_images/1714478834.jpeg" alt="Product 1" class="w-full h-48 object-cover rounded-t-lg mb-2"/> <h2 class="text-lg font-semibold mb-2">Product Name 1</h2>
                    <p class="text-gray-600 mb-2">$29.99</p>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>props.addCartHandler({name:'Apple Watch', price:5000})}>
                        Add to Cart
                    </button>
                </div>
                <div class="bg-white rounded-lg shadow-md p-4">
                    <img src="https://www.alhadiexpress.com.bd/product_images/1701281347.jpg" alt="Product 1" class="w-full h-48 object-cover rounded-t-lg mb-2"/> <h2 class="text-lg font-semibold mb-2">Product Name 1</h2>

                    <p class="text-gray-600 mb-2">$49.99</p>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>props.addCartHandler({name:'Apple Watch', price:5000})}>
                        Add to Cart
                    </button>
                </div>
                <div class="bg-white rounded-lg shadow-md p-4">
                    <img src="https://www.alhadiexpress.com.bd/product_images/1701281889.jpg" alt="Product 1" class="w-full h-48 object-cover rounded-t-lg mb-2"/> <h2 class="text-lg font-semibold mb-2">Product Name 1</h2>

                    <p class="text-gray-600 mb-2">$49.99</p>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>props.addCartHandler({name:'Apple Watch', price:5000})}>
                        Add to Cart
                    </button>
                </div>


            </div>

            <div class="text-center mt-4">
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    View All
                </button>
            </div>
        </div>
    </>
}

export default Home;