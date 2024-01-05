#!/usr/bin/env node

// const fs = require('fs');
// const util = require('util');
// const chalk = require('chalk');

import fs from 'fs';
import chalk from 'chalk';

// Method #2
// const lstat = util.promisify(fs.lstat);

// Method #3
const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
  if (err) {
    console.log(err);
  }

  const statPromises = filenames.map(filename => {
    return lstat(filename);
  })

  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
      console.log(chalk.blue(filenames[index]));
    } else {
      console.log(chalk.bold(filenames[index]));
    }
  };
});
