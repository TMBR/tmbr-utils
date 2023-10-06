function now() {
  const time = Date.now();
  const last = now.last || time;
  return now.last = (time > last ? time : last + 1);
}

export function uid(prefix = '', suffix = '') {
  return prefix + now().toString(16) + suffix;
};