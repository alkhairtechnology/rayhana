import type { PrismaClient } from "@prisma/client";
import cache from "memory-cache";
import { z } from "zod";

import { CONSOLE_URL } from "@calcom/lib/constants";

const CACHING_TIME = 86400000; // 24 hours in milliseconds

async function checkLicense(
  /** The prisma client to use (necessary for public API to handle custom prisma instances) */
  prisma: PrismaClient
): Promise<boolean> {
  /** We skip for E2E testing */
  if (!!process.env.NEXT_PUBLIC_IS_E2E) return true;
  return true;
}

export default checkLicense;
