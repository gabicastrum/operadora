-- CreateTable
CREATE TABLE "public"."Plano" (
    "codigo" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "custoMensal" DOUBLE PRECISION NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Plano_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "public"."Cliente" (
    "codigo" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "public"."Assinatura" (
    "codigo" SERIAL NOT NULL,
    "codPlano" INTEGER NOT NULL,
    "codCli" INTEGER NOT NULL,
    "inicioFidelidade" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fimFidelidade" TIMESTAMP(3) NOT NULL,
    "dataUltimoPagamento" TIMESTAMP(3),
    "custoFinal" DOUBLE PRECISION NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Assinatura_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "public"."Pagamento" (
    "codigo" SERIAL NOT NULL,
    "codAss" INTEGER NOT NULL,
    "valorPago" DOUBLE PRECISION NOT NULL,
    "dataPagamento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pagamento_pkey" PRIMARY KEY ("codigo")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "public"."Cliente"("email");

-- AddForeignKey
ALTER TABLE "public"."Assinatura" ADD CONSTRAINT "Assinatura_codPlano_fkey" FOREIGN KEY ("codPlano") REFERENCES "public"."Plano"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Assinatura" ADD CONSTRAINT "Assinatura_codCli_fkey" FOREIGN KEY ("codCli") REFERENCES "public"."Cliente"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Pagamento" ADD CONSTRAINT "Pagamento_codAss_fkey" FOREIGN KEY ("codAss") REFERENCES "public"."Assinatura"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;
