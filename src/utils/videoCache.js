import { useState, useEffect } from "react";

const CACHE_NAME = "valorant-videos-v1";

async function getCachedBlobUrl(url) {
  if (!("caches" in window)) {
    return url;
  }

  const cache = await caches.open(CACHE_NAME);
  let response = await cache.match(url);

  if (!response) {
    response = await fetch(url);
    await cache.put(url, response.clone());
  }

  const blob = await response.blob();
  return URL.createObjectURL(blob);
}

export function useVideoSrc(url) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    if (!url) return;
    let blobUrl = null;

    getCachedBlobUrl(url).then((result) => {
      blobUrl = result;
      setSrc(result);
    });

    return () => {
      if (blobUrl && blobUrl.startsWith("blob:")) {
        URL.revokeObjectURL(blobUrl);
      }
    };
  }, [url]);

  return src;
}
