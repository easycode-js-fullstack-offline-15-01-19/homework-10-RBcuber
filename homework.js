// -------------------------- Home work 10 --------------------------
// -------------------------- Кириченко Игорь --------------------------

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

xhr.addEventListener('load', () => {
	const res = JSON.parse(xhr.responseText);
	renderTodos(res)
});
xhr.send();

function renderTodos(users) {
	users.forEach((user) => addTodoToView(user));
}

function addTodoToView(user) {
	const template = `
	<div class="dropdown-item" style="cursor: pointer" id="name">${user.name}
		<div class="d-none" id="info" ">
			<ul>
				<li>Phone: ${user.phone}</li>
				<li>Email: ${user.email}</li>
				<li>Username: ${user.username}</li>
				<li>Website: ${user.website}</li>
			</ul>
		</div>
	</div>
	`;
	document.body.insertAdjacentHTML('afterbegin', template);
	let userId = document.getElementById('name');
	let userIdInfo = document.getElementById('info');
	userId.addEventListener('click', () => { userIdInfo.classList.toggle('d-none')})
}