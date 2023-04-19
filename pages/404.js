import Head from 'next/head'

export default function Custom404() {
    return (
        <div>
            <Head>
                <title>Page Not Found | TPO Portal</title>
                <meta name="description" content="Sorry, the page you're looking for could not be found." />
            </Head>
            <div>
                <h1>404 - Page Not Found</h1>
                <p>Sorry, the page you're looking for could not be found.</p>
            </div>
        </div>
    )
}