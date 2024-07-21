import { motion } from "framer-motion";
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import "../styles/Card.css";

const Card = ({ data }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 1.05 }}
      className="card-container"
    >
      <FaRegFileAlt />
      <p className="content">{data.desc}</p>
      <div className="card-footer">
        <div className="card-footer-download">
          <h5>{data.fileSize}</h5>
          <span className="download-button">
            {data.close ? (
              <IoClose size="0.8em" />
            ) : (
              <MdOutlineFileDownload size="0.8em" />
            )}
          </span>
        </div>
        <div className="card-tag" style={{ background: data.tag.tagColor }}>
          Download Now
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
