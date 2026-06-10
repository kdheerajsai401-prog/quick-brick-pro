import { useEffect, useState } from 'react';

/**
 * Returns true when the viewport matches the given media query (default: below
 * Tailwind's `md` breakpoint). Updates live on resize / orientation change.
 */
export function useIsMobile(query = '(max-width: 767px)') {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setIsMobile(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return isMobile;
}
