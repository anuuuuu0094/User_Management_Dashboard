function Loader() {
  return (
    <div className="card p-6">
      <div className="space-y-4 animate-pulse">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="h-12 rounded-lg bg-sky-100" />
        ))}
      </div>
    </div>
  );
}

export default Loader;
