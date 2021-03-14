let count = 1;
console.log('log: ', count);
console.warn('warn: ', count);
console.error('error: ', count);
console.info('info: ', count);

const handleFetch = () => {
  const loader = document.createElement('p');
  loader.innerText = `Loading...`;
  document.body.append(loader);

  fetch(`https://jsonplaceholder.typicode.com/users?userId=${10 * count}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(users => {
      localStorage.setItem(`List№${count} users count: `, `${10 * (count - 1)} - ${10 * count}`);

      const div = document.createElement('div');
      document.body.append(div);
      div.style = 'border: 1px solid #555; border-radius: 10px; margin: 15px 0;';
      const details = document.createElement('details');
      div.appendChild(details);
      details.innerHTML = `<summary>List №${count}</summary>`;
      const ul = document.createElement('ul');
      details.appendChild(ul);

      ++count;

      for (let i = 0; i < users.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `
            <p>id: ${users[i].id}</p>
            <p>name: ${users[i].name}</p>
            <p>email: ${users[i].email}</p>
            <p>website: ${users[i].website}</p>`;
        ul.appendChild(li);

        loader.remove();
      }
    });
};
