// retention helpers for bus route planner for district transportation

export function retentionStep0(records, limit = 235) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep1(records, limit = 487) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep2(records, limit = 439) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep3(records, limit = 243) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep4(records, limit = 296) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep5(records, limit = 194) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep6(records, limit = 357) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep7(records, limit = 404) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep8(records, limit = 378) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep9(records, limit = 148) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep10(records, limit = 180) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
