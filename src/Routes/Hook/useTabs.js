import { useState } from 'react';

export function useTabs(initialTab, allTabs) {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};