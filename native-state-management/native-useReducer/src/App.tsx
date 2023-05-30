import {
	Button,
	FormControl,
	Heading,
	Input,
	ListItem,
	UnorderedList,
} from '@chakra-ui/react';
import { useReducer } from 'react';
import { Form } from 'react-router-dom';

type ReducerAction = {
	type: any;
	payload: any;
};

const UserForm = () => {
	const [state, dispatch] = useReducer(
		(state, action) => ({
			...state,
			...action,
		}),
		{
			first: '',
			last: '',
		}
	);
	return (
		<>
			<FormControl m={'1rem'} maxW={'50%'}>
				<Input
					type="text"
					value={state.first}
					onChange={(e) => dispatch({ first: e.target.value })}
				/>
				<Input
					type="text"
					value={state.last}
					onChange={(e) => dispatch({ last: e.target.value })}
				/>
			</FormControl>

			<Heading as={"h2"}>{state.first }</Heading>
			<Heading as={"h2"}>{state.last }</Heading>
		</>
	);
};

const NameList = () => {
	const [state, dispatch] = useReducer(
		(state: any, action: ReducerAction) => {
			switch (action.type) {
				case 'SET_NAME':
					return { ...state, name: action.payload };
				case 'ADD_NAME':
					return {
						...state,
						names: [...state.names, action.payload],
						name: '',
					};
			}
		},
		{
			names: [],
			name: '',
		}
	);

	return (
		<div>
			<Input
				type="text"
				value={state.name}
				onChange={(e) =>
					dispatch({ type: 'SET_NAME', payload: e.target.value })
				}
			/>
			<Button
				onClick={() => dispatch({ type: 'ADD_NAME', payload: state.name })}
			>
				Add Name
			</Button>
			<UnorderedList>
				{state.names.map((name: string) => (
					<ListItem key={name}>{name}</ListItem>
				))}
			</UnorderedList>
		</div>
	);
};

export const App = () => {
	return (
		<div>
			<NameList />
			<UserForm />
		</div>
	);
};

export default App;
