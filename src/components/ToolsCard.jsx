import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
const ToolsCard = ({
  tools = [
    {
    title: "Merge PDF",
    description: "Combine multiple PDF files into a single document",
    icon: "src/assets/merge.svg",
    link: "/merge-pdf",
    new: true,
  },
  {
    title: "Split PDF",
    description: "Divide a single PDF into multiple separate files",
    icon: "src/assets/split.svg",
    link: "/split-pdf",
    new: true,
  },
  {
    title: "Compress PDF",
    description: "Reduce the file size of your PDF documents.",
    icon: "src/assets/compress.svg",
    link: "/compress-pdf",
    new: true,
  },
  {
    title: "PDF to Word",
    description: "Transform PDF file into editable word document",
    icon: "src/assets/pdftoword.svg",
    link: "/pdf-to-word",
    new: true,
  },
  {
    title: "PDF to Excel",
    description: "Transform PDF file into editable excel file",
    icon: "src/assets/pdftoexcel.svg",
    link: "/pdf-to-excel",
    new: true,
  },
  {
    title: "PDF to Powerpoint",
    description: "Transform PDF file into editable PPT file",
    icon: "src/assets/pdftopowerpoint.svg",
    link: "/pdf-to-powerpoint",
    new: true,
  },
  {
    title: "Word to PDF",
    description: "Transform word document to PDF file",
    icon: "src/assets/wordtopdf.svg",
    link: "/word-to-pdf",
    new: true,
  },
  {
    title: "Powerpoint to PDF",
    description: "Transform PDF file into image",
    icon: "src/assets/powerpointtopdf.svg",
    link: "/powerpoint-to-pdf",
    new: true,
  },
  {
    title: "Excel to PDF",
    description: "Transform PDF file into image",
    icon: "src/assets/exceltopdf.svg",
    link: "/excel-to-pdf",
    new: true,
  },
  {
    title: "More tools coming soon",
    description: "",
    icon: "", // You can leave it empty or use a placeholder
    link: "#",
    new: false,
  }
  ],
  containerClasses = "flex flex-col md:flex-row",
  mainContainerClasses = "flex flex-col md:flex-row",
  itemClasses = "p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow",
  iconClasses = "w-[32px] h-[32px]",
  titleClasses = "text-lg font-semibold mb-2",
  contentClasses = "text-sm text-gray-600",
  badgeClasses = "absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded",
}) => {
  return (
    <div className={` ${mainContainerClasses}`}>
      <div className={` ${containerClasses}`}>
        {tools.map((tool) => (
          <div className={` ${itemClasses}`} key={tool.title}>
            {tool.new && <div className={`${badgeClasses}`}>New!</div>}
            <Link to={tool.link} title={tool.title} className='block'>
              <img src={tool.icon} alt={tool.title} className={`${iconClasses}`} />
              <h3 className={`${titleClasses}`}>{tool.title}</h3>
              <div className={` ${contentClasses}`}>
                <p>{tool.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsCard;
