import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function BirdRing() {
  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <Link href="/">
            <a className="close-btn">X</a>
          </Link>
        </div>
        <h1>Title</h1>
        <p>This is the first paragraph.</p>
        <p>This is the second paragraph.</p>
        <a href="https://example.com">Link to Example</a>
        <img src="/path/to/image.jpg" alt="Image Description" />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .content {
          background-color: white;
          border: 1px solid gray;
          padding: 20px;
        }

        .header {
          display: flex;
          justify-content: flex-end;
        }

        .close-btn {
          text-decoration: none;
          color: gray;
          font-weight: bold;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};