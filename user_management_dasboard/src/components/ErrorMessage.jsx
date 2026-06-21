function ErrorMessage({ message, onRetry }) {
  return (
    <div className="card p-6 text-center">
      <p className="mb-4 text-red-500">{message}</p>

      <button onClick={onRetry} className="btn-primary">
        Retry
      </button>
    </div>
  );
}

export default ErrorMessage;
