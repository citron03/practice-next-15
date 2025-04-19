const htmlString = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>시멘틱 HTML 태그 예제 | 웹 접근성 가이드</title>

    <!-- SEO -->
    <meta name="description" content="시멘틱 HTML 태그를 엄격하게 사용한 예제와 해설. 웹 접근성과 SEO를 고려한 마크업 가이드입니다.">
    <meta name="author" content="홍길동">
    <meta name="keywords" content="시멘틱 HTML, 웹 접근성, SEO, Open Graph, HTML5, 마크업 예제">

    <!-- Open Graph -->
    <meta property="og:type" content="article">
    <meta property="og:title" content="시멘틱 HTML 태그 예제 | 웹 접근성 가이드">
    <meta property="og:description" content="시멘틱 태그를 활용한 고품질 마크업 예제와 설명. 웹 표준을 준수한 접근성 마크업 가이드입니다.">
    <meta property="og:url" content="https://example.com/posts/semantic-html-guide">
    <meta property="og:image" content="https://example.com/assets/semantic-cover.png">
    <meta property="og:site_name" content="홍길동의 웹 기술 블로그">
    <meta property="article:author" content="https://example.com/about">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="시멘틱 HTML 태그 예제 | 웹 접근성 가이드">
    <meta name="twitter:description" content="웹 접근성과 SEO를 고려한 시멘틱 HTML 마크업 실전 예제!">
    <meta name="twitter:image" content="https://example.com/assets/semantic-cover.png">
    </head>

    <body>
    <header>
        <hgroup>
        <h1>웹 접근성과 시멘틱 마크업</h1>
        <h2>HTML 태그, 이제는 의미로 말하세요</h2>
        </hgroup>
        <p><abbr title="HyperText Markup Language">HTML</abbr> 태그를 제대로 쓰는 이유를 알려드립니다.</p>
        <nav>
        <ul>
            <li><a href="/">홈</a></li>
            <li><a href="/blog">블로그</a></li>
            <li><a href="/contact">문의</a></li>
        </ul>
        </nav>
    </header>

    <main>
        <article>
        <header>
            <hgroup>
            <h2>시멘틱 HTML 태그의 힘</h2>
            <h3>단순히 구조를 넘어서 의미까지 담다</h3>
            </hgroup>
            <p>작성일: <time datetime="2025-04-19">2025년 4월 19일</time></p>
        </header>

        <section>
            <h3>예제 코드</h3>
            <pre><code>&lt;article&gt;&lt;h2&gt;시멘틱 HTML&lt;/h2&gt;&lt;/article&gt;</code></pre>
            <p>위 코드는 <mark>의미 있는 콘텐츠 덩어리</mark>를 나타낼 때 사용하는 <code>&lt;article&gt;</code> 태그 예시입니다.</p>
        </section>

        <section>
            <h3>인용과 참고자료</h3>
            <blockquote cite="https://developer.mozilla.org/ko/docs/Web/HTML/Element">
            시멘틱 태그는 HTML 문서의 의미를 명확하게 만들어주는 요소입니다.
            </blockquote>
            <p>출처: <cite><a href="https://developer.mozilla.org/ko/docs/Web/HTML/Element">MDN Web Docs</a></cite></p>
        </section>

        <section>
            <h3>시각적 콘텐츠</h3>
            <figure>
            <img src="/images/semantic-example.png" alt="시멘틱 구조 다이어그램" />
            <figcaption>시멘틱 HTML 구조 다이어그램</figcaption>
            </figure>
        </section>

        <section>
            <h3>자주 묻는 질문</h3>
            <details>
            <summary>시멘틱 태그를 쓰면 퍼포먼스도 좋아지나요?</summary>
            <p>직접적인 렌더링 퍼포먼스 향상은 없지만, SEO나 접근성 측면에서 간접적인 영향은 큽니다.</p>
            </details>
        </section>

        <footer>
            <p>태그 정리: <mark>&lt;article&gt;</mark>, <mark>&lt;section&gt;</mark>, <mark>&lt;hgroup&gt;</mark>, <mark>&lt;time&gt;</mark>, <mark>&lt;figure&gt;</mark>, <mark>&lt;blockquote&gt;</mark>, <mark>&lt;abbr&gt;</mark>, <mark>&lt;details&gt;</mark> 등</p>
            <p>작성자: <strong>홍길동</strong>, <a href="mailto:gildong@example.com">gildong@example.com</a></p>
        </footer>
        </article>
    </main>

    <aside>
        <h2>읽어볼만한 글</h2>
        <ul>
        <li><a href="/posts/html5-guide">HTML5 태그 완전정복</a></li>
        <li><a href="/posts/aria-guide">스크린 리더를 위한 ARIA 속성</a></li>
        </ul>
    </aside>

    <footer>
        <small>&copy; 2025 홍길동의 웹 기술 블로그. All rights reserved.</small>
    </footer>
    </body>
    </html>
`;

function Page() {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}

export default Page;
