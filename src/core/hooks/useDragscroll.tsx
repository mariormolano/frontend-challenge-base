import { useStore } from "exome/react";
import { useEffect, useRef, useState } from "react";
import { eventStore } from "../storage/events.store";

interface Dragscroll {
  scrollRef: React.MutableRefObject<HTMLDivElement | null>;
  drag: number;
}

const useDragscroll = (): Dragscroll => {
  const { draggables, setDraggables } = useStore(eventStore);
  const [drag, setDrag] = useState<number>(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent): void => {
    setDraggables(true);
    if (scrollRef.current && e.button === 0) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: MouseEvent): void => {
    e.preventDefault();
    if (scrollRef.current && draggables) {
      scrollRef.current.style.cursor = "grabbing";
      const x = e.pageX - scrollRef.current.offsetLeft;
      const slide = x - startX;
      if (slide < 1 || slide > -1) {
        setDrag(2);
      }
      scrollRef.current.scrollLeft = scrollLeft - slide;
    }
  };

  const handleMouseUpOrLeave = (): void => {
    if (scrollRef.current) {
      setDraggables(false);
      scrollRef.current.style.cursor = "default";
    }
  };

  useEffect(() => {
    if (!draggables && drag) {
      setTimeout(() => {
        setDrag(1);
      }, 100);
    }
  }, [draggables, drag]);

  if (scrollRef.current) {
    scrollRef.current.onmousedown = handleMouseDown;
    scrollRef.current.onmouseup = handleMouseUpOrLeave;
    scrollRef.current.onmouseleave = handleMouseUpOrLeave;
    scrollRef.current.onmousemove = handleMouseMove;
  }

  return { scrollRef, drag };
};

export default useDragscroll;
