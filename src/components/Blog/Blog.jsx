import useTitle from "../../../hooks/useTitle";

const Blog = () => {
    useTitle("Blog")
    return (
        <div>
            <h1 className='my-4 font-bold text-center'>There are some Answers and Querstions</h1>
            <div className="card mt-4 bg-base-100 shadow-xl">

                <div className="card-body items-center text-center">
                    <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is
                        re-issued, provided the refresh token is a valid one requesting permission to access confidential resources</p>
                    <p></p>
                </div>
            </div>
            <div className="card mt-4 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
                    <ul className="list-disc">
                        <li>SQL databases: SQL databases follow a relational data model. Data is organized into tables with predefined schemas, and relationships between tables are established using foreign keys.
                            The schema defines the structure and constraints of the data.</li>
                        <li>NoSQL databases: NoSQL databases employ various data models such as key-value, document, columnar, or graph. They provide flexible schema designs, allowing data to be stored
                            and retrieved without rigid schemas or predefined relationships.</li>
                        <li>SQL databases: SQL databases use the SQL language for querying and manipulating data. SQL provides a standardized syntax for performing complex queries, aggregations, joins,
                            and data manipulation operations. It is powerful and widely supported.</li>
                        <li>NoSQL databases: NoSQL databases often have their own query languages or APIs specific to the chosen data model. The query languages may have varying levels of expressive querying capabilities compared to SQL,
                            but they are tailored to the specific data model and offer simplicity and flexibility.</li>
                        <li>SQL databases: SQL databases excel in scenarios where data integrity, complex querying, and transactions are critical, such as financial systems, e-commerce platforms, and applications with structured data and well-defined relationships.</li>
                        <li>NoSQL databases: NoSQL databases are suitable for use cases that demand high scalability, flexible schema designs, rapid development, and handling large volumes of unstructured or semi-structured data. Examples include real-time analytics, content management systems, IoT applications, and social media platforms.
                        </li>

                    </ul>
                </div>
            </div>
            <div className="card mt-4 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">

                    <h2 className="card-title">What is express js? What is Nest JS?</h2>
                    <p>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.
                        It's a layer built on the top of the Node js that helps manage servers and routes.</p>
                    <p>Nest. js is a server-side Node. js framework that's great for building highly testable and maintainable backend applications.
                        You can create countless types of applications with Node. js; you're only limited by your applications'</p>
                </div>
            </div>
            <div className="card mt-4 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">What is MongoDB aggregate and how does it work?</h2>
                    <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter,
                        sort, group, reshape and modify documents that pass through the pipeline.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;