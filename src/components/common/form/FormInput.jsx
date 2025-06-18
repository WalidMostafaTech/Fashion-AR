const FormInput = ({ label, type = "text" }) => {
  if (type === "textarea") {
    return (
      <div className="w-full">
        <label className="block mb-1">{label}</label>
        <textarea
          placeholder={label}
          className="w-full p-2 bg-white outline-0 border border-gray-200 min-h-44 resize-none"
        ></textarea>
      </div>
    );
  }
  return (
    <div className="w-full">
      <label className="block mb-1">{label}</label>
      <input
        type={type}
        placeholder={label}
        className="w-full p-2 bg-white outline-0 border border-gray-200"
      />
    </div>
  );
};

export default FormInput;
