export default function Grid() {
  return (
    <div id="grid" className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="card bg-white border-2 border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow">
          <img
            src="/s.jpg"
            alt={`Card image ${index + 1}`}
            className="card-image w-full h-32 object-cover mb-2 rounded max-w-full"
          />
          <h2 className="card-title text-lg font-semibold mb-2">Card Title {index + 1}</h2>
          <p className="card-description text-gray-600">This is a description of item {index + 1}.</p>
        </div>
      ))}
    </div>
  );
}







