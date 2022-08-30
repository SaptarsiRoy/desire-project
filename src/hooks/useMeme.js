// react imports
import { useEffect, useState } from "react";

// custom hook to get the meme from reddit api
const useMeme = () => {
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    let result = [];
    const fetchMeme = async () => {
      const response = await fetch(
        "https://www.reddit.com/r/memes/top.json?limit=10",
        {
          signal: controller.signal,
        }
      );
      const data = await response.json();
      result = data.data.children.map((child, index) => ({
        url: child.data.is_video
          ? child.data.media.reddit_video.fallback_url
          : child.data.url,
        id: index,
        isVideo: child.data.is_video,
      }));
      setMeme(result);
    };
    fetchMeme();
    return () => {
      controller.abort();
    };
  }, []);
  return { meme };
};

// export hook
export default useMeme;
