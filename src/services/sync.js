// sync helpers for bus route planner for district transportation

export function syncStep0(records, limit = 462) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep1(records, limit = 37) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep2(records, limit = 472) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep3(records, limit = 142) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep4(records, limit = 480) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep5(records, limit = 74) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep6(records, limit = 445) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep7(records, limit = 184) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
