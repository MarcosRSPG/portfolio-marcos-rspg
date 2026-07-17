import React from "react";
import { aiPhilosophy } from "@/lib/data";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { Shield, RefreshCw, Layers, Zap, Wrench, Database } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function AIPhilosophySection() {
  return (
    <section
      id="ai-philosophy"
      className="py-12 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🤖 {aiPhilosophy.title}
          </h2>
        </MotionWrapper>

        <GlassCard className="p-6 mb-6">
          <p className="text-muted-foreground leading-relaxed text-center md:text-left">
            {aiPhilosophy.statement}
          </p>
        </GlassCard>

        <motion.div
          className="space-y-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {aiPhilosophy.points.map((point, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {index === 0 ? (
                      <Layers className="w-5 h-5 text-blue-500" />
                    ) : index === 1 ? (
                      <RefreshCw className="w-5 h-5 text-amber-500" />
                    ) : index === 2 ? (
                      <Shield className="w-5 h-5 text-green-500" />
                    ) : index === 3 ? (
                      <Zap className="w-5 h-5 text-purple-500" />
                    ) : index === 4 ? (
                      <Database className="w-5 h-5 text-cyan-500" />
                    ) : (
                      <Wrench className="w-5 h-5 text-orange-500" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{point}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
