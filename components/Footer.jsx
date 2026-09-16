"use client";

import useJsonData from "@/components/useJsonData";

export default function Footer() {
  const { data } = useJsonData("/data/site.json");

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <strong>{data?.name || "Hussnain Naeem"}</strong>
          <span className="footer-role">{data?.role || "Full Stack Developer"}</span>
        </div>
        <div className="footer-links">
          <a href={data?.socials?.github || "#"} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={data?.socials?.linkedin || "#"}>LinkedIn</a>
          <a href={"mailto:" + (data?.socials?.email || "")}>Email</a>
        </div>
      </div>
      <p className="footer-signature" aria-hidden="true">{data?.name || "Hussnain Naeem"}</p>
      <p className="footer-bottom">
        © {new Date().getFullYear()} {data?.name || "Hussnain Naeem"}. All rights reserved.
      </p>
    </footer>
  );
}
