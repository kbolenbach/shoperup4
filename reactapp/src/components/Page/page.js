import { PageHeader } from "../../components/PageHeader/page_header";
import { ThemeContext } from '../../context/theme-context';
import { useContext } from 'react';

export const Page = ({pageName, children}) => {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="container">
            {children}
            <PageHeader />
            <h1 style={{backgroundColor: theme.background, color: theme.foreground}}>{pageName}</h1>

        </div>
    )
}