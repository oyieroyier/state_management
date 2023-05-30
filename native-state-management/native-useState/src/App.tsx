import {
	Button,
	Container,
	HStack,
	Input,
	ListItem,
	UnorderedList,
} from '@chakra-ui/react';
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
			<UnorderedList mb={'1rem'}>
				{names.map((name) => (
					<ListItem key={name} listStyleType={'none'} bg={'#ccc'} p={'0.5rem'}>
						{name}
					</ListItem>
				))}
			</UnorderedList>
			<Input
				type="text"
				onChange={(event) => setName(event.target.value)}
				value={name}
				isRequired
			/>
			<Button onClick={addName}>Add Name</Button>
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
			<Button onClick={addCount}>Count = {count}</Button>
		</>
	);
}

export const App = () => {
	return (
		<Container h={'100vh'}>
			<HStack p={'1rem'}>
				<Counter />
				<Counter />
			</HStack>
			<NameList />
		</Container>
	);
};

export default App;
