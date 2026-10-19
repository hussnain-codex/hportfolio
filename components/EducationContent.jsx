import Link from "next/link";

export default function EducationContent() {
  return (
    <main id="main">
      <div className="page-header">
        <Link href="/#journey" className="back-link">
          <span aria-hidden="true">←</span> Back to Home
        </Link>
        <p className="eyebrow">Education</p>
        <h1>Academic background</h1>
        <p>
          A solid foundation for creative and technical growth, built through
          structured study and continuous practical work.
        </p>
      </div>

      <div className="edu-table-wrap">
        <table className="edu-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Institute</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hussnain Naeem</td>
              <td>Syed School System</td>
              <td>980/1100</td>
            </tr>
            <tr>
              <td>Hussnain Naeem</td>
              <td>Punjab Group of Colleges</td>
              <td>600/1000</td>
            </tr>
            <tr>
              <td>Hussnain Naeem</td>
              <td>University of Central Punjab (BSCS)</td>
              <td>2.5/4.0 GPA</td>
            </tr>
          </tbody>
        </table>

        <div className="projects-skills">
          <h3>Python &amp; AI Experience</h3>
          <p>
            Hands-on Python training focused on building applications with large
            language models, completed through a series of practical projects.
          </p>
          <ul>
            <li>
              <strong>Multi-Provider CLI Chatbot:</strong> a Python command-line
              chatbot working with multiple LLM providers through one interface.
            </li>
            <li>
              <strong>Smart Data Extractor:</strong> extracting structured data
              from text and images using LLMs.
            </li>
            <li>
              <strong>Chat with Your PDFs:</strong> a basic retrieval-augmented
              generation (RAG) app for asking questions about PDF documents.
            </li>
            <li>
              <strong>RAG You Can Trust:</strong> adding evaluation and
              guardrails to a RAG pipeline to measure and improve answer quality.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
