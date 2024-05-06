import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Philip Wisner - Websites",
};

export default function Skills() {
  return (
    <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9 content" id="content">
      <Header name="Websites" />
    </div>
  );
}
