const GlobalTitle = ({ title, subtitle, description, text = "large" }) => {
  return (
    <div className="max-w-xl mx-auto text-center mb-8 space-y-1">
      {subtitle && <p className="text-main-clr text-sm lg:text-lg font-medium">{subtitle}</p>}
      <h2 className={`${text==="large" ? "lg:text-4xl" : "text-lg"} text-xl font-semibold pb-4 relative after:absolute after:w-16 after:h-1 after:bg-main-clr after:bottom-0 after:left-1/2 after:-translate-x-1/2`}>
        {title}
      </h2>
      {description && <p className="text-gray-clr3">{description}</p>}
    </div>
  );
};

export default GlobalTitle;
