"use client";

import AlertDot from "../components/AlertDot";
import BrandLogo from "@/components/BrandLogo";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-[50px] flex items-center"
    >
    </motion.header>
  );
}

export default Header;
