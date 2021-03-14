let count = 0;

console.log('log');
console.info('info');
console.warn('warn');
console.error('error alarm!!!!', count);

const handlerClick = () => {
  count++;
  console.log(`you clicked ${count} times`);
  const li = document.createElement('li');
  li.innerText = `you clicked ${count} times`;
  document.body.append(li);
};
