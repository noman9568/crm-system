import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const Developer = () => {
  return (
    <div className="px-6 py-6 bg-white">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl"
      >
        <Card className="rounded-xl border border-gray-200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Avatar */}
              <motion.div variants={item}>
                <Avatar className="h-24 w-24 border">
                  <AvatarImage src="/avatar.png" />
                  <AvatarFallback>NH</AvatarFallback>
                </Avatar>
              </motion.div>

              {/* Info */}
              <div className="flex-1">
                <motion.h1
                  variants={item}
                  className="text-xl font-semibold text-gray-900"
                >
                  Noman Hussain
                </motion.h1>

                <motion.p
                  variants={item}
                  className="mt-1 text-sm text-gray-600"
                >
                  Backend-Focused Full Stack Developer · IT Undergraduate
                </motion.p>

                {/* Accent line */}
                <div className="w-12 h-[2px] bg-gray-900 my-3" />

                {/* Skills */}
                <motion.div
                  variants={container}
                  className="flex flex-wrap gap-2"
                >
                  {[
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "React",
                    "Redux",
                    "REST APIs",
                  ].map((skill) => (
                    <motion.div key={skill} variants={item}>
                      <Badge
                        variant="outline"
                        className="text-xs text-gray-700"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Bio */}
            <motion.div
              variants={item}
              className="mt-6 border-l-2 border-gray-900 pl-4"
            >
              <p className="text-sm text-gray-700 leading-relaxed">
                I enjoy building scalable backend systems and clean admin
                dashboards. My focus areas include role-based access control,
                secure REST APIs, and real-world tools like CRMs and tracking
                systems used in production environments.
              </p>
            </motion.div>

            {/* Actions */}
            <motion.div
              variants={item}
              className="mt-6 flex gap-3"
            >
              <Button variant="outline" size="sm" className="gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </Button>

              <Button variant="outline" size="sm" className="gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>

              <Button variant="outline" size="sm" className="gap-2">
                <Mail className="h-4 w-4" />
                Contact
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Developer;
