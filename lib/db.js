import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

/**
 * Tworzymy jednego globalnego klienta Prisma w trybie deweloperskim,
 * żeby uniknąć wielu połączeń podczas HMR / hot reload.
 */
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // możesz tu usunąć logowanie w prod
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
