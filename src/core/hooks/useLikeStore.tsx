import { useEffect, useState } from "react";

interface LikeData {
  id: number;
  like: boolean;
}

const useLikeStore = (id?: number): [boolean, (like: boolean) => void] => {
  const [likeSelect, setLikeSelect] = useState(false);

  useEffect(() => {
    if (!id) {
      setLikeSelect(true);
    }
  }, [id]);

  useEffect(() => {
    try {
      const data: string | null = localStorage.getItem("like");
      if (data) {
        const likeData: LikeData = JSON.parse(data);
        if (likeData.id === id) {
          setLikeSelect(likeData.like);
        } else {
          setLikeSelect(false);
        }
      } else {
        setLikeSelect(false);
      }
    } catch (error) {
      setLikeSelect(false);
    }
  }, [id]);

  const changeLike = (like: boolean): void => {
    try {
      if (id) {
        const data: LikeData = {
          id,
          like,
        };
        setLikeSelect(like);
        localStorage.setItem("like", JSON.stringify(data));
      }
    } catch (error) {
      setLikeSelect(false);
    }
  };

  return [likeSelect, changeLike];
};

export default useLikeStore;
