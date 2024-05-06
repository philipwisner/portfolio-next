import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Philip Wisner - Photography",
};

export default function Photography() {
  return (
    <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9 content" id="content">
      <Header name="Photography" />
    </div>
  );
}
