chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
	id: 'searchMergeflow',
	title: 'Search Mergeflow for "%s"',
	contexts: ['selection'],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'searchMergeflow') {
	const searchQuery = encodeURIComponent(info.selectionText);
	const searchUrl = `https://mergeflow.net/profiles/plugin/search/summary?date=default3&q="${searchQuery}"`;

	chrome.tabs.create({ url: searchUrl });
  }
});
