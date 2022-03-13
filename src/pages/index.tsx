import mockServiceWorker from 'mocks';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

if (process.env.MOCK_SERVICE_WORKER === '1') {
  mockServiceWorker();
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col flex-1 items-center justify-center min-h-screen py-16'>
        <h1 className='m-0 text-6xl leading-tight text-center'>
          Welcome to{' '}
          <a
            href='https://nextjs.org'
            className='text-blue-500 no-underline hover:underline focus:underline active:underline'
          >
            Next.js!
          </a>
        </h1>

        <p className='my-16 text-2xl leading-6 text-center'>
          Get started by editing{' '}
          <code className='bg-slate-50 p-3 text-lg font-mono rounded-md'>
            pages/index.tsx
          </code>
        </p>

        <div className='flex items-center justify-center flex-wrap max-w-screen-md'>
          <a
            href='https://nextjs.org/docs'
            className='m-4 p-6 text-left text-inherit no-underline border border-slate-100 rounded-lg max-w-xs transition-color duration-150 ease-in-out hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 active:text-blue-500 active:border-blue-500'
          >
            <h2 className='m-0 mb-4 text-2xl'>Documentation &rarr;</h2>
            <p className='m-0 text-lg leading-normal'>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href='https://nextjs.org/learn'
            className='m-4 p-6 text-left text-inherit no-underline border border-slate-100 rounded-lg max-w-xs transition-color duration-150 ease-in-out hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 active:text-blue-500 active:border-blue-500'
          >
            <h2 className='m-0 mb-4 text-2xl'>Learn &rarr;</h2>
            <p className='m-0 text-lg leading-normal'>
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className='m-4 p-6 text-left text-inherit no-underline border border-slate-100 rounded-lg max-w-xs transition-color duration-150 ease-in-out hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 active:text-blue-500 active:border-blue-500'
          >
            <h2 className='m-0 mb-4 text-2xl'>Examples &rarr;</h2>
            <p className='m-0 text-lg leading-normal'>
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className='m-4 p-6 text-left text-inherit no-underline border border-slate-100 rounded-lg max-w-xs transition-color duration-150 ease-in-out hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 active:text-blue-500 active:border-blue-500'
          >
            <h2 className='m-0 mb-4 text-2xl'>Deploy &rarr;</h2>
            <p className='m-0 text-lg leading-normal'>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className='flex flex-1 py-8 items-center justify-center border-t-[1px] border-gray-200'>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-grow items-center justify-center'
        >
          Powered by{' '}
          <span className='h-4 ml-2'>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
