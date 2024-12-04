// Code: Layout for the login and recovery password pages

export default function IniciarSesionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full max-w-[350px] max-h-[80vh] sm:w-[350px] md:w-[450px] md:max-w-[450px] md:h-auto px-5 py-8 sm:py-10 md:py-12 shadow-lg flex flex-col gap-7 overflow-auto dark:bg-custom-black-2 dark:shadow-gray-900">
      {children}
    </section>
  );
}
