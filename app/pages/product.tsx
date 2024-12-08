import Image from "next/image";

export default function ProductPage() {
  return (
    <div className="bg-white min-h-screen w-[1440px] mx-auto p-6 font-sans">
      {/* Header */}
      <header className="text-gray-700 text-sm flex justify-between items-center border-b pb-4">
        <nav>
          <ul className="flex space-x-4">
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        </nav>
        <input
          type="text"
          placeholder="Search for products..."
          className="border rounded-md px-4 py-1"
        />
        <div>🛒 Cart</div>
      </header>

      {/* Main Section */}
      <main className="mt-8">
        <div className="flex space-x-8">
          {/* Product Images */}
          <div className="flex flex-col space-y-4 w-1/3">
            <div className="border p-2 rounded-md">
              <Image src="/shirt1.png" alt="Main Product" width={400} height={400} />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Image src="/shirt2.png" alt="Thumbnail" width={100} height={100} />
              <Image src="/shirt3.png" alt="Thumbnail" width={100} height={100} />
              <Image src="/shirt4.png" alt="Thumbnail" width={100} height={100} />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-green-600 font-semibold">4.5/5</span>
              <span className="text-gray-400">(451 Reviews)</span>
            </div>
            <div className="mt-4">
              <span className="text-red-500 text-lg">$260</span>
              <span className="line-through text-gray-500 ml-2">$300</span>
              <span className="text-green-600 ml-2">-40%</span>
            </div>
            <p className="text-gray-600 mt-4">
              This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
            </p>
            <div className="mt-6">
              <h2 className="font-semibold mb-2">Select Colors</h2>
              <div className="flex space-x-4">
                <button className="w-8 h-8 rounded-full bg-green-800"></button>
                <button className="w-8 h-8 rounded-full bg-gray-800"></button>
                <button className="w-8 h-8 rounded-full bg-blue-800"></button>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="font-semibold mb-2">Choose Size</h2>
              <div className="flex space-x-4">
                <button className="border px-4 py-2 rounded-md">Small</button>
                <button className="border px-4 py-2 rounded-md">Medium</button>
                <button className="border px-4 py-2 rounded-md">Large</button>
                <button className="border px-4 py-2 rounded-md">X-Large</button>
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-black text-white px-8 py-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Rating & Reviews</h2>
          <div className="space-y-4">
            <div className="border p-4 rounded-md">
              <p className="font-semibold">Samantha D.</p>
              <p className="text-gray-600 text-sm">Posted on August 14, 2023</p>
              <p className="mt-2">I absolutely love this t-shirt! The design is unique, and the fabric feels so comfortable. It's my favorite go-to shirt!</p>
            </div>
            <div className="border p-4 rounded-md">
              <p className="font-semibold">Alex M.</p>
              <p className="text-gray-600 text-sm">Posted on August 15, 2023</p>
              <p className="mt-2">The t-shirt exceeded my expectations! Vibrant colors and top-notch quality.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
