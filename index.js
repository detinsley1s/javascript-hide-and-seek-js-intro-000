function getFirstSelector(s) {
  return document.querySelector(s)
}

function nestedTarget() {
  return document.getElementById('nested')
    .querySelector('.target')
}