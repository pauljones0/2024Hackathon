function updateTitle() {
  const scrollPercentage = Math.floor((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
  const firePosition = Math.floor(scrollPercentage / 10);
  
  // Use UTF code for fire emoji
  const fireEmoji = '\u{1F525}';
  const rocketEmoji = '\u{1F680}';
  
  // Create title with full fire emojis
  const title = 'HÆKÆSHIP ' + fireEmoji.repeat(firePosition) + rocketEmoji; +' Extraterrestrial Networking Site'
  
  document.title = title;
}

window.addEventListener('scroll', updateTitle);
updateTitle();