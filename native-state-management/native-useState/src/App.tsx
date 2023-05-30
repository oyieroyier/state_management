import { useState } from 'react';

function NameList() {
	const [names, setNames] = useState(['Bob', 'Prince', 'Kimathi']);
	const [name, setName] = useState(() => 'Jack');

	const addName = () => {
		// names.push(name);
		setNames([...names, name]);
		setName('');
	};
	return (
		<>
			<ul>
				{names.map((name) => (
					<li key={name}>{name}</li>
				))}
			</ul>
			<input
				type="text"
				onChange={(event) => setName(event.target.value)}
				value={name}
			/>
			<button onClick={addName}>Add Name</button>
		</>
	);
}

function Counter() {
	const [count, setCount] = useState(10);

	const addCount = () => {
		setCount(count + 1);
	};

	return (
		<>
			<button onClick={addCount}>Count = {count}</button>
		</>
	);
}

export const App = () => {
	return (
		<>
			<Counter />
			<Counter />
			<NameList />
		</>
	);
};

export default App;
