import { forwardRef } from "react";
import { useVideoSrc } from "../utils/videoCache";

const CachedVideo = forwardRef(({ src: url, ...props }, ref) => {
  const src = useVideoSrc(url);
  return <video ref={ref} src={src ?? undefined} {...props} />;
});

CachedVideo.displayName = "CachedVideo";

export default CachedVideo;
