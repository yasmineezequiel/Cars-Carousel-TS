//  viewportContext: stores the state for the current viewport size and the logic, calculating it.
// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
export const ViewportContext = React.createContext({} as ViewportProps);

interface ViewportProps {
    width: number;
    height: number;
}

export const ViewportProvider: React.FC = ({ children }) => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <ViewportContext.Provider value={{ width, height }}>
            {children}
        </ViewportContext.Provider>
    );
};
