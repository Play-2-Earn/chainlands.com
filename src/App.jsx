import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNetworkWired,
  faMap,
  faShieldAlt,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const nodePulse = keyframes`
  0% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 0.3; transform: scale(1); }
`;

const gridFlow = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
`;

const Container = styled.div`
  min-height: 100vh;
  background: #0a0c1b;
  color: #00f3ff;
  font-family: "Space Mono", monospace;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background-image: linear-gradient(#00f3ff33 1px, transparent 1px),
      linear-gradient(90deg, #00f3ff33 1px, transparent 1px);
    background-size: 30px 30px;
    animation: ${gridFlow} 40s linear infinite;
    opacity: 0.3;
  }
`;

const Header = styled(motion.h1)`
  font-size: 4.5rem;
  text-align: center;
  margin: 3rem 0;
  text-shadow: 0 0 20px #00f3ff33;
  position: relative;

  &::after {
    content: "chainlands.com";
    position: absolute;
    top: 0;
    left: 0;
    color: #00f3ff11;
    z-index: -1;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Node = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  background: #00f3ff;
  border-radius: 50%;
  animation: ${nodePulse} 2s infinite;
  box-shadow: 0 0 20px #00f3ff;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto;
  position: relative;
  z-index: 1;
`;

const TerritoryCard = styled(motion.div)`
  background: #0a0c1b;
  padding: 2rem;
  border: 1px solid #00f3ff33;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, #00f3ff33, transparent);
    transform: rotate(45deg);
  }
`;

const CtaButton = styled(motion.a)`
  background: linear-gradient(45deg, #00f3ff, #7b61ff);
  color: #0a0c1b;
  padding: 1.2rem 2.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  transition: 0.3s all;

  &:hover {
    box-shadow: 0 0 30px #00f3ff33;
  }
`;

function App() {
  return (
    <Container>
      {/* Network nodes */}
      <Node style={{ top: "20%", left: "15%" }} />
      <Node style={{ top: "40%", right: "25%", animationDelay: "0.5s" }} />
      <Node style={{ bottom: "30%", left: "35%", animationDelay: "1s" }} />

      <Header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        chainlands.com
      </Header>

      <p
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          maxWidth: "800px",
          margin: "0 auto 3rem",
          lineHeight: "1.6",
          opacity: 0.9,
        }}
      >
        Decentralized territories in the blockchain metaverse
      </p>

      <Grid>
        <TerritoryCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <FontAwesomeIcon icon={faNetworkWired} size="2x" />
          <h3>Network States</h3>
          <p>chainlands.com's sovereign digital territories</p>
        </TerritoryCard>

        <TerritoryCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <FontAwesomeIcon icon={faMap} size="2x" />
          <h3>Land Governance</h3>
          <p>DAO-powered territory management</p>
        </TerritoryCard>

        <TerritoryCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <FontAwesomeIcon icon={faShieldAlt} size="2x" />
          <h3>Secure Protocols</h3>
          <p>chainlands.com's defense matrix</p>
        </TerritoryCard>
      </Grid>

      <div style={{ textAlign: "center", margin: "3rem 0" }}>
        <CtaButton
          href="https://www.b1tcoin.ai/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faRocket} />
          Explore Territories
        </CtaButton>
      </div>

      <div
        style={{
          textAlign: "center",
          opacity: 0.7,
          marginTop: "3rem",
          padding: "2rem",
          borderTop: "1px solid #00f3ff33",
        }}
      >
        <p>⚡ chainlands.com - The Future of Decentralized Governance</p>
      </div>
    </Container>
  );
}

export default App;
