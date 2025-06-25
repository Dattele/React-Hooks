const HookData = [
  {
    name: 'useState',
    description: 'Allows you to add state variables to components.',
    syntax: 'const [state, setState] = useState(initialState);',
    parameters: [
      {
        name: 'initialState',
        type: 'any',
        description: 'The initial value of the state',
      },
    ],
    returns: [
      {
        name: 'state',
        type: 'any',
        description: 'The current value of the state variable.',
      },
      {
        name: 'setState',
        type: 'function',
        description: 'A function that updates the state and triggers a re-render.',
      },
    ],
    useCases: [
      'Preserving data across re-renders (ex: form input).',
      'Conditional rendering components based on the state value.',
      'Toggling UI Components (ex: modals & menus).',
      'Tracking counters or timers.',
      'Storing fetched data from APIs.',
    ],
    exampleCode: `const [activeIndex, setActiveIndex] = useState(0);`,
    explanation: `The useState hook is used to add state to components. It returns the 
      current state and a function to update the state. Updating the state causes the 
      component to re-render.`,
    link: 'https://react.dev/reference/react/useState',
  },
  {
    name: 'useEffect',
    description: 'Allows you to synchronize a component with external systems.',
    syntax: 'useEffect(setup, dependencies?)',
    parameters: [
      {
        name: 'setup',
        type: 'function',
        description: `Contains the Effect's logic. It may optionally return a cleanup function. 
          The cleanup function is used to remove or undo effects that are no longer needed, 
          preventing memory leaks. Cleanup functions may be used for actions, such as: 
          canceling fetch requests, clearing timeouts or intervals, removing event listeners, and closing WebSocket connections.`,
      },
      {
        name: 'dependencies',
        type: 'array - optional',
        description: 'An array of values that the effect depends on. The effect will re-run if any dependencies are updated.',
      },
    ],
    returns: [
      {
        name: 'cleanup function - optional',
        type: 'function or undefined',
        description: 'If a cleanup function is returned, React will run it before the effect runs again or before the component is unmounted.',
      },
    ],
    useCases: [
      'Adding and removing event listeners.',
      'Synchronizing with localStorage',
      'Connecting to browser APIs, third party libraries, or web sockets.',
      'Setting up timeouts or intervals',
    ],
    exampleCode: 
      `
      useEffect(() => {
        const handleResize = () => {
          console.log('window has been re-sized to ', window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [])
      `, 
    explanation: `The useEffect hook runs the effect on the component's initial render. 
      If a dependency array is provided, React will re-run the effect every time a dependency is updated. 
      If the dependency array is empty, your effect will not re-run, so the effect will only run on the initial render. 
      If a dependency array is not provided, your effect will re-run every time your component re-renders.`,
    link: 'https://react.dev/reference/react/useEffect',
  },
  {
    name: 'useRef',
    description: 'Allows you to reference a value that persists across renders.',
    syntax: 'const ref = useRef(initialValue)',
    parameters: [
      {
        name: 'initialValue',
        type: 'any',
        description: "The initial value of the ref's current property.",
      },
    ],
    returns: [
      {
        name: 'ref',
        type: 'object',
        description:`'An object that consists of the current property. Current is initially 
        set as the initialValue and can be updated or re-assigned without re-rendering the component.`,
      },
    ],
    useCases: [
      'Accessing and interacting with DOM elements.',
      'Storing mutable (can be changed) values that persist across renders.',
      'Interacting with third-party libraries',
      'Storing timeout/interval IDs.'
    ],
    exampleCode: 
      `
      const inputRef = useRef(null);
      const handleClick = () => {
        inputRef.current.focus();
      }

      return (
        <>
          <input ref={inputRef} />
          <button onClick={handleClick}>Focus</button>
        </>
      )
      `, 
    explanation: `Refs can store information between re-renders. Updating 
      your ref value will not cause your component to re-render, which means
      they should not be used for displaying something on the screen.`,
    link: 'https://react.dev/reference/react/useRef',
  },
  {
    name: 'useContext',
    description: 'Allows you to read and subscribe to context ',
    syntax: 'const value = useContext(SomeContext)',
    parameters: [
      {
        name: 'SomeContext',
        type: 'React.Context',
        description: `The context that was created with createContext. 
        This is the information that your components can read from.`,
      },
    ],
    returns: [
      {
        name: 'value',
        type: 'any',
        description:`The Context value, which is provided by the nearest Provider 
        above the component that calls it, so it only searches upwards. If no Provider is found, 
        the returned value will be the default value that was passed into the createContext.`,
      },
    ],
    useCases: [
      'Sharing global state without using prop drilling',
      'Managing themes (light/dark), user authentication, or localization (supporting multiple languages)',
    ],
    exampleCode: 
      `
      // Context.jsx
      const ThemeContext = React.createContext('light');

      // App.jsx
      <ThemeContext.Provider value='dark'>
        <ChildComponent />
      </ThemeContext.Provider>

      // ChildComponent.jsx
      const theme = useContext(ThemeContext);
      console.log(theme) // 'dark'
      `, 
    explanation: `The useContext hook lets you pass state down to components without prop 
      drilling to each individual component. You can update context by declaring a state variable
      in the parent component and passing the state down as the context value to the provider. Context 
      is created with a default value, which will be used for cases where no providers are found.`,
    link: 'https://react.dev/reference/react/useContext',
  },
  {
    name: 'useReducer',
    description: 'Allows for complex and custom state logic.',
    syntax: 'const [state, dispatch] = useReducer(reducer, initialArg, init?)',
    parameters: [
      {
        name: 'reducer',
        type: 'function',
        description: `The reducer function determines how the state updates. It receives the
        current state and an action as arguments, and then returns the updated state.`,
      },
      {
        name: 'initialArg',
        type: 'any',
        description: `This is the initial state of the reducer.`,
      },
      {
        name: 'init',
        type: 'function - optional',
        description: `If the initializer function is provided, it sets the initial state to init(initialArg).`,
      },
    ],
    returns: [
      {
        name: '[state, dispatch]',
        type: 'array',
        description:`Returns an array containing the current state and a dispatch function.
        On the first render, the state is set to init(initialArg) if init is provided, or to 
        initialArg if not. The dispatch function updates the state and re-renders the component.`,
      },
    ],
    useCases: [
      'Managing complex state logic (arrays, objects, or multiple fields).',
      'Replacing multiple related useStates (recommended when managing 4 or more useStates).',
      `Managing state values that depend on each other 
      (for example: if isLoading, data, and error all change together).`,
      'Shared State logic (using your reducer to update states in multiple components).',
    ],
    exampleCode: 
      `
      import { useReducer } from 'react';

      const initialState = { pText: '', spanText: '' };

      function reducer(state, action) {
        switch (action.type) {
          case 'UPDATE_TEXT': {
            const { text1, text2 } = action.payload;
            return {
              ...state,
              pText: text1,
              spanText: text2,
            }
          }
          default:
            return state;
        }
      }

      function myComponent() {
        const [state, dispatch] = useReducer(reducer, initialState);

        function updateText(text1, text2) {
          dispatch({
            type: 'UPDATE_TEXT',
            payload: { text1, text2 },
          });
        }

        updateText('Hello', 'There');
      }  
      `,
    explanation: `The useReducer hook is an alternative to useState for managing more complex state. 
    Instead of updating state directly, you dispatch an action to a reducer function that returns the updated state
    and causes your component to re-render. 

    The conventional way to write a reducer function is as a switch statement. Actions can consist of anything, 
    but conventionally it contains a 'type' field. The reducer then matches the 'type' and returns the updated state.`,
    link: 'https://react.dev/reference/react/useReducer',
  },
  {
    name: 'useMemo',
    description: 'Caches the result of a calculation.',
    syntax: 'const cachedValue = useMemo(calculateValue, dependencies)',
    parameters: [
      {
        name: 'calculateValue',
        type: 'function',
        description: `A function that returns the value you want to cache. This function will
        run on the initial render, and will only re-run if a dependency gets updated.`,
      },
      {
        name: 'dependencies',
        type: 'array',
        description: `Your dependencies will be the reactive values used in the 
        calculateValue function. Dependencies are used to update
        the value stored from the calculateValue function.`,
      },
    ],
    returns: [
      {
        name: 'cachedValue',
        type: 'any',
        description:`The result from the calculateValue function. The cached value is
        updated anytime a dependency changes.`,
      },
    ],
    useCases: [
      'Caching expensive or heavy calculations in order to improve performance.',
      "Avoiding components re-rendering when the component's props have not been updated.",
      'Preventing an Effect from running too much.',
      'Filtering/sorting large data sets, such as a large list.',
    ],
    exampleCode: 
      `
      const result = useMemo(() => {
        return performCalculation(input1, input2);
      }, [input1, input2]);
      // Result will only recalculate if input1 or input2 change
      `,
    explanation: `The useMemo hook is used to optimize performance by caching the result
    of a function. It accepts a calculation function - which takes no arguments - and a 
    dependency array. If no dependencies get updated between renders, the previous cached
    result will be returned without re-running the calculation function. If a dependency 
    array is not added, the useMemo will run on every re-render, so a dependency array should
    always be added to properly use useMemo.`,
    link: 'https://react.dev/reference/react/useMemo',
  },
];

export default HookData;