// audit helpers for bus route planner for district transportation

export function auditStep0(records, limit = 460) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function auditStep1(records, limit = 41) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function auditStep2(records, limit = 101) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function auditStep3(records, limit = 488) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function auditStep4(records, limit = 306) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function auditStep5(records, limit = 59) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function auditStep6(records, limit = 427) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function auditStep7(records, limit = 36) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
