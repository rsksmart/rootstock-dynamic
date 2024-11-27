import { useCallback, useState } from "react";

const useClipboard = () => {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setError(null);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return { copied, error, copyToClipboard };
};

export default useClipboard;
