import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | Quantone',
        default: 'Quantone'
    }
};

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-black bg-[#6366f1] font-mono">
                {children}
            </body>
        </html>
    );
}
