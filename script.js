function openModal(videoSrc) {
  const modal = document.getElementById('modal');
  const video = document.getElementById('modalVideo');
  video.src = videoSrc;
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('modal');
  const video = document.getElementById('modalVideo');
  video.pause();
  video.src = '';
  modal.style.display = 'none';
}
