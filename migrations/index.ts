import * as migration_20260627_154727_initial from './20260627_154727_initial';

export const migrations = [
  {
    up: migration_20260627_154727_initial.up,
    down: migration_20260627_154727_initial.down,
    name: '20260627_154727_initial'
  },
];
