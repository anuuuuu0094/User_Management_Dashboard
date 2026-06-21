function EmptyState({
  title = "No users found",
  description = "Try changing your search or filters.",
}) {
  return (
    <div className="card py-12 text-center">
      <h3 className="text-lg font-semibold text-slate-700">{title}</h3>

      <p className="mt-2 text-slate-500">{description}</p>
    </div>
  );
}

export default EmptyState;
