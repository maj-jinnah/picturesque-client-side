import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='my-8 mx-8'>
                <div className='mb-8'>
                    <h1 className='text-2xl font-bold'>Question 1:  Difference between SQL and NoSQL?</h1>
                    <p><span className='font-bold'> Answer:</span> Structured Query language "SQL" pronounced as “S-Q-L” or sometimes as "See-Quel" is the standard language for dealing with Relational Databases. A relational database defines relationships in the form of tables. SQL programming can be effectively used to insert, search, update, delete database records. That doesn't mean SQL cannot do things beyond that. It can do a lot of things including, but not limited to, optimizing and maintenance of databases. <br />
                        NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps. NoSQL database stands for “Not Only SQL” or “Not SQL.” Though a better term would NoREL NoSQL caught on. Traditional RDBMS uses SQL syntax to store and retrieve data for further insights. Instead, a NoSQL database system encompasses a wide range of database technologies that can store structured, semi-structured, unstructured and polymorphic data.

                    </p>
                </div>
                <div className='mb-8'>
                    <h1 className='text-2xl font-bold'>question 2: What is JWT, and how does it work?</h1>
                    <p><span className='font-bold'> Answer:</span> JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.<br/>
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots ".", and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                    </p>
                    <p>Once decoded, you will get two JSON strings:</p>
                    <p>1. The header and the payload.</p>
                    <p>2. The signature.</p>
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