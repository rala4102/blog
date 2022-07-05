import Head from 'next/head'

type iProps = {
  children: React.ReactNode;
  title?: string;
};

function Layout({ children, title }: iProps) {
  return (
    <>
      <Head>
        <title>head 제목은 여기에</title>
      </Head>
      <div className="container max-w-prose mx-auto p-4">
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
}

export default Layout;