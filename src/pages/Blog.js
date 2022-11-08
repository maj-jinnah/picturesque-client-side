import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='my-8 mx-8'>
                <div className='mb-8'>
                    <h1 className='text-2xl font-bold'>Question 1:  what is cors?</h1>
                    <p>Answer: CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API. In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.</p>
                </div>
                <div className='mb-8'>
                    <h1 className='text-2xl font-bold'>question 2: Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <p>Answer: Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps. When you build a client-side app with JavaScript or any of its frameworks, for instance, Google Firebase can turn this into a serverless app in no time. It also removes the need to manage databases yourself, as it does that for you. Therefore, implementing Firebase means plugging a ready-made backend into your client code to make it dynamic. Ultimately, it eliminates the need to write backend code from scratch and gives you a fully functional one instead. Security-wise, it also has explicitly built-in security rules that make it a trusted data and server handler. Plus, you get a protected backend when you use these rules. There are various ways through which we can achieve authentication. Such as,</p>
                    <p>1. Cookie-Based authentication</p>
                    <p>2. Token-Based authentication</p>
                    <p>3. Third party access(OAuth, API-token)</p>
                    <p>4. OpenId</p>
                    <p>5. SAML</p>
                </div>
                <div className='mb-8'>
                    <h1 className='text-2xl font-bold'>Question 3: How does the private route work?</h1>
                    <p>Answer: The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login. The private route component is similar to the public route, the only change is the redirect URL and authenticates condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
                <div className='mb-8'>
                    <h1 className='text-2xl font-bold'>Question 4: What is Node? How does Node work?</h1>
                    <p>Answer: Node.js is an open-source and cross-platform runtime environment built on Chrome's V8 JavaScript engine for executing JavaScript code outside of a browser. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. You need to recollect that NodeJS isn't a framework, and it's not a programing language. It provides an event-driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;