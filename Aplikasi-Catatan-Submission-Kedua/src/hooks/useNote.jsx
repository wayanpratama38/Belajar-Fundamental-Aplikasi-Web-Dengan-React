import React from "react";

export default function useNote(fetchFunction) {
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // UseEffect untuk fetch function
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { error, data } = await fetchFunction();

      if (!error && data) {
        setNotes(data);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return [notes, loading];
}
