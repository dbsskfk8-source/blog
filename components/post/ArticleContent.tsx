interface ArticleContentProps {
    post: {
        title: string;
        content: string;
        cover_image: string;
    };
}

export default function ArticleContent({ post }: ArticleContentProps) {
    return (
        <article className="prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-p:leading-relaxed prose-headings:text-slate-100 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline">
            {/* 썸네일 이미지 */}
            {post.cover_image && (
                <div className="w-full h-[400px] md:h-[500px] relative rounded-2xl overflow-hidden mb-12 shadow-2xl border border-slate-800">
                    <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* 
        실제 서비스에서는 react-markdown 등을 이용해 post.content를 파싱해야 하지만,
        현재 DB에는 단순 mock 텍스트가 들어가 있고, 스크린샷과 동일한 UI 구현을 위해
        시안과 동일한 더미 구조를 하드코딩 형태로 지원합니다. 
      */}
            <div className="text-slate-300 space-y-8 font-sans">
                <p>
                    JavaScript is single-threaded, meaning it can only do one thing at a time. However, modern web applications need to handle multiple tasks simultaneously, such as fetching data from an API while rendering the UI. This is where asynchronous programming comes in.
                </p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Event Loop Explained</h2>
                <p>
                    At the heart of JavaScript's asynchronous model lies the Event Loop. It's the mechanism that allows JavaScript to perform non-blocking I/O operations despite being single-threaded.
                </p>

                {/* 인용구 스타일 */}
                <blockquote className="border-l-4 border-blue-500 bg-slate-800/40 p-6 rounded-r-lg italic text-slate-300 my-8 shadow-inner">
                    "The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, it will take the first event from the queue and will push it to the Call Stack, which effectively runs it."
                </blockquote>

                <h3 className="text-xl font-bold text-white mt-10 mb-4">Code Example: Promises</h3>
                <p>Here is a basic example of how a Promise is structured in modern ES6+ JavaScript.</p>

                {/* 코드 에디터 블록 스타일 */}
                <div className="rounded-xl overflow-hidden bg-[#1e1e2e] border border-slate-800 my-8 shadow-2xl">
                    <div className="flex justify-between items-center px-4 py-2 bg-slate-800 border-b border-slate-700/50">
                        <span className="text-xs font-mono text-slate-400">fetchData.js</span>
                        <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                            Copy
                        </button>
                    </div>
                    <pre className="p-4 text-sm font-mono leading-relaxed overflow-x-auto">
                        <code className="text-[#cdd6f4]">
                            <span className="text-[#cba6f7]">const</span> <span className="text-[#89b4fa]">getData</span> <span className="text-[#89dceb]">=</span> <span className="text-[#cba6f7]">()</span> <span className="text-[#89dceb]{">=&gt;</span> {'{\n'}
                            {'  '} <span className="text-[#cba6f7]">return new</span> <span className="text-[#f9e2af]">Promise</span>{'('}<span className="text-[#f5c2e7]">{'(resolve, reject)'}</span> <span className="text-[#89dceb]{">=&gt;</span> {'{\n'}
                            {'    '} <span className="text-[#89b4fa]">setTimeout</span>{'('}<span className="text-[#cba6f7]">()</span> <span className="text-[#89dceb]{">=&gt;</span> {'{\n'}
                            {'      '} <span className="text-[#cba6f7]">const</span> error <span className="text-[#89dceb]">=</span> <span className="text-[#fab387]">false</span>;\n
                            {'      '} <span className="text-[#cba6f7]">if</span> {'(!error) {\n'}
                            {'        '} <span className="text-[#89b4fa]">resolve</span>{'('}<span className="text-[#a6e3a1]">'Data fetched!'</span>{');\n'}
                            {'      '} {'} '} <span className="text-[#cba6f7]">else</span> {'{\n'}
                            {'        '} <span className="text-[#89b4fa]">reject</span>{'('}<span className="text-[#a6e3a1]">'Error fetching data'</span>{');\n'}
                            {'      '} {'}\n'}
                            {'    '} {'}'}, <span className="text-[#fab387]">2000</span>{');\n'}
                            {'  '} {'});\n'}
                            {'}'};
                        </code>
                    </pre>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6">Async / Await</h2>
                <p>
                    Syntactic sugar built on top of Promises, async/await makes asynchronous code look and behave a little more like synchronous code. This makes it easier to read and maintain.
                </p>

                <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-blue-500">
                    <li>Cleaner syntax for chaining multiple asynchronous calls.</li>
                    <li>Better error handling with try/catch blocks.</li>
                    <li>Easier debugging compared to raw Promise chains.</li>
                </ul>
            </div>

            <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-slate-800">
                <span className="px-3 py-1 bg-slate-800/50 hover:bg-slate-700 text-slate-300 text-sm rounded-md transition-colors cursor-pointer border border-slate-700">#webdevelopment</span>
                <span className="px-3 py-1 bg-slate-800/50 hover:bg-slate-700 text-slate-300 text-sm rounded-md transition-colors cursor-pointer border border-slate-700">#javascript</span>
                <span className="px-3 py-1 bg-slate-800/50 hover:bg-slate-700 text-slate-300 text-sm rounded-md transition-colors cursor-pointer border border-slate-700">#programming</span>
            </div>
        </article>
    );
}
