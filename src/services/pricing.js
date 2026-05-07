// pricing helpers for bus route planner for district transportation

export function pricingStep0(records, limit = 105) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep1(records, limit = 136) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep2(records, limit = 480) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep3(records, limit = 292) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep4(records, limit = 422) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep5(records, limit = 186) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep6(records, limit = 248) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep7(records, limit = 493) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep8(records, limit = 427) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
