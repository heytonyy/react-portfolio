import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiMongodb, DiPython, DiGit, DiJava } from "react-icons/di";
import { SiNextdotjs, SiSpring, SiFlask } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { motion } from "framer-motion";

function TechStack() {
  const techStrings = [
    "DiJavascript1", "DiReact", "DiMongodb", "DiPython", "DiGit", "DiJava",
    "SiNextdotjs", "SiSpring", "SiFlask", "AiOutlineConsoleSql"
  ];

  const techIcon = (name) => {
    switch (name) {
      case "DiJavascript1":
        return <DiJavascript1 />;
      case "DiReact":
        return <DiReact />;
      case "DiMongodb":
        return <DiMongodb />;
      case "DiPython":
        return <DiPython />;
      case "DiGit":
        return <DiGit />;
      case "DiJava":
        return <DiJava />;
      case "SiNextdotjs":
        return <SiNextdotjs />;
      case "SiSpring":
        return <SiSpring />;
      case "SiFlask":
        return <SiFlask />;
      case "AiOutlineConsoleSql":
        return <AiOutlineConsoleSql />;
      default:
        return -1;
    }
  }

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        techStrings.map((tech, i) => {
          const randomHover = Math.random() > 0.5 ? "scale" : "rounded";
          const randomRotate = Math.random() > 0.5 ? 90 : -90;
          return (
            <Col key={i} xs={4} md={3} lg={2}>
              <motion.div 
                className="tech-icons"
                whileHover={{ 
                  scale: randomHover === "scale" ? 1.2 : 1,
                  borderRadius: randomHover === "rounded" ? "100%" : "10px"
                }}
                whileTap={{ 
                  scale: 0.8, 
                  rotate: randomRotate
                }}
              >
                {techIcon(tech)}
              </motion.div>
            </Col>
          )
        })
      }
    </Row>
  );
}

export default TechStack;