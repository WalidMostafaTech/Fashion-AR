const FormContainer = ({ onSubmit, children }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 w-full bg-gray-100 border border-gray-200 p-4 md:p-10"
    >
      <div className="grid md:grid-cols-2 gap-4">{children}</div>
    </form>
  );
};

export default FormContainer;
