import Link from 'next/link';

import InstallButton from './components/InstallButton';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '50px',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Link href="/compiler-test">compiler test</Link>
      <Link href="/mouse-event-order-test">mouse event order test</Link>
      <Link href="/mouse-event-test">mouse event test</Link>
      <Link href="/modal-xstate">modal xstate</Link>
      <Link href="/next-modal/screen">next modal</Link>
      <div>
        <InstallButton />
      </div>
    </div>
  );
}
