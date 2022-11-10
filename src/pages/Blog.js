import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <div className='my-8 mx-8'>
            <Helmet>
                <title>Blogs - Picturesque</title>
            </Helmet>
            <div className='mb-8'>
                <h1 className='text-2xl font-bold'>Question 1:  Difference between SQL and NoSQL?</h1>
                <p><span className='font-bold'> Answer:</span> Structured Query language "SQL" pronounced as “S-Q-L” or sometimes as "See-Quel" is the standard language for dealing with Relational Databases. A relational database defines relationships in the form of tables. SQL programming can be effectively used to insert, search, update, delete database records. That doesn't mean SQL cannot do things beyond that. It can do a lot of things including, but not limited to, optimizing and maintenance of databases. <br/>
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
                <h1 className='text-2xl font-bold'>Question 3: What is the difference between javascript and NodeJS?</h1>
                <p><span className='font-bold'> Answer:</span> NodeJS is a cross-platform and open-source Javascript runtime environment that allows the javascript to be run on the server-side. It is mostly used on the server-side. Nodejs allows Javascript code to run outside the browser. V8 is the Javascript engine inside of node.js that parses and runs Javascript. Nodejs comes with a lot of modules and is primarily used in web development.<br/>
                Javascript is a Scripting language. It can be said that Javascript is the updated version of the ECMA script that uses Chrome's V8 engine written in C++. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. Javascript can only be run in the browsers. It is basically used on the client-side.
                </p>
            </div>
            <div className='mb-8'>
                <h1 className='text-2xl font-bold'>Question 4: How does NodeJS handle multiple requests at the same time?</h1>
                <p><span className='font-bold'> Answer:</span> We know the NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. <br/>
                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself.</p>
            </div>
        </div>
    );
};

export default Blog;