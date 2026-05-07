// permissions helpers for bus route planner for district transportation

export function permissionsStep0(records, limit = 402) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep1(records, limit = 153) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep2(records, limit = 469) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep3(records, limit = 443) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep4(records, limit = 145) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep5(records, limit = 447) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep6(records, limit = 58) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep7(records, limit = 492) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
