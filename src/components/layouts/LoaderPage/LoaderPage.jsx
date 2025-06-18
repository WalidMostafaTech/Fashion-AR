import "./LoaderPage.css";

const LoaderPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-bg-clr">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-24 h-24 border-8 border-main-clr border-t-transparent rounded-full animate-spin"></div>
        <p className="text-main-clr text-lg font-semibold">جارٍ التحميل...</p>
      </div>
    </div>
  );
};

export default LoaderPage;
