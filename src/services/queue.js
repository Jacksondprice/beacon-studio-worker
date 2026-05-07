// queue helpers for bus route planner for district transportation

export function queueStep0(records, limit = 444) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep1(records, limit = 306) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep2(records, limit = 63) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep3(records, limit = 333) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep4(records, limit = 280) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep5(records, limit = 25) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep6(records, limit = 218) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep7(records, limit = 70) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep8(records, limit = 126) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep9(records, limit = 344) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function queueStep10(records, limit = 74) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('queue step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
