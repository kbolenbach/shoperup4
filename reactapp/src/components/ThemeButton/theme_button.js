import { useContext } from 'react';
import './styles.scss';
import { ThemeContext } from '../../context/theme-context';


export const ThemeButton = () => {

    const { toggleTheme } = useContext(ThemeContext);

    const handleChangetheme = () => {
        toggleTheme();
    }
    return (
        <button onClick={handleChangetheme}>
            Change theme
        </button>
    )
}