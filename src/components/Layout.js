import Link from 'next/link';

const Layout = ({children}) => {
    return (
        <>
            <header>
                <nav>
                    <Link href='/'><a>vantures</a></Link>
                    <Link href='/rental/new'>
                        <a>Add VAN</a>
                    </Link>
                    <button>Sign Up</button>
                    <button>Login</button>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
}

export default Layout;