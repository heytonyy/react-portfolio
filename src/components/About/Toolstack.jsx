import { Col, Row } from "react-bootstrap";
import { SiLinux, SiVisualstudiocode, SiPostman } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaAws } from "react-icons/fa";
import { motion } from "framer-motion";

function Toolstack() {
  const toolStrings = [
    "SiLinux", "SiVisualstudiocode", "SiPostman", "GrMysql", "FaAws"
  ];

  const toolIcon = (name) => {
    switch (name) {
      case "SiLinux":
        return <SiLinux />;
      case "SiVisualstudiocode":
        return <SiVisualstudiocode />;
      case "SiPostman":
        return <SiPostman />;
      case "GrMysql":
        return <GrMysql />;
      case "FaAws":
        return <FaAws />;
      default:
        return -1;
    }
  }

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        toolStrings.map((tool, i) => {
          const randomHover = Math.random() > 0.5 ? "scale" : "rounded";
          const randomRotate = Math.random() > 0.5 ? 90 : -90;
          return (
            <Col key={i} xs={4} md={3} lg={2}>
              <motion.div
                className="tech-icons"
                whileHover={{ 
                  scale: randomHover === "scale" ? 1.2 : 1,
                  borderRadius: randomHover === "rounded" ? "100%" : null
                }}
                whileTap={{ 
                  scale: 0.8, 
                  rotate: randomRotate
                }}
              >
                {toolIcon(tool)}
              </motion.div>
            </Col>
          )
        })
      }
    </Row>
  );
}

export default Toolstack;