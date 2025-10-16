import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
  modal?: ReactNode;
}

export default function Layout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="ko">
      <head>
        <title>Next Modal</title>
      </head>
      <body>
        <main>{children}</main>
        {/* Parallel Routes를 통해 렌더링될 추가 UI 영역 */}
        {modal}
      </body>
    </html>
  );
}
