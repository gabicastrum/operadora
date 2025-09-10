// Constantes básicas de tempo em milissegundos
export const TIME_MS = {
  SECOND: 1000,
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000,
} as const;

// Constantes de períodos específicos
export const PERIOD_MS = {
  THIRTY_DAYS: 30 * TIME_MS.DAY, // 30 dias em milissegundos (2.592.000.000ms)
  SEVEN_DAYS: 7 * TIME_MS.DAY,   // 7 dias em milissegundos
  ONE_YEAR: 365 * TIME_MS.DAY,   // 1 ano em milissegundos
} as const;

// Constantes de períodos em dias
export const PERIOD_DAYS = {
  TRIAL_PERIOD: 30,              // Período de trial/teste em dias
  WEEK: 7,                       // Uma semana em dias
  MONTH: 30,                     // Um mês padrão em dias
} as const;

// Constantes de períodos em anos
export const PERIOD_YEARS = {
  FIDELITY_PERIOD: 1,            // Período de fidelidade padrão (1 ano)
  CONTRACT_DURATION: 1,          // Duração padrão do contrato
} as const;
