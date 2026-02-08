export function useRowVirtualization(
  rowCount: number,
  rowHeight: number,
  containerHeight: number,
  scrollTop: number
) {
  const startIndex = Math.floor(scrollTop / rowHeight);
  const visibleCount = Math.ceil(containerHeight / rowHeight);
  const endIndex = Math.min(rowCount, startIndex + visibleCount + 5);

  return {
    startIndex,
    endIndex,
    offsetTop: startIndex * rowHeight
  };
}
