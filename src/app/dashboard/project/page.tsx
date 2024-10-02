"use client"
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {IconArrowNarrowRight, IconCircleMinus, IconSearch} from "@tabler/icons-react";
import { CanvasRevealEffect } from "../ui/revalChat";
import { Progress, ScrollArea } from "@radix-ui/themes";
import * as Avatar from '@radix-ui/react-avatar';
import Image from "next/image";
import { AnimatedTooltip } from "../ui/animTooltip";
import {useRouter} from "next/navigation";


export default function Project() {
    const router = useRouter();

  return (
      <div className="flex">

          <h1 className="text-xl font-bold color-white">Project</h1>
      </div>
  );
}

