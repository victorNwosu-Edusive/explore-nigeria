import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-white text-center h-lvh flex flex-col items-center justify-center">
      <h1 className="font-heading text-4xl">Oops!</h1>
      <p className="font-heading text-amber-500 text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="font-primary text-white">
        <i>Page {error.statusText || error.message}</i>
      </p>
    </div>
  );
}