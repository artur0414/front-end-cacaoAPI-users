// Loader component

export const Loader = ({ sizeParent = false }: { sizeParent?: boolean }) => {
  return sizeParent ? (
    // Loader for a parent element
    <div className="relative w-full h-full inset-0 flex items-center justify-center bg-slate-200 z-50 dark:bg-custom-black">
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-custom-blue border-t-transparent rounded-full"></div>
        <span className="text-custom-blue ml-4">Cargando...</span>
      </div>
    </div>
  ) : (
    // Loader for the whole screen
    <div className="absolute w-screen h-screen inset-0 flex items-center justify-center bg-white z-50 dark:bg-custom-black">
      <div className="w-full h-full bg-white flex items-center justify-center dark:bg-custom-black">
        <div className="animate-spin h-10 w-10 border-4 border-custom-blue border-t-transparent rounded-full"></div>
        <span className="text-custom-blue ml-4">Cargando...</span>
      </div>
    </div>
  );
};

export default Loader;
