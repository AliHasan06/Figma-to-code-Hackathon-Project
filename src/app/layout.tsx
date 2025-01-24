import './styles/index.css';
 // Just import the CSS without using styles
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { store } from './services/redux/store/store';

export const metadata = {
  title: 'Hecto Furniture ali',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Metadata is handled through metadata export */}
      </head>
      <body className="theme-light">
        <Provider store={store}>
          <ThemeProvider defaultTheme="light" attribute="class">
            <div className="main-layout">
              {children}
            </div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
