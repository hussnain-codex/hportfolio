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
      </div>
    </main>
  );
}
