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
          canceling fetch requests, clearing timeouts or intervals, removing event listeners, and closing WebSocket conncetions.`,
      },
      {
        name: 'dependencies',
        type: 'array - optional',
        description: 'An array of values that the effect depends on. The effect will re-run if any dependencies are updated.',
      },
    ],
    returns: [
      {
        name: 'Cleanup function - optional',
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
      `useEffect(() => {
        const handleResize = () => {
          console.log('window has been re-sized to ', window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [])`, 
    explanation: `The useEffect hook runs the effect on the component's initial render. 
      If a dependency array is provided, React will re-run the effect every time a dependency is updated. 
      If the dependency array is empty, your effect will not re-run, so the effect will only run on the initial render. 
      If a dependency array is not provided, your effect will re-run every time your component re-renders.`,
    link: 'https://react.dev/reference/react/useEffect',
  },
];

export default HookData;