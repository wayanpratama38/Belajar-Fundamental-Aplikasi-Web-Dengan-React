import { useSearchParams } from "react-router-dom";

export default function useSearch(paramKey = "title") {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get(paramKey) || "";

  const setKeyword = (newKeyword) => {
    setSearchParams({ [paramKey]: newKeyword });
  };

  return [keyword, setKeyword];
}
