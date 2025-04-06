import React from "react";
import { titles } from "@/lib/data";
import { Trophy } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

export default function TitlesSection() {
  return (
    <section
      id="titles"
      className="py-12 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🏆 Títulos Oficiales
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {titles.map((award, index) => (
            <MotionWrapper key={award.name + award.date} delay={index * 0.1}>
              <GlassCard className="group overflow-hidden dark:border-blue-500/10 h-full flex flex-col">
                <div className="flex items-center mb-2">
                  <motion.div
                    whileHover={{ rotate: 20 }}
                    transition={{ type: "spring", stiffness: 500 }}
                    className="flex items-center justify-center bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full p-1.5 mr-2"
                  >
                    <Trophy className="h-4 w-4 text-white" />
                  </motion.div>

                  {/* Título con animación de hover */}
                  <h3 className="font-medium">
                    {award.link ? (
                      <a
                        href={award.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground group-hover:text-blue-500 transition-colors duration-300 hover:underline"
                      >
                        {award.name}
                      </a>
                    ) : (
                      award.name
                    )}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground mb-1 pl-8">
                  🏢 {award.issuer}
                </p>
                <div className="flex flex-col space-y-2 mt-auto">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded-md">
                      📅 {award.date}
                    </span>
                  </div>
                  <motion.span
                    className="text-xs text-muted-foreground/80 bg-background/50 px-2 py-1 rounded-md w-fit"
                    whileHover={{ scale: 1.05 }}
                  >
                    {award.type === "International" ? "🌎 " : "🇮🇳 "}
                    {award.type}
                  </motion.span>
                </div>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}