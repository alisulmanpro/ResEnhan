import Navbar from "@/components/ui/navbar";
import { Fragment } from "react/jsx-runtime";

const Layout = ({
  children,
  progress
}: Readonly<{
  children: React.ReactNode;
  progress: React.ReactNode;
}>) => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main className="grid lg:grid-cols-4 gap-5 px-2 lg:px-7">
        <aside className="hidden lg:block">
          {progress}
        </aside>
        <article className="border col-span-3 xl:col-span-2">
          {children}
        </article>
        <aside className="border hidden xl:block">
          <div></div>
        </aside>
      </main>
    </Fragment>
  );
}

export default Layout