document.getElementById('message-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('response').classList.remove('hidden');
  this.reset();
});
