import Head from "next/head";

export default function Layout({ children }: { children: JSX.Element }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>NODE DESTROYER</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <main className="flex w-full flex-1 flex-col items-start justify-center px-4 text-center gap-5 max-w-[80ch]">
                {children}
            </main>

            <footer className="flex p-4 w-full items-center justify-center">
                by&nbsp;<a href="twitter.com/futurepaul">@futurepaul</a>, powered by&nbsp;<a href="https://github.com/lightninglabs/lnc-web">lnc-web</a>
            </footer>
        </div >
    )
}