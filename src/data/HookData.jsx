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
];

export default HookData;