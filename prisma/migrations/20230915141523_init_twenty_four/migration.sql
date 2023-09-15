-- CreateTable
CREATE TABLE "LoanPayment" (
    "id" TEXT NOT NULL,
    "principalRepayed" DOUBLE PRECISION NOT NULL,
    "interestRepayed" DOUBLE PRECISION NOT NULL,
    "totalRepayed" DOUBLE PRECISION NOT NULL,
    "loanId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LoanPayment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LoanPayment" ADD CONSTRAINT "LoanPayment_loanId_fkey" FOREIGN KEY ("loanId") REFERENCES "Loan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
