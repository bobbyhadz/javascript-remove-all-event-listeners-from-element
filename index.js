console.log('bobbyhadz.com');

const box = document.getElementById('box');

// 👇️ add 2 event listeners
box.addEventListener('click', function handleClick() {
  console.log('box clicked first');
});

box.addEventListener('click', function handleClick() {
  console.log('box clicked second');
});

// ✅ Remove event listeners from Element
box.replaceWith(box.cloneNode(true));
