// messaging helpers for bus route planner for district transportation

export function messagingStep0(records, limit = 309) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep1(records, limit = 253) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep2(records, limit = 403) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep3(records, limit = 232) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep4(records, limit = 17) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep5(records, limit = 83) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep6(records, limit = 97) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep7(records, limit = 249) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep8(records, limit = 465) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep9(records, limit = 151) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep10(records, limit = 302) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
