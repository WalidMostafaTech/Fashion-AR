const GlobalTitle = ({ title, subtitle, description, text = "large" }) => {
  return (
    <div className="max-w-xl mx-auto text-center mb-8 space-y-2">
      {subtitle && <p className="text-main-clr text-lg">{subtitle}</p>}
      <h2 className={`${text==="large" ? "lg:text-3xl" : "text-lg"} text-lg font-semibold pb-4 relative after:absolute after:w-16 after:h-1 after:bg-main-clr after:bottom-0 after:left-1/2 after:-translate-x-1/2`}>
        {title}
      </h2>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
};

export default GlobalTitle;
