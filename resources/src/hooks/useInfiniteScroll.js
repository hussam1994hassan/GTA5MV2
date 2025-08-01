// src/hooks/useInfiniteScroll.js
import { useEffect, useRef, useState, useCallback } from "react";

const useInfiniteScroll = (items, batchSize = 25) => {
    const [visibleCount, setVisibleCount] = useState(batchSize);
    const sentinelRef = useRef(null);

    const loadMore = useCallback(() => {
        setVisibleCount((c) => Math.min(c + batchSize, items.length));
    }, [batchSize, items.length]);

    useEffect(() => {
        if (!sentinelRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && loadMore(),
            { rootMargin: "200px" }
        );
        observer.observe(sentinelRef.current);
        return () => observer.disconnect();
    }, [loadMore]);

    return {
        visibleItems: items.slice(0, visibleCount),
        sentinelRef,
        hasMore: visibleCount < items.length,
    };
};

export default useInfiniteScroll;
