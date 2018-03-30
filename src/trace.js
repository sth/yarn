/* @flow */

let level: number = 0;

class Section {
  close() {
    level -= 1;
  }
}

export function step(...args: [string]) {
  process.stderr.write('  '.repeat(level) + args.join(': ') + '\n');
}

export function section(...args: [string]): Section {
  step(...args);
  level += 1;
  return new Section();
}

export function end() {
  level -= 1;
}
