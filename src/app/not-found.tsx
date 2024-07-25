import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-primary pb-20 pt-30">
      <div className="wrapper relative flex flex-col items-center text-center">
        <p className="mb-8 text-balance text-10 font-bold text-white">404 - Page not found</p>
        <p className="max-w-[60ch] text-5 text-secondary-100">
          The page you are looking for could not be found. Maybe because the website is a single page. Here
          are some pages you can visit:
        </p>
        <ul className="mt-6 flex w-[17.5rem] max-w-full flex-col gap-4 rounded-lg border border-secondary-200 bg-primary-dark p-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={index}>
              <Link
                className="inline-block w-full rounded-lg border border-secondary-200 bg-primary-dark px-4 py-2 font-bold text-white hover:bg-primary-darken"
                data-external
                href="/"
              >
                Home
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-5 text-secondary-100">Have fun exploring all these pages.)</p>
      </div>
    </div>
  );
}
