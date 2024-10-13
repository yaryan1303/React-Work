const ErrorMessage = (probs) => {
  return (
    <>
      {probs.items.length === 0 && <h2>This is Empty</h2>}
    </>
  );
};

export default ErrorMessage;
