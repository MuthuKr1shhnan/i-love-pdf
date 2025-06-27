import merge from "../assets/merge.svg";
import split from "../assets/split.svg";
import compress from "../assets/compress.svg";
import pdftoword from "../assets/pdftoword.svg";
import pdftoexcel from "../assets/pdftoexcel.svg";
import pdftopowerpoint from "../assets/pdftopowerpoint.svg";
import wordtopdf from "../assets/wordtopdf.svg";
import powerpointtopdf from "../assets/powerpointtopdf.svg";
import exceltopdf from "../assets/exceltopdf.svg";

export const tools = [
  {
    id: 1,
    title: "Merge PDF",
    description: "Combine multiple PDF files into a single document",
    icon: merge,
    link: "/merge-pdf",
    new: true,
  },
  {
    id: 2,
    title: "Split PDF",
    description: "Divide a single PDF into multiple separate files",
    icon: split,
    link: "/split-pdf",
    new: true,
  },
  {
    id: 3,
    title: "Compress PDF",
    description: "Reduce the file size of your PDF documents.",
    icon: compress,
    link: "/compress-pdf",
    new: true,
  },
  {
    id: 4,
    title: "PDF to Word",
    description: "Transform PDF file into editable word document",
    icon: pdftoword,
    link: "/pdf-to-word",
    new: true,
  },
  {
    id: 5,
    title: "PDF to Excel",
    description: "Transform PDF file into editable excel file",
    icon: pdftoexcel,
    link: "/pdf-to-excel",
    new: true,
  },
  {
    id: 6,
    title: "PDF to Powerpoint",
    description: "Transform PDF file into editable PPT file",
    icon: pdftopowerpoint,
    link: "/pdf-to-powerpoint",
    new: true,
  },
  {
    id: 7,
    title: "Word to PDF",
    description: "Transform word document to PDF file",
    icon: wordtopdf,
    link: "/word-to-pdf",
    new: true,
  },
  {
    id: 8,
    title: "Powerpoint to PDF",
    description: "Transform PDF file into image",
    icon: powerpointtopdf,
    link: "/powerpoint-to-pdf",
    new: true,
  },
  {
    id: 9,
    title: "Excel to PDF",
    description: "Transform PDF file into image",
    icon: exceltopdf,
    link: "/excel-to-pdf",
    new: true,
  },
  {
    id: 10,
    title: "More tools coming soon",
    description: "",
    icon: "", 
    link: "#",
    new: false,
  },
];
