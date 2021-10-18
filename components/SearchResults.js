import PaginationButtons from "./PaginationButtons";

export default function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full min-h-screen px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 font-open-sans dark:bg-primary-dark  dark:text-white">
      <p className="text-gray-600 dark:text-gray-400 text-md mb-3 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => {
        return (
          <div
            key={result.link}
            className="max-w-xl py-4 px-3 text-xs mb-4 shadow ring-gray-200 dark:ring-[#303134] dark:ring-1 dark:shadow-3xl ring-2 sm:ring-0 sm:text-base sm:shadow-none rounded-lg"
          >
            <div className="group">
              <a href={result.link} className="text-sml line-clamp-1">
                {result.formattedUrl}
              </a>
              <a href={result.link}>
                <h2 className="truncate text-xl text-blue-800 dark:text-blue-400 font-medium group-hover:underline">
                  {result.title}
                </h2>
              </a>
            </div>

            <p className="line-clamp-2">{result.snippet}</p>
          </div>
        );
      })}

      <PaginationButtons />
    </div>
  );
}
