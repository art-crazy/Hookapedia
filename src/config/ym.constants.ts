export const YM_ID = 103415240;

const ymEnabledRaw = (process.env.NEXT_PUBLIC_YM_ENABLED ?? 'true').toLowerCase();
export const YM_ENABLED = ymEnabledRaw === 'true' || ymEnabledRaw === '1';
